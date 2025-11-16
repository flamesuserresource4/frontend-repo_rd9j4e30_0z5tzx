import Navbar from '../components/Navbar'
import Store from '../components/Store'

export default function StorePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Store />
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Brand Name — All rights reserved.
      </footer>
    </div>
  )
}
