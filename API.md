#Sample API
##Get Offer _[Unpublished]_  
URL: `/api/v1/offer/{{offer_id}}`  
Verb: `GET`  
Description: Returns the quote for the offer  
Response Formats: `json|xml`  
###Request
HTTP Headers [Name | Description | Required]  
>`Authorization` _Access token_ __Required__  
`Accept` [`application/json` | `application/xml`] __Required__   

Path Parameters [Name | Description]  
>`offer_id` _offerID_	 
Body: _None_   

###Response
>HTTP Status Code: 200 (“OK”) 

	_Possible Errors_ [Error Code | Description]
	>`ERROR-500`: `Unable to process your request, please try again`.  

###Examples
####JSON Request
_GET `/api/v1/offer/1234
__HTTP Headers__:
> `Accept: application/json  
> Authorization: Basic 1234567890abcdefghijklmnop
__Body__: None_  
####JSON Response
HTTP Status Code: `200`
__Body__:
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
##Purchase Offer [Unpublished]
__URL__: `/api/v1/offer/{{offer_id}}`
__Verb__: `POST`
__Description__: Purchases an offer
__Response Formats__: `json|xml`
###Request [_Name_ | _Description_ | _Required_]
__HTTP Headers__:  
> `Authorization` Access token _Required_  
> `Accept` [`application/json` | `application/xml`] _Required_  

__Path Parameters__ [_Name_ | _Description_]:  
> `offer_id`	Offer id  

###Response
__HTTP Status Code__: `200` ("Accepted")  

___Possible Additional Errors___ [_Error Code_ | _Description_]  
`ERROR-500`	Unable to process your request, please try again.  

###Examples
####JSON Request
_PUT
> /api/v1/offer/1234
__HTTP Headers__:
Accept: application/json  
Authorization:	Basic 123567890abcdefghijklmnop   

__Body__:_
```
{
	"creditCard": {
		"userName": "John Doe",
		"type": "VISA",
		"number": "123456789012346",
		"expiryDate": "2015-03",
	}
}
```  
####JSON Response
_HTTP Status Code: 200
__Body__:_
```
{
	"status": "sucess",
	"type": "purchaseOffer"
}
```
