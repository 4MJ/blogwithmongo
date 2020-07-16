const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/Post');

//connecting mongoose
mongoose.connect('mongodb://localhost:27017/node-blog', { 
  useNewUrlParser: true 
})
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err));

//getting home page
router.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.render('index', {
      posts
  })
});

router.get('/posts/new', (req, res) => {
    res.render('create')
});

//To post a new Post
router.post('/posts/store', (req, res) => {
  Post.create(req.body, (error, post) => {
      res.redirect('/')
  })
})

//to get all post

// //displaying a single post
app.get('/post/:id', async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('post', {
      post
  })
});

//route for update data
   
//route for delete data
  
module.exports = router;