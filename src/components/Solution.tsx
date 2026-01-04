import { motion } from 'framer-motion'
import { Sparkles, Brain, Users, BarChart, Trophy } from 'lucide-react'

const differentiators = [
  {
    icon: Sparkles,
    title: 'Addictively Fun Quizzes',
    description: 'Bite-sized quiz challenges that keep you coming back for more'
  },
  {
    icon: Trophy,
    title: 'Compete & Win Rewards',
    description: 'Battle friends globally, climb leaderboards, and earn exciting prizes'
  },
  {
    icon: Users,
    title: 'Vibrant Quiz Community',
    description: 'Join thousands playing, learning, and celebrating together'
  },
  {
    icon: BarChart,
    title: 'Track Your Streak',
    description: 'Watch your progress grow with daily streaks and achievement badges'
  },
  {
    icon: Brain,
    title: 'Learn Through Play',
    description: 'Master medical concepts naturally while having a blast'
  }
]

const Solution = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet <span className="gradient-text">Med Quel</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">The ultimate Quizzing experience in medical science</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We've transformed medical learning into an exciting quiz game! Med Quel combines 
            gamification, competition, and social features to make learning medical concepts 
            addictively fun and surprisingly effective.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a href="#features" className="btn-primary inline-flex items-center gap-2">
            Explore Features
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution
