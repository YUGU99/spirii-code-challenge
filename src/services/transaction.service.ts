import { Injectable } from '@nestjs/common';
import { TRANSACTION_MOCK_RESPONSE } from 'src/mock transaction api/transactionApiMock';
import { Transaction } from '../models/transaction.model';
import { User } from 'src/models/aggregatedData.model';
@Injectable()


export class TransactionService {


    //get all transactions
    //since we are using mock API, there will only be what is from the 'TRANSACTION_MOCK_RESPONSE'
    getTransactionsByUserId(userId:string):Transaction[] {
        const transactions =  TRANSACTION_MOCK_RESPONSE.items.filter(transaction => transaction.userId === userId);
        return transactions;
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


//this is the step to aggregate data from transaction to data related to each user for further requirement processing
  getUser(userId: string): User {
    // Initialize aggregated data
    let balance = 0; //suppose we will also get the balance from anothet API that stores more user info, but here the balance can be only calculated with the default value 0.

    let earned = 0;
    let spent = 0;
    let payout = 0;
    let paidOut = 0;

    // Calculate aggregated data which is called User in this case from transactions
    TRANSACTION_MOCK_RESPONSE.items.forEach(transaction => {
      if (transaction.userId === userId) {
        if (transaction.type === 'earned') {
            earned += transaction.amount;
        } else if (transaction.type === 'spent') {
            spent += transaction.amount;
        } else if (transaction.type === 'payout') {
            payout += transaction.amount;
        } else if (transaction.type === 'paid_out'){ // I assume there should be an approval before payout > Paid out
            paidOut += transaction.amount;
        }
        //Assumption: balance is set to be earned - spent - paidOut
        //otherwise if we have another API to get more detailed userInfo with its current balance, then tehre should be a "getBalance" method to get from another API
        balance = earned - spent - paidOut;
      }
    });

    return {
        userId,
        balance,
        earned,
        spent,
        payout,
        paidOut,
    };
  }
}
