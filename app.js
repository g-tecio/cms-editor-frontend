var express = require('express');

var app = express();
var request = require('request');
var images;


app.set('view engine', 'ejs');
/* request.get("https://arivkc4qr0.execute-api.us-west-2.amazonaws.com/dev/Hackaton_Lambda_Chris", (err, res, body) => {
    if (err) {
        return console.dir(err);
    }
    images = JSON.parse(body);
}); */

app.get('/', function (req, res) {
    // console.log(images);
    res.render('pages/index');
    /* res.render('pages/index', {
        images: images
    }); */
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log("Directory app runing on port 3000");


module.exports = app;