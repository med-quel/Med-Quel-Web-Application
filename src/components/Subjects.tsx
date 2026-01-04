import { motion } from 'framer-motion'
import { Brain, Heart, Dna, Bug, Pill, Microscope, Stethoscope, Building2, Baby, User } from 'lucide-react'

const subjects = [
  { icon: Brain, name: 'Anatomy', color: 'from-blue-500 to-blue-600' },
  { icon: Heart, name: 'Physiology', color: 'from-red-500 to-red-600' },
  { icon: Dna, name: 'Biochemistry', color: 'from-purple-500 to-purple-600' },
  { icon: Bug, name: 'Pathology', color: 'from-orange-500 to-orange-600' },
  { icon: Pill, name: 'Pharmacology', color: 'from-green-500 to-green-600' },
  { icon: Microscope, name: 'Microbiology', color: 'from-teal-500 to-teal-600' },
  { icon: Stethoscope, name: 'Medicine', color: 'from-indigo-500 to-indigo-600' },
  { icon: Building2, name: 'Surgery', color: 'from-cyan-500 to-cyan-600' },
  { icon: Baby, name: 'Pediatrics', color: 'from-pink-500 to-pink-600' },
  { icon: User, name: 'Obstetrics & Gynecology', color: 'from-rose-500 to-rose-600' }
]

const moreSubjects = [
  'Community Medicine',
  'Forensic Medicine',
  'Radiology',
  'Ophthalmology',
  'ENT',
  'Orthopedics',
  'Dermatology',
  'Psychiatry',
  'Anesthesiology',
  'Emergency Medicine'
]

const Subjects = () => {
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
            Comprehensive <span className="gradient-text">Subject Coverage</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master all subjects with our expertly curated content covering the complete MBBS curriculum
          </p>
        </motion.div>

        {/* Main Subjects Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card text-center group hover:scale-110 cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}>
                <subject.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-base">{subject.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Additional Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Plus 10+ More Specializations</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {moreSubjects.map((subject, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-lighter rounded-full text-sm text-gray-300 hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {subject}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 border border-success/30 rounded-full text-success">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
            <span className="font-semibold">Complete MBBS Curriculum Covered</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Subjects
