import { useCallback } from 'react'
import Navbar from '../components/Navbar'
import Store from '../components/Store'
import AddBookForm from '../components/AddBookForm'

export default function StorePage() {
  const refresh = useCallback(() => {
    // simple page reload to refresh list after adding
    window.location.reload()
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AddBookForm onCreated={refresh} />
      </div>
      <Store />
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Brand Name — All rights reserved.
      </footer>
    </div>
  )
}
