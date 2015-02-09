var express = require('express');

var app = express();
var port = 8666;
var cors = require('cors');

app.use(express.static(__dirname+'/public'));
app.use(cors());

app.listen(port, function() {
	console.log("listening on port " + port);
})

app.get('/interest_rate', function(req, res) {
    var rando = (Math.random() * (20 - 1) + 1).toFixed(2);

    res.status(200).json(rando);
})