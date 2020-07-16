const express = require('express');
const exphbs =  require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const regularRouter = require('./routes/regularRouter');
// const fileUpload = require('express-fileupload');
 
const app = express();

//middleware
//TODO work on file upload
// app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cookieParser()); 

app.engine('handlebars',exphbs({
    partialsDir: path.join(__dirname + "/views/partials")
}));
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname, 'public')));

//router
app.use('/', regularRouter);
 
app.listen(8080, () => {
    console.log(`App listening on port localhost:8080`);
});
