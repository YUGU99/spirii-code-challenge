import { Controller, Get, Param, Query } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../models/transaction.model';
import { User } from 'src/models/aggregatedData.model';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}




  //get transactions based on userId 
  @Get('/:userId')
  getTransactions(
    @Param('userId') userId: string
  ) : Transaction[]{
    return this.transactionService.getTransactionsByUserId(userId);
  }

  //get aggregated user data by userId
  @Get('aggregatedUser/:userId')
  getAggregatedData(@Param('userId') userId: string): User {
    return this.transactionService.getUser(userId);
  }
}
