import { useEffect, useMemo, useState } from 'react'

const fallbackCategories = ['Fiction','Non-Fiction','Self-Help','Education','Poetry','Biography','Business']

const sampleBooks = [
  { id: 1, title: 'Winds of Change', author: 'A. Sharma', category: 'Fiction', price: 299, types: ['eBook','Paperback'], cover: 'https://images.unsplash.com/photo-1529651737248-dad5e287768e?q=80&w=900&auto=format&fit=crop' },
  { id: 2, title: 'Startup Playbook', author: 'R. Verma', category: 'Business', price: 399, types: ['eBook','Paperback'], cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=900&auto=format&fit=crop' },
  { id: 3, title: 'Mindset Mastery', author: 'K. Gupta', category: 'Self-Help', price: 249, types: ['eBook'], cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=900&auto=format&fit=crop' },
  { id: 4, title: 'Poems of Dawn', author: 'S. Iqbal', category: 'Poetry', price: 199, types: ['Paperback'], cover: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=900&auto=format&fit=crop' },
]

export default function Store() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${backend}/books`)
        if (!res.ok) throw new Error('Failed to load books')
        const data = await res.json()
        if (!cancelled) setBooks(data)
      } catch (e) {
        console.warn('Falling back to sample books:', e.message)
        if (!cancelled) setBooks(sampleBooks)
        setError('Live data not available, showing samples')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchBooks()
    return () => { cancelled = true }
  }, [backend])

  const categories = useMemo(() => {
    const cats = new Set(books.map(b => b.category))
    return (cats.size ? Array.from(cats) : fallbackCategories)
  }, [books])

  const booksByCategory = useMemo(() => {
    return categories.map((cat) => ({
      name: cat,
      items: books.filter((b) => b.category === cat)
    }))
  }, [categories, books])

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center">
          Explore Books Published by Us
        </h1>
        <p className="text-gray-600 text-center mt-3">Yahaan aapko saare authors ki published books milengi. Click karke aap Read Preview, Buy eBook, ya Order Print Copy kar sakte ho.</p>

        {error && (
          <p className="mt-4 text-center text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-3 py-2 inline-block">{error}</p>
        )}

        {loading ? (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-64 bg-gray-100 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            {booksByCategory.map(({ name, items }) => (
              <div key={name} className="mt-10 first:mt-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
                  <a href="#" className="text-blue-600 text-sm hover:underline">View all</a>
                </div>
                {items.length === 0 ? (
                  <p className="text-gray-500 text-sm mt-3">No books in this category yet.</p>
                ) : (
                  <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((b) => (
                      <div key={b.id || b._id} className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-[3/4] w-full bg-gray-100">
                          <img src={b.cover} alt={b.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900">{b.title}</h3>
                          <p className="text-sm text-gray-600">by {b.author}</p>
                          <p className="mt-2 text-gray-900 font-medium">₹{b.price}</p>
                          <div className="mt-3 flex items-center gap-2">
                            {(b.types || b.type || []).map((t) => (
                              <span key={t} className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2.5 py-0.5 text-xs font-medium">{t}</span>
                            ))}
                          </div>
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            <button className="rounded-md bg-blue-600 text-white text-sm font-semibold py-2 hover:bg-blue-700">Read Preview</button>
                            <button className="rounded-md bg-gray-900 text-white text-sm font-semibold py-2 hover:bg-gray-800">Buy</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
