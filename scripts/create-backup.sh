#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKUP_DIR="$ROOT_DIR/backups"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
STAGING_DIR="$BACKUP_DIR/staging-$TIMESTAMP"
ARCHIVE_PATH="$BACKUP_DIR/autriders-backup-$TIMESTAMP.tar.gz"
DB_DUMP_PATH="$STAGING_DIR/db-autriders-$TIMESTAMP.sql"

mkdir -p "$BACKUP_DIR" "$STAGING_DIR"

echo "[backup] Creating project snapshot..."
rsync -a \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='dist' \
  --exclude='coverage' \
  --exclude='backups' \
  "$ROOT_DIR/" "$STAGING_DIR/project/"

DB_DUMP_CREATED="false"
if command -v docker >/dev/null 2>&1 && docker ps --format '{{.Names}}' | rg -q 'postgres'; then
  echo "[backup] Postgres container found. Creating SQL dump..."
  if docker exec postgres pg_dump -U autriders -d autriders > "$DB_DUMP_PATH"; then
    DB_DUMP_CREATED="true"
    echo "[backup] Database dump saved: $DB_DUMP_PATH"
  else
    echo "[backup] Warning: DB dump failed, continuing with project-only backup." >&2
    rm -f "$DB_DUMP_PATH"
  fi
else
  echo "[backup] Postgres container not running (or named differently). Skipping SQL dump."
fi

cat > "$STAGING_DIR/README-BACKUP.txt" <<TXT
Autriders backup created at: $TIMESTAMP

Contents:
- project/: Application source snapshot (excluding heavy build/cache folders)
- db-autriders-*.sql: PostgreSQL logical backup (if generated)

DB dump included: $DB_DUMP_CREATED
TXT

echo "[backup] Compressing backup archive..."
tar -czf "$ARCHIVE_PATH" -C "$STAGING_DIR" .
rm -rf "$STAGING_DIR"

echo "[backup] Done. Download this file:"
echo "$ARCHIVE_PATH"
