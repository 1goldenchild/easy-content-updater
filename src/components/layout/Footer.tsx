import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A24] py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Numerology 33</h3>
          <p className="text-gray-400 mb-4">
            Discover your life's path through the ancient wisdom of numbers.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.tiktok.com/@numerology_33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@numerology-33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zm-14 9.4V8.4l6.3 3.6-6.3 3.6z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Legal & Support Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Legal & Support</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="text-blue-500 hover:text-blue-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-blue-500 hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund" className="text-blue-500 hover:text-blue-400">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/support" className="text-blue-500 hover:text-blue-400">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to receive numerology insights and updates.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-[#2A2A35] text-white rounded border border-gray-700 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <p className="text-gray-400 text-sm">
          © 2025 Numerology 33. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer