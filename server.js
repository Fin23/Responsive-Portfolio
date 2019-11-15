const express = require('express');

let PORT = process.env.PORT || 5001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log(`App running on port ${PORT}!`);
});
