# affilate-link-nodejs

This is the NodeJS middleware in chargeIQ backend which deals with the affiliate marketing provision system.

In this project repository, there are following NodeJS Scripts. The functionalities for them are the following: 

- <code>app.js</code>: The main service written by express is located here.
- <code>url-parser.js</code>: Parses the affiliate marketing link being called by the external shop to an JSON object.
- <code>couchdb-controller.js</code>: Deals with the communication between the service and the CouchDB link. 

## Content of a affiliate link
An affilate link code contains the following information (currently) which will be saved in the CouchDB database <code>affilate-marketing-link</code>: 
- <code>Date</code>: The date at which the affilate link code is called.
- <code>Product</code>: Which product has been called by the user? Can be everything which is offered by ChargeIQ. 
- <code>Company</code>: Which affilate partner has called our affilate link? 
- <code>Paid</code>: Marks the status if the call of a certain affilate link call has been purchased (via an external payment service like Paypal, etc.)

## Functionality of submodules
The affiliate link middleware contains different software components like the following: 
- <code>app.js</code>: The major NodeJS script. It starts the express HTTP service and contains all the REST API endpoints used by affiliate link services.
- <code>url-parser.js</code>: Parses the URL which has a predefined format and contains the affiliate link parameters (see Content of a referral)

![Time diagram of affiliate service](/diagrams/affiliate_link_time_diagram.png)

## REST API Endpoints