import { motion } from 'framer-motion'
import { BookOpen, Frown, Clock, Users, Target, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: BookOpen,
    title: 'Boring Study Sessions',
    description: 'Traditional learning feels monotonous and drains motivation'
  },
  {
    icon: Frown,
    title: 'No Excitement',
    description: 'Medical concepts seem dry without engaging, interactive experiences'
  },
  {
    icon: Target,
    title: 'Missing the Challenge',
    description: 'No competitive element to make learning thrilling and rewarding'
  },
  {
    icon: Users,
    title: 'Learning Alone',
    description: 'No community to share the journey and celebrate achievements'
  },
  {
    icon: Clock,
    title: 'Short Attention Spans',
    description: 'Hard to stay focused without bite-sized, gamified content'
  },
  {
    icon: TrendingDown,
    title: 'Zero Motivation',
    description: 'Lack of rewards and recognition for your learning efforts'
  }
]

const ProblemStatement = () => {
  return (
    <section className="section-padding bg-dark-light/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Solving medical science questions</span>{' '}
            could be fun too!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learning doesn't have to be boring - let's make it exciting!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-gray-400 text-sm">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement
