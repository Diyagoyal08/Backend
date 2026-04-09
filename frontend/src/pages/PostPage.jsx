import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchPost, deletePost } from '../api/blogApi'
import Spinner from '../components/ui/Spinner'

function PostPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPost(id)
      .then((response) => setPost(response.data))
      .catch(() => setError('Post not found.'))
      .finally(() => setLoading(false))
  }, [id])

  const handleDelete = () => {
    if (!window.confirm('Delete this post?')) {
      return
    }
    deletePost(id).then(() => {
      window.location.href = '/blog'
    })
  }

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div className="alert">{error}</div>
  }

  return (
    <section className="container">
      <div className="page-header">
        <div>
          <h1>{post.title}</h1>
          <p className="text-muted">{post.summary || post.excerpt}</p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link className="button-link" to="/blog">
            Back to posts
          </Link>
          <Link className="secondary-button" to={`/edit/${id}`}>
            Edit post
          </Link>
          <button type="button" className="button-link" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="card">
        <p>{post.content || 'No body content is available for this post.'}</p>
      </div>
    </section>
  )
}

export default PostPage
