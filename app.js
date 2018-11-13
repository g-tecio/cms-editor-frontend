var express = require('express');

var app = express();
var request = require('request');


app.set('view engine', 'ejs');
/* request.get(urlAPI, (err, res, body) => {
    if (err) {
        return console.dir(err);
    }
}); */

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log("Directory app runing on port 3000");


module.exports = app;