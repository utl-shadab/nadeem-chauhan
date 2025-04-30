import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

// Form validation schema using Zod
const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: 'Please select a service' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      setIsSuccess(true);
      toast({
        title: "Message Sent",
        description: "Thank you! We'll be in touch soon.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-200 mb-6"
              variants={itemVariants}
            >
              Get in touch with our legal team
            </motion.p>
            
            <motion.div 
              className="w-20 h-1 bg-secondary mb-8"
              variants={itemVariants}
            ></motion.div>
            
            <motion.p 
              className="text-lg text-gray-200"
              variants={itemVariants}
            >
              We're here to help with your legal needs. Fill out the form below or use our contact information to reach out to us directly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">Our team of experienced attorneys is ready to assist you with your legal needs. Contact us today to schedule a consultation.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-muted rounded-full p-3 mr-4">
                    <span className="material-icons text-primary">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      1234 Legal Avenue, Suite 500<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-muted rounded-full p-3 mr-4">
                    <span className="material-icons text-primary">phone</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                    <p className="text-gray-600">(212) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-muted rounded-full p-3 mr-4">
                    <span className="material-icons text-primary">email</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                    <p className="text-gray-600">contact@nadeemchauhan.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-muted rounded-full p-3 mr-4">
                    <span className="material-icons text-primary">access_time</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-primary mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" aria-label="LinkedIn" className="bg-muted p-3 rounded-full hover:bg-gray-200 transition-colors duration-200">
                    <span className="material-icons text-primary">linkedin</span>
                  </a>
                  <a href="#" aria-label="Twitter" className="bg-muted p-3 rounded-full hover:bg-gray-200 transition-colors duration-200">
                    <span className="material-icons text-primary">twitter</span>
                  </a>
                  <a href="#" aria-label="Facebook" className="bg-muted p-3 rounded-full hover:bg-gray-200 transition-colors duration-200">
                    <span className="material-icons text-primary">facebook</span>
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Schedule a Consultation</h3>
              
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                    <span className="material-icons text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. A member of our team will contact you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 inline-flex items-center bg-primary hover:bg-secondary text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary`} 
                        {...register('firstName')}
                      />
                      {errors.firstName && <p className="mt-1 text-red-500 text-sm">{errors.firstName.message}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary`}
                        {...register('lastName')}
                      />
                      {errors.lastName && <p className="mt-1 text-red-500 text-sm">{errors.lastName.message}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary`}
                      {...register('email')}
                    />
                    {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      {...register('phone')}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                    <select 
                      id="service" 
                      className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary`}
                      {...register('service')}
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="litigation">Litigation</option>
                      <option value="ip">Intellectual Property</option>
                      <option value="tax">Tax Law</option>
                      <option value="family">Family Law</option>
                      <option value="estate">Estate Planning</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service.message}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Brief Description of Your Needs</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary`}
                      {...register('message')}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-icons animate-spin mr-2">refresh</span>
                        Submitting...
                      </>
                    ) : 'Submit Request'}
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4">By submitting this form, you agree to our Privacy Policy. We'll respond to your inquiry within 24 hours.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Visit our office in the heart of New York City.</p>
          </motion.div>
          
          <motion.div
            className="rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-96 bg-gray-200 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215266952319!2d-73.98773492396824!3d40.757714537648534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259aae0ecd259%3A0x86dcdd53b104171c!2sManhattan%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1688594069942!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Find answers to common questions about working with our firm.</p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-primary mb-3">What should I bring to my initial consultation?</h3>
              <p className="text-gray-600">It's helpful to bring any documents related to your legal matter, including contracts, correspondence, and any other relevant paperwork. This allows our attorneys to get a complete picture of your situation.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-primary mb-3">How much does an initial consultation cost?</h3>
              <p className="text-gray-600">We offer a free 30-minute initial consultation for new clients. This gives you the opportunity to discuss your legal needs and determine if our firm is the right fit for you without any financial commitment.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-primary mb-3">How quickly can I expect a response after contacting your firm?</h3>
              <p className="text-gray-600">We strive to respond to all inquiries within 24 business hours. For urgent matters, please indicate the nature of your emergency when you reach out to us.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-primary mb-3">Do you offer virtual consultations?</h3>
              <p className="text-gray-600">Yes, we offer consultations via video conference or phone for clients who prefer remote meetings. This option provides flexibility while maintaining the personalized service we're known for.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8">Schedule a consultation with our experienced legal team today.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-primary hover:bg-secondary hover:text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
            >
              Contact Us Now
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
