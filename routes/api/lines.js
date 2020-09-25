const express = require('express');
const router = express.Router();
const { getLines, addLines, deleteLines } = require('../controller/lineControl');


//GET api/lines

router.route('/').get(getLines);

//POST api/lines

router.route('/').post(addLines);

// DELETE api/lines/id                          //:{parameter}

router.route('/:id').delete(deleteLines);

// router.delete('/:id' , (req,res) => {
//     Lines.findById(req.params.id)                           //findById five a response if there is a response then is called otherwise Catch
//     .then(lineRe => lineRe.remove().then(() => res.json({ success : true})))    //here we take the id returned to us and remove it and the remove sends a response which we handle but sending Success; 
//     .catch(err => res.status(404).json({success : false}));    
// });


module.exports = router;