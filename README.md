<h1 align="left">Spirii Code Challenge</h1>

###

<p align="left">Summary from requirements:<br><br>🎯 Goals: <br>Two working functions should be implemented as MVP:<br>1. GetAggregatedDataByUserId (userId:string)<br>> (current) balance, earned, spent, payout, paid out; all as number.<br>2. GetRequestedPayoutsList<br>> userId (string), payout amount (number). Need to check if there are multi requests from same user, and sum up.<br>Optional:<br>1.<br><br><br>🎲 Assumptions:<br>1. Paid outs are the approved payouts, which means in this project, if there is a transaction with type "pay out", it will not affect the balance until it is marked as a paidout.<br><br>📚 Thoughts on the pre-conditions:<br>1. Service will have millions of requests per day<br><br><br>2.	Data must be up to date with less than 2 minute’s delay<br><br><br>3.	You have limited access to transaction API (5 requests per minute, with limit 1000 transactions)<br><br><br>4.	You can mock transaction API entirely so that we can run your app<br><br><br>✨ Discussions on Testing Strategy:</p>

###

<h2 align="left">Code Related thoughts and discussions</h2>

###

<p align="left">As a NestJS project to handle aggregated data, there are four layers are taken into consideration to realize the MVP.<br>1. Controller layer:<br>2. Service layer:<br>3. Layer to handle mocked transaction API (called "mock transaction api" in the project):<br>This contains the example API Response<br>4. Model layer:<br>To handle the requirements of MVP, and to be more clear on what data should be pass for different requests, there are 3 models designed:<br>- User model that contains all aggregated data required.<br>- Transaction model that handles the data receives from the mock API.<br>- Payout model that only contains userId and payout amount.</p>

###

<h2 align="left">I code with</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" height="40" alt="nestjs logo"  />
</div>

###