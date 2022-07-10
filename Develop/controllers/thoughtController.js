const { Thought, User, } = require('../models')

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((thoughtData) => res.json(thoughtData))
            .catch((err) => res.status(500).json(err));
    },

    // Get a thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-_v')
            .then((thoughtData) =>
                !thoughtData
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thoughtData)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Creating a thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thoughtData) => res.json(thoughtData))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // Deleting a thought

    deleteSingleThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thoughtData) =>
                !thoughtData
                    ? res.status(404).json({ message: 'No thought with that Id' })
                    : User.findOneAndUpdate(
                        { username: thought.username },
                        { $pull: { students: req.params.thoughtId } },

                    )
            )
            .then((thoughtData) =>
                !thought
                    ? res.status(404).json({
                        message: 'Thought deleted'
                    })
                    : res.json({ message: 'Thought successfully deleted' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });

    },

    // update thought

    updateSingleThought(req, res) {
        Thought.fineOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thoughtData) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this Id' })
                    : res, json(thoughtData)
            )
            .catch((err) => res.status(500).json(err));
    },

    // create a reaction 
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }

        )

            .then((thoughtData) => {
                thought.save();
                res.json(thoughtData);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: ObjectId(req.params.thoughtId) },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thought) {
                res.status(404).json({ message: "No thought with that ID" });
            }
            res.json(thought);
        } catch (e) {
            res.status(500).json(e);
        }
    },

}
