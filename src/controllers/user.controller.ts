import { Controller, Get, Param } from "@nestjs/common";
import { User } from "src/models/aggregatedData.model";
import { Payout } from "src/models/payout.model";
import { UserService } from "src/services/user.service";


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


//get aggregated user data by userId
@Get('UserInfo/:userId')
getUserAggregated(@Param('userId') userId: string): User {
  return this.userService.getUserByUSerId(userId);
}

//get requested payouts list
@Get('Payouts')
getRequestedPayoutsList():Payout[] {
    return this.userService.getAllRequestedPayoutsList();
}
}