import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../api/blogApi'
import PostForm from '../components/blog/PostForm'

function CreatePostPage() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (postData) => {
    setLoading(true)
    createPost(postData)
      .then((response) => {
        navigate(`/blog/${response.data._id ?? response.data.id}`)
      })
      .catch(() => setError('Unable to create post.'))
      .finally(() => setLoading(false))
  }

  return (
    <section className="container">
      <div className="page-header">
        <div>
          <h1>Create new post</h1>
          <p className="text-muted">Write a new technical article and save it to the blog API.</p>
        </div>
      </div>
      {error && <div className="alert">{error}</div>}
      <PostForm submitLabel={loading ? 'Saving...' : 'Publish post'} onSubmit={handleSubmit} />
    </section>
  )
}

export default CreatePostPage
