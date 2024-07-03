import { Injectable } from '@nestjs/common';
import { TRANSACTION_MOCK_RESPONSE } from 'src/mock transaction api/transactionApiMock';
import { Transaction } from '../models/transaction.model';
import { User } from 'src/models/aggregatedData.model';
@Injectable()


export class TransactionService {


    //get all transactions with same Id
    //since we are using mock API, there will only be what is from the 'TRANSACTION_MOCK_RESPONSE'
    getTransactionsByUserId(userId:string):Transaction[] {
        const transactions =  TRANSACTION_MOCK_RESPONSE.items.filter(transaction => transaction.userId === userId);
        return transactions;
    }

    //get all transactions
    getAllTransactions():Transaction[]{
        return TRANSACTION_MOCK_RESPONSE.items;
    }
    //could be nice to have it when we work with the real Transaction API, and filtered also by a time period :)
//   getFilteredTransactions(userId: string, startDate: string, endDate: string): Transaction[] {
//     // get transactions by userId and date period
//     const transactions = TRANSACTION_MOCK_RESPONSE.items.filter(transaction =>
//       transaction.userId === userId &&
//       transaction.createdAt >= startDate &&
//       transaction.createdAt < endDate
//     );

//     return transactions;
//   }
}
