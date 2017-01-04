var google = require('googleapis');
var fusiontables = google.fusiontables('v2');

var key = require('./your.json');
var jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/fusiontables', 'https://www.googleapis.com/auth/fusiontables'],
  null
);

jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  }
 
  fusiontables.query.sql({
    auth: jwtClient,
    //sql: 'SELECT * FROM 1NQAJr98Cp0MfDoErfw1cPN1O1L5kqevkoak7zb8D',
    sql: "INSERT INTO <table-id> (Text, Number, Location, Date) VALUES ('hello', 123, 'taipei', '2016-12-01')",  
    key: '<api-key>'
  }, function (err, res) {
      if (err) {
          console.log(err);
      }
      else {
          console.log(res);
      }
  });
});