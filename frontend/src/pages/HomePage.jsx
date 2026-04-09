import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="container">
      <div className="page-header">
        <div>
          <h1>Tech Blog API Frontend</h1>
          <p className="text-muted">A full-stack blog interface for creating, reading, updating, and deleting posts.</p>
        </div>
        <Link className="primary-button" to="/blog">
          Explore the blog
        </Link>
      </div>

      <div className="grid-2">
        <div className="card">
          <h2>Built for CRUD workflows</h2>
          <p>View posts, create new articles, edit entries, and remove content from a centralized dashboard.</p>
        </div>
        <div className="card">
          <h2>Secure scoped routes</h2>
          <p>Protected admin paths keep post creation and editing behind login state.</p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
