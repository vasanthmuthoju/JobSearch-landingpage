import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-50 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4">JobSearch</h4>
          <p className="text-sm text-gray-400">Empowering professionals to connect with top companies and unlock new opportunities.</p>
        </div>

        <div>
          <h5 className="text-md font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-md font-semibold mb-3">Support</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-md font-semibold mb-3">Stay Connected</h5>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-white border border-gray-400  focus:outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200 text-sm"
            />
            <button
              className="bg-blue-600 text-white hover:bg-blue-700 transition px-4 py-2 rounded text-sm font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-500">
        © 2025 JobSearch. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
