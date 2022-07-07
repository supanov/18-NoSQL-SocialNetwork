const { Schema, Types } = require ('mongoose');

const moment = require('moment'); 

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            max_length: 280,

        },

        useername: {
            type: String,
            required: true,
        },

        createdAt : {
            type: Date,
            default: Date.now(),
            get: (timestamp) => moment(timestamp).format('MM/DD/YYYY'),

        }
       

    }
);


module.exports = reactionSchema;
