import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Hero() {
  const points = [
    'Complete Publishing Support',
    'Fast & Transparent Process',
    'High-Quality eBook & Print Production',
    'Author Branding Support',
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-purple-50 to-white" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Welcome to Your Brand Name – Your Complete Book Publishing Partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg leading-relaxed text-gray-700"
          >
            Agar aap apni kahani, knowledge, ya experience ko ek professionally published book me badalna chahte hain — to aap sahi jagah par hain. Hum aapki book ko concept se lekar worldwide online store tak publish karte hain.
          </motion.p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-gray-800">
                <span className="mt-1 h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
                  <Check size={14} />
                </span>
                <span className="text-base">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition-colors">Get Started</a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-white font-semibold hover:bg-gray-800 transition-colors">Explore Services</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 p-[2px] shadow-xl">
            <div className="h-full w-full rounded-2xl bg-white p-6 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Stat label="Books Published" value="500+" />
                <Stat label="Global Stores" value="50+" />
                <Stat label="Avg. Time to Publish" value="15-25 days" />
                <Stat label="Author Satisfaction" value="4.9/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-gray-100 p-4">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}
