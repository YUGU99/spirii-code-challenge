import { Module } from '@nestjs/common';
import { TransactionController } from './controllers/transaction.controller';
 
import { TransactionService } from './services/transaction.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [], 
  controllers: [TransactionController,UserController],
  providers: [TransactionService,UserService],
})
export class AppModule {}
