import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/formatDate'

function PostCard({ post }) {
  return (
    <article className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <h3>{post.title}</h3>
          <p className="text-muted">{formatDate(post.createdAt || post.date)}</p>
        </div>
        <Link className="button-link" to={`/blog/${post._id ?? post.id}`}>
          Read post
        </Link>
      </div>
      <p style={{ marginTop: '1rem', color: '#475569' }}>
        {post.summary || post.excerpt || post.description || 'A short summary of the post will appear here.'}
      </p>
    </article>
  )
}

export default PostCard
