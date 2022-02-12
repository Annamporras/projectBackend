const { Schema, model } = require("mongoose");


const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 2,
    maxlength: 20,
    trim: true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  description: {
    type: String,
    minlength: 0,
    maxlength: 150,
    trim: true,
  },

  role: {
    type: String,
    enum: ['ADMIN', 'PARTNER', 'USER'],
    default: 'USER',
    required: true,
  },

  category: [{
    type: String,
    default: 'UNKOWN',
    enum: ['THEATRE', 'MUSEM', 'ART GALLERY', 'CONCERT HALL', 'BOOKSTORE', 'MULTIDISCIPLINARY SPACE', 'OTHERS']
  }],
  websiteUrl: {
    type: String,
  },

  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comments',
  }]
}, {
  timestamps: true
}
);



const User = model("User", userSchema);

module.exports = User;
