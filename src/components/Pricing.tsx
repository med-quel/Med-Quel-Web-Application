import { motion } from 'framer-motion'
import { Check, Zap, Crown } from 'lucide-react'

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start your{' '}
            <span className="gradient-text">fun journey of medical excellence</span>{' '}
            today
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Download for free and start quizzing in minutes!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Free Plan</h3>
                <p className="text-gray-400">Get started today</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                'Access to basic quizzes',
                'Community chat & discussions',
                'Weekly contests',
                'Basic analytics dashboard',
                'Profile & achievements',
                'Leaderboard access'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center">
              Download Free
            </a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card border-2 border-accent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-accent text-dark px-4 py-1 text-sm font-bold">
              POPULAR
            </div>

            <div className="flex items-center gap-3 mb-6 mt-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <Crown className="w-6 h-6 text-dark" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Premium</h3>
                <p className="text-gray-400">Unlock full potential</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                'Everything in Free plan',
                'Unlimited quiz attempts',
                'Advanced analytics & insights',
                'Exclusive premium contests',
                'Priority support',
                'Ad-free experience',
                'Early access to new features',
                'Personalized study plans'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">
              Get Premium
            </a>
          </motion.div>
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="card max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Make Learning Fun?</h3>
            <p className="text-gray-300 mb-8">Download Med-Quel now and join 50,000+ quiz enthusiasts!</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg transition-all"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>

              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-32 bg-white rounded-lg p-2">
                  <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                    QR Code
                  </div>
                </div>
                <p className="text-sm text-gray-400">Scan to download</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Free to download</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Start learning in 2 minutes</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
