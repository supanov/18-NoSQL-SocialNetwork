const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const moment = require('moment');
// install moment 
const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true, 
            min_length: 1,
            max_length: 280,

        },

        createdAt: {
            type: Date,
            default: Date.now(),
            get: (timestamp) => moment(timestamp).format('MM/DD/YYYY'),
        },

        username : {
            type: String,
            required: true,
        },

        reactions : [reactionSchema]
    }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;