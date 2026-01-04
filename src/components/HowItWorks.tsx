import { motion } from 'framer-motion'
import { Download, UserPlus, ClipboardCheck, BookOpen, Trophy, TrendingUp, Target } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Download,
    title: 'Download & Sign Up',
    description: 'Get started in just 2 minutes with a quick and easy registration process'
  },
  {
    number: 2,
    icon: UserPlus,
    title: 'Complete Profile Setup',
    description: 'Tell us about your learning goals and preferred study schedule'
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: 'Take Diagnostic Test',
    description: 'We personalize your learning experience based on your current knowledge level'
  },
  {
    number: 4,
    icon: BookOpen,
    title: 'Start Learning',
    description: 'Access subjects, video tutorials, quizzes, and comprehensive study materials'
  },
  {
    number: 5,
    icon: Trophy,
    title: 'Join Contests',
    description: 'Compete with thousands of aspirants in daily contests and challenges'
  },
  {
    number: 6,
    icon: TrendingUp,
    title: 'Track Progress',
    description: 'Monitor your improvement daily with detailed analytics and insights'
  },
  {
    number: 7,
    icon: Target,
    title: 'Achieve Goals',
    description: 'Master medical concepts through engaging, gamified learning experiences'
  }
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your journey to mastering medical knowledge in 7 simple steps
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-success to-accent"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number Circle */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl shadow-primary/30 relative z-10">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-dark font-bold text-lg shadow-lg z-20">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#download" className="btn-primary inline-flex items-center gap-2">
            Get Started Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
