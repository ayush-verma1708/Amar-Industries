import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Amar Industries</h3>
            <p className="text-gray-400 text-sm">
              Innovating plastic manufacturing since 1997. Your trusted partner in quality & excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Products", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-gray-300 hover:text-gray-100 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <address className="text-gray-400 text-sm not-italic space-y-2">
              <p>B-54, Maharajpura, Industrial Area,</p>
              <p>Gwalior, Madhya Pradesh 474005</p>
              <p className="mt-2">📞 +91 82240 00620</p>
              <p>✉️ info@amarindustries.com</p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Amar Industries. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[{ Icon: Facebook, link: '#' }, { Icon: Linkedin, link: '#' }, { Icon: Instagram, link: '#' }].map(({ Icon, link }) => (
              <a key={link} href={link} target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gray-100 transition-all duration-300">
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
