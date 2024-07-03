export class Transaction{
    id: string;
    userId: string;
    createdAt: string;  //should be a Date() object but in such mock case, it is modified as a string.
    type: 'earned' | 'spent' | 'payout' | 'paid_out';
    amount: number;
}

export class Meta{
    totalItems: number;
    itemCount:number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}

export class TransactionMockResponse{
    items: Transaction[];
    meta:Meta;
}