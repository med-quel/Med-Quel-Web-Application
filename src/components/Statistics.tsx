import { motion } from 'framer-motion'
import { Users, BookCheck, Trophy, Star, BookOpen, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const stats = [
  { icon: Users, value: 50000, suffix: '+', label: 'Active Users', color: 'text-primary' },
  { icon: BookCheck, value: 500000, suffix: '+', label: 'Quiz Attempts Monthly', color: 'text-success' },
  { icon: Trophy, value: 50, suffix: '+', label: 'Daily Contests', color: 'text-accent' },
  { icon: Star, value: 95, suffix: '%', label: 'User Satisfaction', color: 'text-accent' },
  { icon: BookOpen, value: 40, suffix: '+', label: 'Subjects Covered', color: 'text-primary' },
  { icon: MessageCircle, value: 10000, suffix: '+', label: 'Questions Bank', color: 'text-success' }
]

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    exam: 'Medical Student',
    rating: 5,
    image: '👩‍⚕️',
    quote: 'Med Quel made learning so much fun! The quiz battles with friends turned boring study time into exciting gaming sessions. Absolutely loving it!'
  },
  {
    name: 'Rahul Verma',
    location: 'Mumbai',
    exam: 'MBBS Student',
    rating: 5,
    image: '👨‍⚕️',
    quote: 'Who knew medical quizzes could be this addictive? The leaderboards and daily challenges keep me hooked. Learning has never been this entertaining!'
  },
  {
    name: 'Ananya Patel',
    location: 'Bangalore',
    exam: 'Medical Aspirant',
    rating: 5,
    image: '👩‍🎓',
    quote: 'This app turned my study routine into a fun game! Competing with friends globally and earning badges makes every quiz session exciting. Highly recommend!'
  }
]

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end, hasStarted])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
    >
      {count.toLocaleString()}
      {suffix}
    </motion.span>
  )
}

const Statistics = () => {
  return (
    <section className="section-padding bg-dark-light/50">
      <div className="container-custom">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-gray-300">Join the fastest-growing medical quiz community</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center hover:scale-110"
            >
              <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-bold mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Players Say</span>
          </h2>
          <p className="text-lg text-gray-300">Real stories from quiz enthusiasts</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.image}</div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                  <p className="text-xs text-success font-semibold">{testimonial.exam}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
