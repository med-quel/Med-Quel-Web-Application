import { motion } from 'framer-motion'
import { Trophy, MessageCircle, BarChart3, Medal, User, Bell } from 'lucide-react'

const features = [
  // {
  //   icon: BookOpen,
  //   title: 'Comprehensive Learning Platform',
  //   description: 'Complete MBBS curriculum coverage with high-quality video lectures, interactive 3D anatomical models, downloadable PDF notes, and AI-powered content recommendations.',
  //   highlights: [
  //     'Expert video lectures',
  //     'Interactive 3D models',
  //     'Smart revision reminders',
  //     'Adaptive difficulty filtering'
  //   ]
  // },
  {
    icon: Trophy,
    title: 'Gamified Contest System',
    description: 'Multiple contest types including Mixed subjects, Subject-wise deep-dives, and Random 15-minute challenges with live tracking and attractive prize pools.',
    highlights: [
      'Multiple contest types',
      'Real-time rankings',
      'Post-contest analytics',
      'Ranking system'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Social Learning Network',
    description: 'Subject-specific discussion rooms, direct messaging, study groups up to 50 members, and community Q&A with voting system.',
    highlights: [
      'Discussion rooms by subject',
      'Study group creation',
      'Share notes & diagrams',
      'Follow top performers'
    ]
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics Dashboard',
    description: 'Detailed quiz history, score trends, subject-wise breakdown, accuracy rates, time management analysis, and personalized improvement suggestions.',
    highlights: [
      'Score trends over time',
      'Strengths & weaknesses',
      'Interactive charts',
      'Peer comparison'
    ]
  },
  {
    icon: Medal,
    title: 'Global Leaderboard System',
    description: 'Global and country based rankings with weekly, monthly, and all-time standings. Track your position and climb to the top!',
    highlights: [
      'Multiple ranking types',
      'Top 3 podium display',
      'Rank change indicators',
      'Profile badges for top performers'
    ]
  },
  {
    icon: User,
    title: 'Rich Profile & Achievements',
    description: 'Customizable profile with photo, 50+ unique badges to collect, milestone achievements, study statistics dashboard, and shareable achievement cards.',
    highlights: [
      '50+ unique badges',
      'Study streak tracking',
      'Achievement cards',
      'Global rank display'
    ]
  },
  {
    icon: Bell,
    title: 'Smart Notification System',
    description: 'Customizable daily study reminders, contest announcements, leaderboard updates, achievement alerts, and personalized study tips.',
    highlights: [
      'Daily study reminders',
      'Contest announcements',
      'Achievement alerts',
      'Study streak warnings'
    ]
  }
]

const Features = () => {
  return (
    <section id="features" className="section-padding bg-dark-light/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for{' '}
            <span className="gradient-text">Quiz Mastery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to master medical concepts through gamified quizzes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:scale-105"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pl-[4.5rem]">
                {feature.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                    <span className="text-sm text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
