var express = require('express');
const upload = require('../utils/multer');
const BookModel = require('../models/BookSchema'); 
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
 res.render('index')
});

// Register page
router.get('/register', (req, res, next) => {
  res.render('Register');
});

// POST route to save book
router.post('/register', upload.fields([
  { name: 'coverImage', maxCount: 1 },
  { name: 'bookFile', maxCount: 1 }
]), async (req, res) => {
  try {
    const { title, author, genre, description, year, email } = req.body;

    const book = await BookModel.create({
      title,
      author,
      genre,
      description,
      year,
      email,
      coverImage: req.files.coverImage ? '/uploads/images/' + req.files.coverImage[0].filename : '',
      bookFile: req.files.bookFile ? '/uploads/pdfs/' + req.files.bookFile[0].filename : ''
    });

    // console.log('✅ Book saved:', book);
    res.redirect('/ShowBooks');
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).send("❌ Error saving book");
  }
});

router.get('/ShowBooks', async (req, res, next) => {
  try {
    const books = await BookModel.find();
    res.render('Show Books',{books})
  }  catch (err) {
    console.log(err);
    res.status(500).send('❌ Error loading home page');
  }
});

router.get('/contact', (req,res,next)=>{
try {
  res.render('contact');
} catch (error) {
 console.log(error);
  res.send(error)
}
})

module.exports = router;
