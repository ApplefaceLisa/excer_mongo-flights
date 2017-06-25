/**
 * Created by Yajing Li on 6/12/2017.
 */
let mongoose = require("mongoose");
/*
var flight = mongoose.model('flight', {
    ident: String,
    timestamp: String,
    longitude: String,
    latitude: String,
    groundspeed: String,
    altitude: String,
    updateType: String,
    heading: String,
    arrivalTime: String
});
*/
var flight = mongoose.model('flight', {
    "AIRLINE_ID" : Number,
    "CARRIER" : String,
    "ORIGIN" : String,
    "ORIGIN_CITY_NAME" : String,
    "DEST" : String,
    "DEST_CITY_NAME" : String,
    "DEP_TIME" : Number,
    "ARR_TIME" : Number,
    "" : ""
});
module.exports = flight;