export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Contact Us</h2>
            <p className="text-gray-700 mt-3">Hum authors ki help karte hain unki book ko professionally publish karne me — chahe wo novel, biography, poetry, self-help, education, ya business book ho.</p>

            <div className="mt-6 space-y-3 text-gray-800">
              <p><span className="font-semibold">Email:</span> yourmail@example.com</p>
              <p><span className="font-semibold">Phone:</span> +91 XXXXX XXXXX</p>
              <p><span className="font-semibold">Location:</span> India</p>
            </div>

            <a href="#submit" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition-colors mt-6">Submit Manuscript</a>
          </div>

          <form className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Quick Enquiry</h3>
            <p className="text-sm text-gray-600 mt-1">We will get back within 24 hours.</p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <input type="text" placeholder="Your Name" className="w-full rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" className="w-full rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Phone" className="w-full rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea rows="4" placeholder="Tell us about your book" className="w-full rounded-md border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <button type="button" className="mt-4 w-full rounded-md bg-gray-900 text-white font-semibold py-2 hover:bg-gray-800 transition-colors">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}
