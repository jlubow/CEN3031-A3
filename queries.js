/* Fill out these functions using Mongoose queries*/

var mongoose = require('mongoose'), 
  Schema = mongoose.Schema, 
  Listing = require('./ListingSchema.js'),
  config = require('./config.js');


mongoose.connect(config.db.uri);


var listingName;

var findLibraryWest = function() {
  Listing.findOne({ name: "Library West"}, function(err, listingName) {
    if (err) throw err;

    console.log(listingName);
    
  })
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   Listing.findOneAndRemove({ code: 'CABL'}, function(err) {
    if (err) throw err;

    console.log('Listing Deleted');

   })
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

   Listing.findOneAndUpdate({ name: 'Phelps Laboratory'}, {address: '1275 Center Drive, Gainesville, FL 32611' }, function(err, listing) {
    if (err) throw err;

    });


   Listing.findOne({ name: 'Phelps Laboratory'}, function(err, listing) {
    if (err) throw err;

    console.log(listing);

    });
   
};


var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

   Listing.find({}, function(err, listings) {
    if (err) throw err;

    console.log(listings);

   })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
