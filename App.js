//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.route('/').get((req, res)=>{
    res.render('home');
})

app.listen(3000, () => {
    console.log('CONNECTION ESTABLISHED ON PORT 3000')
});