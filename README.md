#Getting Started
Install NodeJS:
Download [NodeJS](http://nodejs.org/download)  
Open installer and follow instructions  
Install MongoDB:
`brew install mongodb`  
`cd mockServer`  
Install dependencies such as Express and Mongoose:
`./install.sh`
Start MongoDB and Fake Server:
`./start-server.sh <exampleX.js>` [example1.js|example2.js|example3.js]

##Sample Postman Workflow
###Sample API

`Get Offer` _[Unpublished]_
| URL              | /api/v1/offer/{offer_id}        |
|------------------|---------------------------------|
| Verb             | GET                             |
| Description      | Returns the quote for the offer |
| Response Formats | json, xml                       |  
`Request`
| HTTP Headers    | `Authorization` _Access token_ __Required__  							|
|									| `Accept` [`application/json|application/xml] __Required__ |
|-----------------|-----------------------------------------------------------|
| Path Parameters | offer_id _offer\_id_																			|
| Body            | None     																									|
|                 |          																									|
`Response`
|									 | 						|
|------------------|------------|
| HTTP Status Code | 200 (“OK”) |
`Possible Errors`
| Error Code | Description                                       |
|------------|---------------------------------------------------|
| ERROR-500  | Unable to process your request, please try again. |
_Examples_
__JSON Request__
GET `/api/v1/offer/1234
HTTP Headers:
> `Accept: application/json  
> Authorization: Basic 1234567890abcdefghijklmnop
Body: _None_  
__JSON Response__
HTTP Status Code: `200`
Body:
```
{
	"id": "1234",
		"total": "45.00",
		"taxes": {
			"GST": "3.28",
			"PST":"3.28"
		}
}
```
