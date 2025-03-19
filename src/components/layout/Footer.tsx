import { Link } from 'react-router-dom';
// import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Amar Industries</h3>
            <p className='text-gray-400'>
              Your trusted partner in plastic manufacturing since 1997.
            </p>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/products'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Products
                </Link>
              </li>
              {/* <li>
                <Link
                  to='/quality'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Quality Assurance
                </Link>
              </li> */}
              <li>
                <Link
                  to='/contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
            <address className='text-gray-400 not-italic'>
              <p>123 Industrial Area</p>
              <p>Mumbai, Maharashtra</p>
              <p>India - 400001</p>
              <p className='mt-2'>Phone: +91 1234567890</p>
              <p>Email: info@amarindustries.com</p>
            </address>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} Amar Industries. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
