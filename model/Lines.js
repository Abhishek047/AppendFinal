const mongoose = require('mongoose');
const LinesSchema = mongoose.Schema;             //Using Schema

//Create Schema
const Line = new LinesSchema({
    
    storyId:{
        type: String,
        required: [true, 'No Story Id'], 
    },
    authName: {
        type : String,
        default: "Anonymous"
    },
    text:{
        type: String,
        required: [true, 'Please Enter What you ant to Add']
    },
    date : {
        type: Date,
        default: Date.now
    }
});


module.exports = Lines = mongoose.model("line" , Line);
//eHere We Export Lines(name of our new Schema/table) with a Model of Line(Can give any name its a constant holding the value in our table)