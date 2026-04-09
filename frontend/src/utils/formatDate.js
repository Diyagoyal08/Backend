export function formatDate(value) {
  if (!value) {
    return 'Unknown date'
  }

  const date = new Date(value)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
