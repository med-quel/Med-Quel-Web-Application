import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'

const screenshots = [
  {
    title: 'Home Dashboard',
    description: 'Quick access to all features and your daily stats'
  },
  {
    title: 'Quiz Interface',
    description: 'Interactive and engaging quiz experience'
  },
  {
    title: 'Contest Page',
    description: 'Join live contests and compete globally'
  },
  {
    title: 'Leaderboard',
    description: 'Track your ranking and climb to the top'
  },
  {
    title: 'Analytics',
    description: 'Detailed insights into your performance'
  },
  {
    title: 'Profile & Badges',
    description: 'Showcase your achievements and progress'
  }
]

const Screenshots = () => {
  return (
    <section id="screenshots" className="section-padding bg-dark-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Beautiful & <span className="gradient-text">Intuitive Design</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Modern interface designed for the best learning experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:scale-105"
            >
              {/* Mock Screenshot */}
              <div className="bg-gradient-to-br from-primary/20 to-success/20 rounded-xl aspect-[9/16] flex items-center justify-center mb-4 border border-primary/30 overflow-hidden relative">
                <Smartphone className="w-16 h-16 text-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white/20 rotate-[-25deg] select-none pointer-events-none">
                    Revealed Soon
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{screen.title}</h3>
              <p className="text-sm text-gray-400">{screen.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Experience it yourself</p>
          <a href="#download" className="btn-primary inline-flex items-center gap-2">
            Download the App
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Screenshots
