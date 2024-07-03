<h1 align="left">Spirii Code Challenge</h1>

###

<p align="left">Summary from requirements:<br><br>🎯 Goals: <br>Two working functions should be implemented as MVP:<br>1. GetAggregatedDataByUserId (userId:string)<br>> (current) balance, earned, spent, payout, paid out; all as number.<br>2. GetRequestedPayoutsList<br>> userId (string), payout amount (number). Need to check if there are multi requests from same user, and sum up.<br>Optional:<br>1. get filtered data for example, user with spent transaction on specific date...<br><br>More is in the code comments<br><br><br>🎲 Assumptions:<br>1. Paid outs are the approved payouts, which means in this project, if there is a transaction with type "pay out", it will not affect the balance until it is marked as a paidout.<br><br>📚 Thoughts on the pre-conditions:<br>Cache and RateLimiter classes are created in the project to handle pre-conditoions described in the pre-conditions.<br>Due to time limits, there are short explanations in code comments.<br><br>✨ Discussions on Testing Strategy:<br>Due to time limit, there was no time for writing down test cases. <br>But we can use Unit test, Integration test or E2E test like supertest.<br><br>TDD:<br>1. write test first with 1...many cases<br>2.implement functionalities<br>3. run tests oftenly</p>

###

<h2 align="left">Code Related thoughts and discussions</h2>

###

<p align="left">As a NestJS project to handle aggregated data, there are four layers are taken into consideration to realize the MVP.<br>(At the beginning, my thought was to divide it into two parts for controller and service layers: transaction part to handle transactions and aggregate data; and payout part to handle payouts. But during coding, it made more sense if we have transaction categorized to handle un-aggregated data, and a user part to process aggregated user data by requirements)<br><br>1. Controller layer:<br>- Transaction controller: get transactions <br>- User Controller: MVP<br><br>2. Service layer:<br>- Transaction service<br>- User service<br><br>3. Layer to handle mocked transaction API (called "mock transaction api" in the project):<br>This contains the example API Response<br><br>4. Model layer:<br>To handle the requirements of MVP, and to be more clear on what data should be passed for different requests, there are 3 model files created to handle (I consider there should be steps to get transactions; aggregate data for user object; object to pass payouts):<br>- User model that contains all aggregated data required.<br>- Transaction model that handles the data receives from the mock API.<br>- Payout model that only contains userId and payout amount.</p>

###

<h2 align="left">I code with</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" height="40" alt="nestjs logo"  />
</div>

###