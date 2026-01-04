import { motion } from 'framer-motion'
import { Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, Send } from 'lucide-react'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="bg-dark-light border-t border-dark-lighter">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Med-Quel</h3>
              <p className="text-gray-400 mb-4">
                Revolutionizing Medical Education Through Gamified Learning
              </p>
              <p className="text-sm text-gray-500">
                Empowering medical aspirants since 2025
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#screenshots" className="text-gray-400 hover:text-primary transition-colors">
                    Screenshots
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#help" className="text-gray-400 hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@medquel.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    support@medquel.com
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card max-w-2xl mx-auto mb-12"
          >
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold mb-2">Stay Updated</h4>
              <p className="text-gray-400">Get study tips, contest alerts, and updates directly to your inbox</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-lighter border border-dark-lighter rounded-lg focus:outline-none focus:border-primary text-white"
                required
              />
              <button type="submit" className="btn-primary flex items-center gap-2 px-6">
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </motion.div>

          {/* Social Media & Download */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-dark-lighter">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 mr-2">Follow Us:</span>
              {[
                { icon: Instagram, link: 'https://instagram.com/medquel' },
                { icon: Facebook, link: 'https://facebook.com/medquel' },
                { icon: Twitter, link: 'https://twitter.com/medquel' },
                { icon: Linkedin, link: 'https://linkedin.com/medquel' },
                { icon: Youtube, link: 'https://youtube.com/medquel' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-lighter hover:bg-primary flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Download Button */}
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0zm7.5 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-lighter">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; 2026 Med-Quel. All rights reserved.</p>
            <p>Made with ❤️ for medical aspirants worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
