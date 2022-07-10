const { Schema, model } = require('mongoose')

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: true,

        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],

        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],

    }
);

// virtual property retreives friend list 
UserSchema.virtual('friendcount').get(function (){
    return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;


