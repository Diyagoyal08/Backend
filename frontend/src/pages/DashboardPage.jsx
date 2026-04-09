import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../api/blogApi'
import PostList from '../components/blog/PostList'
import Spinner from '../components/ui/Spinner'

function DashboardPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchPosts()
      .then((response) => setPosts(response.data || []))
      .catch(() => setError('Unable to load dashboard content.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="container">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p className="text-muted">Manage your articles, update content, and publish new posts.</p>
        </div>
        <Link className="primary-button" to="/new-post">
          New Post
        </Link>
      </div>
      {loading && <Spinner />}
      {error && <div className="alert">{error}</div>}
      {!loading && !error && <PostList posts={posts} />}
    </section>
  )
}

export default DashboardPage
