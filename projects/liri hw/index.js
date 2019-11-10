
// index.js
// It is not necessary to store the ouput of dotenv, unless you are checking for errors
// the content of you env file is loaded into the process.env array
// const dotenv = require("dotenv").config();
require("dotenv").config();

// I like to require all my modules at the top of the file together...
// not required, just nicer...
var Spotify = require('node-spotify-api');
var inquirer = require("inquirer");
var fs = require('fs');
var axios = require("axios");


const keys = require("./assets/javascript/keys.js");
console.log(keys);
var divider= "\n------------------------------------------\n\n";

var Omdb = function(){

    this.movieThis = (movie){
        var url = "http://www.omdbapi.com/?i=tt3896198&apikey="
    }
}

// template string... nice!
// But `user_id` is not defined... this will throw and error.
// var playlists_url = `https://api.spotify.com/v1/users/${user_id}/playlists`;


//  var spotify = new Spotify(keys.spotify);
//  var omdbKey = keys.omdb.api_key;

//  const command = process.argv[2];
//  const secondCommand = process.argv[3];

//Make it so liri.js can take in one of the following commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

// This is a node application ther is no document or Window objects.
// You do not need to call document ready and jQuery is only for the browser.
// $(document).ready(function(){

// You should be able to run this file now and see your console log and you keys.
console.log("hi");
    
// });//end of doc.ready fn.//