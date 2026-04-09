import { useState } from 'react'

function PostForm({ initialData = {}, onSubmit, submitLabel }) {
  const [title, setTitle] = useState(initialData.title || '')
  const [summary, setSummary] = useState(initialData.summary || '')
  const [content, setContent] = useState(initialData.content || '')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ title, summary, content })
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="input-group">
        <label htmlFor="title">Post title</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          placeholder="Enter a compelling title"
        />
      </div>
      <div className="input-group">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Write a short summary for the post"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Write the blog content here"
          required
        />
      </div>
      <button type="submit" className="primary-button">
        {submitLabel}
      </button>
    </form>
  )
}

export default PostForm
