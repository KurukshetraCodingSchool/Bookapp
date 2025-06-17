// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    enum: [
      'Fiction',
      'Non-Fiction',
      'Romance',
      'Horror',
      'Thriller',
      'Biography',
      'Science Fiction',
      'Fantasy',
      'History',
      'Motivational',
      'Self-Help'
    ]
  },
  description: {
    type: String,
    required: true
  },
  coverImage: {
    type: String, // Path or URL
    default:''
  },
  bookFile: {
    type: String, // Path or URL
    default: ''
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: 2099
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Bookmodel = mongoose.model('Book', bookSchema);
module.exports = Bookmodel
