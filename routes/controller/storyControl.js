const Stories = require('../../model/Stories');


//GET ALL STORIES

exports.getStories  = async (req, res , next) => {
    try {
        const recStories = await Stories.find();
        return res.status(200).json({
            success: true,
            count: recStories.length,
            data: recStories
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'SRVER ERROR',
            msg: err
         });   
    }
}

//ADD STORY TO THE DATABASE


exports.addStory = async (req, res ,next) => {
    try {
        const { title, userName, lines } =  req.body;
        const newStory = await Stories.create(req.body);
        return res.status(201).json({
            success: true,
            data: [newStory]
        });
    } catch (err) {
        if(err.name === 'ValidationError'){
            const msg = Object.values(err.errors).map( val => val.message );
            return res.status(400).json({
                success: false,
                error: msg
            })
        }
        else{
            return res.status(500).json({
                success: false,
                error: 'SRVER ERROR',
             });
        }
    }
}


//ADD A NEW LINE


exports.addLine = async(req, res , next) =>{
    try {
        //Reciberd line must have "authName" and "text"

        const recLine = req.body.lines;                 //Finding params //push in an array //what to push and where // reurn the new insered table
        const newLine = await Stories.findByIdAndUpdate(req.params.id , {$push : {lines : recLine}}, { new: true });
        return res.status(201).json({
            success: true,
            data: [newLine]
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'SRVER ERROR',
         });
    }
}


//DELETE LINE FROM THE STORY

exports.deleteLine = async(req, res , next) =>{
    
    try {
        const reqLine = await Stories.findOne({ "lines._id" : req.params.lineId });
        if(!reqLine){
            return res.status(404).json({
                success: false,
                error: "No Line Found"
            });
        }

        const output = await Stories.findByIdAndUpdate( req.params.id ,{ $pull: { lines : { _id: req.params.lineId } } },
        {safe: true , upsert:true, new:true } );

        return res.status(201).json({
            success: true,
            data: [output]
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'SERVER ERROR',
            data: req.params.lineId
         });
    
    }
}

// DELETE STORY

exports.deleteStory = async ( req,res, next) =>{

    try {

        const story = await Stories.findById(req.params.id);

        if(!story){
            return res.status(404).json({
                success: false,
                error: "No Story Found"
            });
        }

        await story.remove();
        return res.status(200).json({
            success: true,
            message: "Story was deleted"
        })
    } catch (err) {
         return res.status(500).json({
            success: false,
            error: 'SRVER ERROR',
         });
    }

}