import { useEffect } from 'react';
import { Link } from 'wouter';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog';
import { testimonials } from '@/data/testimonials';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ExpertiseGrid from '@/components/ExpertiseGrid';

const Home = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
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
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              Modern Legal Solutions for Today's Challenges
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-200 mb-8"
              variants={itemVariants}
            >
              Expert legal advice tailored to your unique needs. Our team of experienced attorneys is dedicated to protecting your interests and achieving the best possible outcomes.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link href="/services" className="bg-secondary hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg text-center transition-colors duration-200">
                Explore Our Services
              </Link>
              
              <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-medium px-6 py-3 rounded-lg text-center transition-colors duration-200">
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <ExpertiseGrid />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Legis & Partners</h2>
              <p className="text-gray-600 mb-8">With over 25 years of experience, our firm has established a reputation for excellence, integrity, and client-focused legal services. We combine traditional legal expertise with modern approaches to deliver results.</p>
              
              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-secondary rounded-full p-2 mr-4 text-white">
                    <span className="material-icons">people</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Client-Centered Approach</h3>
                    <p className="text-gray-600">We prioritize open communication and personalized strategies tailored to your specific legal needs.</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-secondary rounded-full p-2 mr-4 text-white">
                    <span className="material-icons">school</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Experienced Attorneys</h3>
                    <p className="text-gray-600">Our team includes highly skilled lawyers with expertise across numerous practice areas.</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-secondary rounded-full p-2 mr-4 text-white">
                    <span className="material-icons">gavel</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Proven Results</h3>
                    <p className="text-gray-600">We have a strong track record of successful outcomes across a wide range of legal matters.</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link href="/about" className="inline-flex items-center text-secondary font-medium mt-8">
                  Learn More About Our Firm
                  <span className="material-icons ml-1">arrow_forward</span>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Legal professionals in meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-accent opacity-10 rounded-xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Don't just take our word for it. Hear from the individuals and businesses we've had the privilege to represent.</p>
          </motion.div>
          
          {/* Import and use TestimonialsCarousel component */}
          <TestimonialsCarousel />
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/about" className="text-secondary font-medium inline-flex items-center">
              Read More Client Stories
              <span className="material-icons ml-1">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Latest Legal Insights</h2>
              <p className="text-lg text-gray-600">Stay informed with our latest articles and legal updates.</p>
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 text-secondary font-medium inline-flex items-center">
              View All Articles
              <span className="material-icons ml-1">arrow_forward</span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {blogPosts.slice(0, 3).map((post, index) => (
              <motion.div 
                key={post.slug}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover-up"
                variants={itemVariants}
                custom={index}
              >
                <div className="h-48 bg-muted overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="material-icons text-sm mr-1">calendar_today</span>
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="text-secondary font-medium flex items-center"
                  >
                    Read More
                    <span className="material-icons text-sm ml-1">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
              <p className="text-xl text-gray-300 mb-8">Our team is ready to provide expert guidance and representation tailored to your unique situation.</p>
              
              <motion.div 
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="rounded-full bg-secondary bg-opacity-20 p-2 mr-4">
                    <span className="material-icons">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                    <p className="text-gray-300">1234 Legal Avenue, Suite 500<br />New York, NY 10001</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="rounded-full bg-secondary bg-opacity-20 p-2 mr-4">
                    <span className="material-icons">phone</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us</h3>
                    <p className="text-gray-300">(212) 555-1234</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="rounded-full bg-secondary bg-opacity-20 p-2 mr-4">
                    <span className="material-icons">email</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <p className="text-gray-300">info@legisandpartners.com</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-white text-foreground p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Schedule a Consultation</h3>
              <Link 
                href="/contact" 
                className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 block text-center"
              >
                Contact Us Now
              </Link>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Visit our contact page to fill out our detailed form or call us directly
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
