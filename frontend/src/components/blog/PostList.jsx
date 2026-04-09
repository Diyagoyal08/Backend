import PostCard from './PostCard'

function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p className="text-muted">No posts are available yet. Create the first article.</p>
  }

  return (
    <div className="grid-2" style={{ marginTop: '1.5rem' }}>
      {posts.map((post) => (
        <PostCard key={post._id ?? post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
