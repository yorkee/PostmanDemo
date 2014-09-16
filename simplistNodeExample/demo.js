var requirejs = require('requirejs');
requirejs.config({
    baseUrl: __dirname,
    nodeRequire: require
});

requirejs(['express', 'session_repo'],
    function(express, session) {

        var app = express();

        app.configure(function() {
            app.use(express.bodyParser());
            app.use(express.cookieParser());
            app.use('/', express.static(__dirname + '/public'));
        });

        var getOfferSuccessfulResponse = {
            "id": "1234",
            "total": "45.00",
            "taxes": {
                "GST": "3.28",
                "PST":"3.28"
            }
        };

        var offersSuccessfulResponse = {
            "offers" : [ {
                "id" : "1234",
                "name" : "Good Offer"
            },
            {
                "id" : "1235",
                "name" : "Better Offer"
            },
            {
                "id" : "1236",
                "name" : "The Awesome Offer"
            }]
        };

        var purchaseOfferSuccessfulResponse = {
           "status": "sucess",
            "type": "purchaseOffer"
        };

        var failResponse500 = {
            "ERROR500": "Unable to process your request, please try again."
        };

        var failResponse401 = {
            "ERROR401": "Unable to process your request, please try again."
        };


        var getOffers = function(request, response){
            if (!request.headers['authorization'] ){
                response.send(401, failResponse401);
            } else {
                response.json(offersSuccessfulResponse);
            }
        };


        var getOffer = function(request, response){
            console.log("what the fuck is request.headers??? ", request.headers);
            if (!request.headers['authorization'] ){
                response.send(401, failResponse401);
            } else if (request.params.OFFER_ID == "1234" ||
                request.params.OFFER_ID == "1235" ||
                request.params.OFFER_ID == "1236"){
                getOfferSuccessfulResponse.id = request.params.OFFER_ID;
                response.json(getOfferSuccessfulResponse);
                return;
            } else {
                response.send(500, failResponse500);
            }
        };

        var purchaseOffer = function(request, response){
            console.log("cc: ", request.get("creditCard"));
            if (request.body.creditCard){

                response.json(purchaseOfferSuccessfulResponse);
                return;
            } else {
                response.send(500, failResponse500);
            }
        };


        app.get('/api/v1/offer/:OFFER_ID', getOffer);

        app.get('/api/v1/offers', getOffers);
        app.post('/api/v1/offer/:OFFER_ID', purchaseOffer);



        app.listen(8888);

        console.log("Ready to Serve!");

    });
