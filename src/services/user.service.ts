import { TRANSACTION_MOCK_RESPONSE } from "src/mock transaction api/transactionApiMock";
import { User } from "src/models/aggregatedData.model";
import { Payout } from "src/models/payout.model";

export class UserService{
    //this is the step to aggregate data from transaction to data related to each user for further requirement processing
  getUserByUSerId(userId: string): User {
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

  //get all users
  // getAllUsers():User[]{
  //   const users:User[] = [];
  //   //similair to getUserByUserId, but the return type is a User list and without filtering userid

  //   return users;
  // }

  //get requested payouts list
  
  getAllRequestedPayoutsList():Payout[]{

    const payouts: Payout[] = [];
    

    //get all payouts with transaction tyope as 'payout'
    TRANSACTION_MOCK_RESPONSE.items.forEach(transaction => {
      if (transaction.type === 'payout') {
        //add an if to check if same user already in list
        const userExist = payouts.some(payout => payout.userId === transaction.userId);

        if(!userExist){
          const newPayout = new Payout(transaction.userId,transaction.amount);
          payouts.push(newPayout);        
        }else{
          const index = payouts.findIndex(payout=>payout.userId === transaction.userId);
          payouts[index].amount += transaction.amount; //update payouts
          
        }
      }
    });
    return payouts;
  }


  // can also filter payoutlist by created date
  //createdAt should be a Date but here set as string becasue of createdAt mock api type
  // getRequestedPayoutsListByDate(createdAt:string):Payout[]{
  //   const payouts :Payout[] = [];

  //   //should have a filter with the correct createdat 

  //   return payouts;
  // }



  //process requested payouts list
//first get all payouts
  // private getAllPayouts():Payout[]{
    
  // }

  // //if there are multiple payouts for the same userid
  // private sumUpByUserId():Payout[]{
  //   let inputs = this.getAllPayouts();
  //   let comparedInputs = this.getAllPayouts();
  //   const outputs : Payout[] = [];
  //   //check all in the list if there are same userId, if so, add the amount and delete the old ones and add new ones to outputs

  //   inputs.forEach(input=>{
  //     //compare userId one by one if there
      
  //   })
  //   return outputs;
  // }

  
}