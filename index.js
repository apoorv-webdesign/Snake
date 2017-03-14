var express = require('express');
var app = express();

http.set('port', (process.env.PORT || 5000));
http.use(express.static(__dirname + '/public'));

http.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});