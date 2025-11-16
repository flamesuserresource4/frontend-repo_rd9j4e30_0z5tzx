import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Taglines />
        <Contact />
      </main>
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Your Brand Name — All rights reserved.
      </footer>
    </div>
  )
}

function Taglines() {
  const tags = [
    'Your Story, Our Publishing Expertise',
    'Become a Published Author Today',
    'Publish Globally. Earn Royalties for Life.',
    'From Manuscript to Market – We Handle Everything',
    'One Platform. Complete Publishing.'
  ]
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-3">
          {tags.map((t) => (
            <div key={t} className="rounded-xl border border-gray-100 bg-white p-4 text-center font-medium hover:shadow-sm transition-shadow">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
