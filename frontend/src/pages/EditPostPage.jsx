import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPost, updatePost } from '../api/blogApi'
import PostForm from '../components/blog/PostForm'
import Spinner from '../components/ui/Spinner'

function EditPostPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPost(id)
      .then((response) => setPost(response.data))
      .catch(() => setError('Unable to load post for editing.'))
      .finally(() => setLoading(false))
  }, [id])

  const handleSubmit = (postData) => {
    setSubmitting(true)
    updatePost(id, postData)
      .then(() => {
        navigate(`/blog/${id}`)
      })
      .catch(() => setError('Unable to save changes.'))
      .finally(() => setSubmitting(false))
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <section className="container">
      <div className="page-header">
        <h1>Edit post</h1>
      </div>
      {error && <div className="alert">{error}</div>}
      {post && (
        <PostForm
          initialData={{
            title: post.title,
            summary: post.summary || post.excerpt,
            content: post.content || post.description,
          }}
          onSubmit={handleSubmit}
          submitLabel={submitting ? 'Saving...' : 'Save changes'}
        />
      )}
    </section>
  )
}

export default EditPostPage
