import { Controller, Get } from '@nestjs/common';

@Controller('billing')
export class BillingController {
  @Get('plans')
  plans() {
    return [
      { id: 'starter', name: 'Starter', usd: 19, inr: 1599 },
      { id: 'growth', name: 'Growth', usd: 49, inr: 4099 },
      { id: 'scale', name: 'Scale', usd: 99, inr: 8299 }
    ];
  }
}
