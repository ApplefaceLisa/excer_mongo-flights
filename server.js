/**
 * Created by Yajing Li on 6/12/2017.
 */
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let flight = require("./db/flight");
let jsonParser = bodyParser.json();
let cors = require("cors");
let app = new express();
app.use(jsonParser);
app.use(cors());
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost/flightsdb");

app.get('/myGetAPI', function(req, res, next) {
    flight.find(function(err, data) {
        if (err) {
            res.json(err).status(500);
        } else {
            res.send(data);
        }
    }).limit(20);
});
/*
app.post('/myGetAPI', function(req, res, next) {
    let flight = req.body.flight;
    let flightnew = new flight({
        ident : flight.ident
    });
    flightnew.save(function(err, data) {
        if (err) {
            res.json(err).status(500);
        } else {
            res.send(data);
        }
    }).limit(20);
});
*/
app.listen(8080, function() {
    console.log("server started.");
});