const express = require('express')

const app = express();

app.use('/static', express.static('static'))

app.get('/', function(req, res) {
   res.sendFile(__dirname + '\\profile.html');
});

app.get('/math', function(req, res) {
   res.sendFile(__dirname + '\\math.html');
});

app.listen(3000);
