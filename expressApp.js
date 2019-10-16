const Data = require('./prepareData');
let dataObj = Data.dataObj;

const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
app.use( '/style', express.static(__dirname + '/src/style'));
app.use( '/module', express.static(__dirname + '/src//module'));

const PATH_TO_TEMPLATES = 'src';
nunjucks.configure(PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
});
app.get('/', function (req, res) {
    return res.render('index.html', {dataObj});
});
app.listen(2900);