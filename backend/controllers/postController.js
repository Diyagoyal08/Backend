const Post = require('../models/Post')

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 })
    res.json(posts)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ error: 'Post not found!' })
    }
    res.json(post)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const createPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      summary: req.body.summary || '',
      content: req.body.content,
      author: req.user.id,
    })
    await post.save()
    res.status(201).json(post)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ error: 'Post not found!' })
    }
    if (String(post.author) !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized to edit this post.' })
    }

    post.title = req.body.title ?? post.title
    post.summary = req.body.summary ?? post.summary
    post.content = req.body.content ?? post.content
    await post.save()

    res.json(post)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).json({ error: 'Post not found!' })
    }
    if (String(post.author) !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized to delete this post.' })
    }
    await post.remove()
    res.json({ message: 'Post deleted!' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
}
