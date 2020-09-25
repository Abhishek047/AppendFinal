const path = require('path');
const express  = require('express');    //For Using Express
const mongoose  = require('mongoose');    //For using Mongoose   
const bodyParser = require('body-parser');    //For using Body-Parser

const routerLinkStories = require('./routes/api/stories');
const app = express();                          //Required To use express

//Body Parser Middleware

app.use(bodyParser.json());                      

//DB Config
const db = require('./config/keys').mongURI;

//Mongoose Connect
mongoose.connect(db , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to Database...."))
    .catch((err) => console.log(err));

//Routing

app.use('/api/story', routerLinkStories);

//Port on which the server will run

//SERVER

if(process.env.NODE_ENV === 'production'){
    //SET STATIC FOLDER
    app.use(express.static('client/build'));

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname , 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;        //When the server will run on anyother port the api will listen to the request from that port otherwise on 5000 port no.

app.listen(port, () => console.log(`Serve Started on port ${port}`));
