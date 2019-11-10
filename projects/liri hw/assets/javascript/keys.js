

// keys.js
// You only need to load dotenv once on your main file
// the process object it a global object and will be available in all your modules
// var env = require('dotenv').config();

// exports.spotify = {
//   id: process.env.SPOTIFY_ID,
//   secret: process.env.SPOTIFY_SECRET
// };

// exports.omdb = {
//   api_key: process.env.OMDB_API_KEY
// };

// Alternatively you do it like this, which feels a little bit cleaner to me.
// Your choice.
console.log('this is loaded');
 module.exports = {
  spotify: {
    id: process.env.SPOTIFY_ID,
     secret: process.env.SPOTIFY_SECRET
   },
   omdb: {
     api_key: process.env.OMDB_API_KEY
   }
 };