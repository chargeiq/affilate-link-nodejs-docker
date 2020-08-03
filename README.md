# affilate-link-nodejs

This is the NodeJS middleware in chargeIQ backend which deals with the affiliate marketing provision system.

In this project repository, there are following NodeJS Scripts. The functionalities for them are the following: 

- <code>app.js</code>: The main service written by express is located here.
- <code>url-parser.js</code>: Parses the affiliate marketing link being called by the external shop.
- <code>couchdb-controller.js</code>: Deals with the communication between the service and the CouchDB link. 

## Content of a referral
An affilate link code contains the following information (currently): 
- <code>Date</code>: The date at which the affilate link code is called.
- <code>Product</code>: Which product has been called by the user? Can be everything which is offered by ChargeIQ. 
- <code>Company<code>: Which affilate partner has called our affilate link? 