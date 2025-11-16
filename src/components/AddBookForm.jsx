import { useState } from 'react'

const initial = {
  title: '',
  author: '',
  category: '',
  price: '',
  types: 'eBook,Paperback',
  cover: '',
  description: ''
}

export default function AddBookForm({ onCreated }) {
  const [form, setForm] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const payload = {
        title: form.title.trim(),
        author: form.author.trim(),
        category: form.category.trim(),
        price: Number(form.price),
        types: form.types.split(',').map((s) => s.trim()).filter(Boolean),
        cover: form.cover.trim(),
        description: form.description.trim() || undefined
      }

      const res = await fetch(`${backend}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || 'Failed to add book')
      }

      setMessage({ type: 'success', text: 'Book added successfully!' })
      setForm(initial)
      onCreated && onCreated()
    } catch (err) {
      setMessage({ type: 'error', text: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-2xl border border-gray-200 p-4 md:p-6 bg-white">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Add a New Book</h3>
      </div>
      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input name="title" value={form.title} onChange={handleChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Author</label>
          <input name="author" value={form.author} onChange={handleChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input name="category" value={form.category} onChange={handleChange} required placeholder="Fiction, Business, Poetry..." className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
          <input name="price" type="number" min="0" step="1" value={form.price} onChange={handleChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Types (comma separated)</label>
          <input name="types" value={form.types} onChange={handleChange} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
          <input name="cover" value={form.cover} onChange={handleChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button disabled={loading} className="inline-flex items-center rounded-md bg-blue-600 text-white font-semibold px-4 py-2 hover:bg-blue-700 disabled:opacity-60">
            {loading ? 'Adding…' : 'Add Book'}
          </button>
          {message && (
            <span className={message.type === 'success' ? 'text-green-600 text-sm' : 'text-red-600 text-sm'}>
              {message.text}
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
