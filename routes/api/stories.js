const express = require('express');
const router = express.Router();
const { getStories, addStory, addLine, deleteLine, deleteStory } = require('../controller/storyControl');



const Stories = require('../../model/Stories');


//GET api/stories

// GET ALL STORIES

router.route('/').get(getStories);

//ADD A STORY

router.route('/').post(addStory);

//ADD A LINE

router.route('/:id').put(addLine);

//DELETE A LINE

router.route('/:id/:lineId').delete(deleteLine);

//STORY

router.route('/:id').delete(deleteStory);



module.exports = router;