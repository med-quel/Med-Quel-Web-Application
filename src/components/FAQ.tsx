import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What is Med Quel?',
    answer: 'Med Quel is a gamified medical learning quiz platform designed specifically for medical aspirants. It transforms medical education into exciting quiz battles, competitive contests, social networking, and advanced analytics to make learning medical concepts fun, engaging, and effective through play.'
  },
  {
    question: 'Is Med Quel free to use?',
    answer: 'Yes! Med Quel offers a robust free plan that includes access to basic quizzes, community chat, weekly contests, and basic analytics. We also offer a Premium plan with unlimited quiz attempts, advanced analytics, exclusive contests, and an ad-free experience.'
  },
  {
    question: 'Which exams does Med Quel cover?',
    answer: 'Med Quel covers all major medical entrance exams including NEET, MBBS, AIIMS, JIPMER, and various state medical entrance examinations. Our content is aligned with the complete MBBS curriculum covering 50+ subjects.'
  },
  {
    question: 'How does the contest system work?',
    answer: 'We offer three types of contests: Multiple Criterion Contests (mixed subjects), Subject-Wise Contests (focused on specific topics), and Random Challenge Contests (quick 15-minute daily challenges). Join contests, compete with thousands of aspirants, earn coins, and win prizes!'
  },
  {
    question: 'Can I track my progress?',
    answer: 'Absolutely! Med Quel provides detailed analytics including quiz attempt history, score trends over time, subject-wise performance breakdown, accuracy rates, time management analysis, and personalized improvement suggestions with interactive charts and graphs.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take data security very seriously. All user data is encrypted and stored securely. We comply with industry-standard security practices and privacy regulations. Your personal information is never shared with third parties without your consent.'
  },
  {
    question: 'How do I join the community?',
    answer: 'Once you sign up and create your profile, you automatically get access to our social learning network. You can join subject-specific discussion rooms, create or join study groups (up to 50 members), direct message fellow aspirants, and participate in community Q&A.'
  },
  {
    question: 'What subjects are covered?',
    answer: 'We cover the complete MBBS curriculum including Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Microbiology, Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, Community Medicine, Forensic Medicine, and 15+ more specializations.'
  },
  {
    question: 'Can I use it offline?',
    answer: 'Some features can be accessed offline. However, contests, leaderboards, analytics, and community features require an internet connection for real-time updates and synchronization.'
  },
  {
    question: 'How do I download the app?',
    answer: 'Med Quel is available on Google Play Store for Android devices. Simply search for "Med Quel" in the Play Store or click the download button on this page. iOS version is coming soon!'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-dark-light/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Med Quel
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold flex-1">{faq.question}</h3>
                <button className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </button>
              </div>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
              </motion.div>
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
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@medquel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light font-semibold">
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
