const mongoose = require('mongoose');
const StoriesSchema = mongoose.Schema;             //Using Schema

//Create Schema
const Story = new StoriesSchema({
    
    userName: {
    type : String,
    default: "Anonymous"
    },
    title:{
        type: String,
        required: [true, 'No Title']
    },
    lines: [
        {
            authName: String,
            text: String,
            date:{
                type: Date,
                default: Date.now,
            }
        }
    ],
    date : {
        type: Date,
        default: Date.now
    }
});


module.exports = Stories = mongoose.model("story" , Story);
//Here We Export Lines(name of our new Schema/table) with a Model of Story(Can give any name its a constant holding the value in our table)