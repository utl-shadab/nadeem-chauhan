import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">
              Nadeem Chauhan Consultancy
            </h3>
            <p className="text-gray-400 mb-6">
              Providing exceptional legal services with integrity and excellence
              since 2005.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/corporate-law"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services/litigation"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Litigation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/intellectual-property"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tax-law"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Tax Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services/family-law"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="material-icons mr-2 text-secondary">
                  location_on
                </span>
                1234 Legal Avenue, Suite 500
                <br />
                New York, NY 10001
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-2 text-secondary">
                  phone
                </span>
                (212) 555-1234
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-2 text-secondary">
                  email
                </span>
                contact@nadeemchauhan.com
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-2 text-secondary">
                  access_time
                </span>
                Mon-Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-100 border-opacity-10 pt-6 mt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} nadeemchauhan.com All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="#"
                className="px-3 py-1.5 border border-gray-600 hover:border-gray-400 rounded-md text-xs text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <FaEnvelope className="mr-2" /> Email
              </Link>
              <Link
                href="#"
                className="px-3 py-1.5 border border-gray-600 hover:border-gray-400 rounded-md text-xs text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <FaTwitter className="mr-2" /> X
              </Link>
              <Link
                href="#"
                className="px-3 py-1.5 border border-gray-600 hover:border-gray-400 rounded-md text-xs text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <FaFacebook className="mr-2" /> Facebook
              </Link>
              <Link
                href="#"
                className="px-3 py-1.5 border border-gray-600 hover:border-gray-400 rounded-md text-xs text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </Link>
              <Link
                href="#"
                className="px-3 py-1.5 border border-gray-600 hover:border-gray-400 rounded-md text-xs text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
              >
                <FaInstagram className="mr-2" /> Instagram
              </Link>
              <a
                href="https://wa.me/919756188580?text=Hello,%20I'm%20interested%20in%20your%20legal%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 border border-green-700 hover:border-green-500 bg-green-700 bg-opacity-20 hover:bg-opacity-30 rounded-md text-xs text-green-400 hover:text-green-300 transition-colors duration-200 flex items-center"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
