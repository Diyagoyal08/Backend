import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../api/blogApi'
import PostList from '../components/blog/PostList'
import Spinner from '../components/ui/Spinner'

function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPosts()
      .then((response) => setPosts(response.data || []))
      .catch(() => setError('Unable to load posts.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="container">
      <div className="page-header">
        <div>
          <h1>Latest blog posts</h1>
          <p className="text-muted">Browse the latest published content from the connected Tech Blog API.</p>
        </div>
        <Link className="secondary-button" to="/login">
          Sign in to publish
        </Link>
      </div>

      {loading && <Spinner />}
      {error && <div className="alert">{error}</div>}
      {!loading && !error && <PostList posts={posts} />}
    </section>
  )
}

export default BlogPage
