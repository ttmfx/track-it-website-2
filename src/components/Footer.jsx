import React from 'react';
import checkItLogo from  "../assets/check-it-logo.svg";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8 pt-20 pb-16">
      <div className="container mx-auto">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Our Story</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Consulting</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Support</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Documentation</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Email Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Live Chat</a></li>
            </ul>
          </div>

        </div>


        <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
          

          <div className="flex items-center mb-4 md:mb-0">
            <img src={checkItLogo} alt="Website Logo" className="h-8 w-8 mr-2" />
            <span className="text-lg font-medium">Track-it</span>
          </div>
          

          <div>
            <p>&copy; {new Date().getFullYear()} Track-it. All rights reserved.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

