import { PenSquare, Edit3, Layout, Image, Barcode, Globe2, User, Megaphone } from 'lucide-react'

export default function Services() {
  const items = [
    { icon: PenSquare, title: 'Writing Assistance' },
    { icon: Edit3, title: 'Editing & Proofreading' },
    { icon: Layout, title: 'Formatting (Print + eBook)' },
    { icon: Image, title: 'Cover Designing' },
    { icon: Barcode, title: 'ISBN Allotment' },
    { icon: Globe2, title: 'Global Distribution' },
    { icon: User, title: 'Author Page Creation' },
    { icon: Megaphone, title: 'Marketing Strategy' },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 text-center">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 text-center mt-3">हर step aapko live track milega — koi hidden charge nahi.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-sm">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">Professional support from concept to worldwide store listing.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
