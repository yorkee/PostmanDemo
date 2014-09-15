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

        var purchaseOfferSuccessfulResponse = {
           "status": "sucess",
            "type": "purchaseOffer"
        };

        var failResponse = {
            "ERROR500": "Unable to process your request, please try again."
        };

        var getOffer = function(request, response){
            if (request.params.OFFER_ID == "1234"){
                response.json(getOfferSuccessfulResponse);
                return;
            } else {
                response.send(500, failResponse);
            }
        };

        var purchaseOffer = function(request, response){
            console.log("cc: ", request.get("creditCard"));
            if (request.body.creditCard){

                response.json(purchaseOfferSuccessfulResponse);
                return;
            } else {
                response.send(500, failResponse);
            }
        };


        app.get('/api/v1/offer/:OFFER_ID', getOffer);

        app.post('/api/v1/offer/:OFFER_ID', purchaseOffer);

        app.listen(8888);

        console.log("Ready to Serve!");

    });
