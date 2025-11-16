import { Link, useLocation } from 'react-router-dom'
import { BookOpen, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const linkClasses = (path) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    location.pathname === path ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
  }`

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
              <BookOpen size={20} />
            </div>
            <span className="text-lg font-semibold tracking-tight">Your Brand Name</span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/store" className={linkClasses('/store')}>Store</Link>
            <a href="/test" className={linkClasses('/test')}>Status</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/store" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>Store</Link>
            <a href="/test" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>Status</a>
          </div>
        )}
      </nav>
    </header>
  )
}
