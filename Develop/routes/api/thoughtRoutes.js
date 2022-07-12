const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteSingleThought,
    updateSingleThought,
    createReaction,
    deleteReaction,
    
} = require('../../controllers/thoughtController')

// api/thoughts
router.route('/').get(getThoughts).post(createThought);

// api// thoughts/: thoughtID
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteSingleThought)
  .put(updateSingleThought);

// api/thoughts/:thoughtId/reaction

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// api/thought/ :thoughtId/reaction/: reactionId

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;


