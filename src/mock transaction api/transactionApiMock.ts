import { TransactionMockResponse } from '../models/transaction.model';

export const TRANSACTION_MOCK_RESPONSE : TransactionMockResponse ={ 
    //copy from given document
    items: [
        {
          id: "41bbdf81-735c-4aea-beb3-3e5f433a30c5",
          userId: "074092",
          createdAt: "2023-03-16T12:33:11.000Z",
          type: "payout",
          amount: 30
        },
        {
          id: "41bbdf81-735c-4aea-beb3-3e5fasfsdfef",
          userId: "074092",
          createdAt: "2023-03-12T12:33:11.000Z",
          type: "spent",
          amount: 12
        },
        {
          id: "41bbdf81-735c-4aea-beb3-342jhj234nj234",
          userId: "074092",
          createdAt: "2023-03-15T12:33:11.000Z",
          type: "earned",
          amount: 1.2
        },
        //to test with multi users
        {
            id: "41bbdf81-735c-4aea-beb3-342jhj234tb123",
            userId: "071234",
            createdAt: "2023-03-15T12:33:11.000Z",
            type: "payout",
            amount: 10
        },
        {
            id: "41bbdf81-735c-4aea-beb3-342jhj234er012",
            userId: "071234",
            createdAt: "2023-03-15T12:33:11.000Z",
            type: "earned",
            amount: 80
        },
        //if multi payouts by same user
        {
            id: "41bbdf81-735c-4aea-beb3-342jhj234tb234",
            userId: "071234",
            createdAt: "2023-03-15T12:33:11.000Z",
            type: "payout",
            amount: 50
        },
        //paid_out
        {
            id: "41bbdf81-735c-4aea-beb3-342jhj234tb345",
            userId: "071234",
            createdAt: "2023-03-15T12:33:11.000Z",
            type: "paid_out",
            amount: 5
        }
      ],
      meta: {
        totalItems: 1200,
        itemCount: 5,
        itemsPerPage: 5,
        totalPages: 240,
        currentPage: 1
      }
    


};
