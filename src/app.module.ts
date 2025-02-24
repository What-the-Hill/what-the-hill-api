import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { StatusesModule } from './statuses/statuses.module';
import { StagesModule } from './stages/stages.module';
import { LegislatorsModule } from './legislators/legislators.module';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    StatusesModule,
    StagesModule,
    LegislatorsModule,
    BillsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
