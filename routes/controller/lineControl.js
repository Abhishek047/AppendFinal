//Eporting Our Model
//take Lines Model
//If we want to Enter Lines in a Model of Line Type we will need it
const Lines = require('../../model/Lines');

//GET_ALL_LINES
exports.getLines = async (req, res, next) => {
    try {
        const RecvLines = await Lines.find();           //Promise hai to await
        return res.status(200).json({
            success: true,
            count: RecvLines.length,
            data: RecvLines
    })
    } catch (err) {
     return res.status(500).json({
        success: false,
        error: 'SRVER ERROR',
        msg: err
     });   
    }
}




//ADD_LINES
exports.addLines = async (req, res, next) => {
    try {
        const { text, storyId, authName  } = req.body;

        const newLine = await Lines.create(req.body);
        return res.status(201).json({
            success: true,
            data: newLine
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


//DELETE LINE WITH ID
exports.deleteLines = async (req, res, next) => {
    try {
        const line = await Lines.findById(req.params.id);
        
        if(!line){
            return res.status(404).json({
                success: false,
                error: "No Line Found"
            });
        }
    
    await line.remove();
    return res.status(200).json({
        success: true,
        message: "Line was deleted"
    })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'SRVER ERROR',
         });
    }
}
