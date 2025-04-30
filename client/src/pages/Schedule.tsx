import { motion } from 'framer-motion';
import { Link } from 'wouter';
import AppointmentScheduler from '../components/AppointmentScheduler';

const Schedule = () => {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };
  
  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  return (
    <>
      <motion.div
        className="container mx-auto py-12 px-4"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        {/* Breadcrumb */}
        <motion.div variants={itemVariants} className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-primary">Schedule a Consultation</span>
                </div>
              </li>
            </ol>
          </nav>
        </motion.div>

        {/* Page Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Schedule a Consultation</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expert legal team is ready to assist you with your legal matters. Schedule a consultation with 
            one of our experienced attorneys to discuss your case and explore your legal options.
          </p>
        </motion.div>

        {/* Main scheduling section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Scheduling form */}
          <div className="lg:col-span-2">
            <motion.div variants={itemVariants}>
              <AppointmentScheduler />
            </motion.div>
          </div>

          {/* Sidebar information */}
          <div className="space-y-6">
            {/* What to expect */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <span className="material-icons mr-2">info</span>
                What to Expect
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="material-icons text-green-500 mr-2 text-sm">check_circle</span>
                  <span>A thorough discussion of your legal matter</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-green-500 mr-2 text-sm">check_circle</span>
                  <span>Evaluation of your options and potential outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-green-500 mr-2 text-sm">check_circle</span>
                  <span>Transparent discussion of costs and timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-green-500 mr-2 text-sm">check_circle</span>
                  <span>Clear next steps and action plan</span>
                </li>
              </ul>
            </motion.div>

            {/* Operating Hours */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <span className="material-icons mr-2">schedule</span>
                Operating Hours
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                Note: Evening appointments are available by special request.
              </p>
            </motion.div>

            {/* Contact information */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <span className="material-icons mr-2">contact_phone</span>
                Need Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                If you need help scheduling your appointment or have any questions, please contact us:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="material-icons mr-2 text-primary">phone</span>
                  <span>+91 9756188580</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons mr-2 text-primary">email</span>
                  <span>contact@nadeemchauhan.com</span>
                </li>
                <li className="flex items-center">
                  <span className="material-icons mr-2 text-primary">location_on</span>
                  <span>1234 Legal Avenue, Suite 500, New York, NY 10001</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* FAQs about consultations */}
        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-lg shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How long is a typical consultation?</h3>
              <p className="text-gray-600">
                Initial consultations typically last 30-60 minutes, depending on the complexity of your legal matter.
                Follow-up consultations may be shorter or longer as needed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What should I bring to my consultation?</h3>
              <p className="text-gray-600">
                Please bring any relevant documents related to your case, such as contracts, correspondence, court papers,
                or other evidence that might help us understand your situation better.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Is there a fee for the initial consultation?</h3>
              <p className="text-gray-600">
                Some initial consultations are complimentary, while others may have a nominal fee depending on the
                practice area and attorney. The fee structure will be clearly communicated before your appointment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I reschedule my appointment?</h3>
              <p className="text-gray-600">
                Yes, you can reschedule your appointment by contacting our office at least 24 hours in advance.
                Late cancellations or no-shows may be subject to a cancellation fee.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          variants={itemVariants}
          className="bg-primary text-white rounded-lg shadow-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our experienced legal team is here to guide you through your legal journey. Schedule your consultation today
            and take the first step toward resolving your legal matters.
          </p>
          <Link href="#scheduler">
            <button className="bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Now
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Schedule;