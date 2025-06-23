
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ITC</span>
              </div>
              <span className="text-xl font-bold">ITC Hotels</span>
            </div>
            <p className="text-gray-400 mb-4">
              Experience luxury and elegance at India's finest hotel chain. Creating memorable moments since 1975.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-amber-400 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Luxury Accommodation</li>
              <li>Fine Dining</li>
              <li>Spa & Wellness</li>
              <li>Business Center</li>
              <li>Event Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>1-800-ITC-HOTELS</p>
              <p>reservations@itchotels.in</p>
              <p>Corporate Office:<br />ITC Limited, 37 J.L. Nehru Road<br />Kolkata - 700071</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ITC Hotels. All rights reserved. | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
