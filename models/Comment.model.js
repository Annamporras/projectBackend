const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
    {
        date: {
            type: Date,
        },

        text: {
            type: String,
            minlength: 1,
            maxlength: 150,
            trim: true
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user' //user & partner roles
        }

    },
    {
        timestamps: true
    }
);

const Comment = model("Comment", commentSchema)

module.exports = Comment