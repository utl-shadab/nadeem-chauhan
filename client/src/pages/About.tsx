import { motion } from 'framer-motion';
import { Link } from 'wouter';

const About = () => {
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
              About Legis & Partners
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-200 mb-6"
              variants={itemVariants}
            >
              A modern law firm with traditional values
            </motion.p>
            
            <motion.div 
              className="w-20 h-1 bg-secondary mb-8"
              variants={itemVariants}
            ></motion.div>
            
            <motion.p 
              className="text-lg text-gray-200"
              variants={itemVariants}
            >
              For over 25 years, we've been committed to providing exceptional legal services with integrity and excellence, helping clients navigate complex legal challenges and achieve their goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              
              <div className="space-y-6 text-gray-600">
                <p>Founded in 1998 by a group of forward-thinking attorneys, Legis & Partners was established with a clear mission: to provide accessible, high-quality legal services that combine deep expertise with a genuine commitment to client success.</p>
                
                <p>What began as a small practice with just five attorneys has grown into a respected firm with offices in major cities across the country. Throughout our growth, we've maintained our founding principles of integrity, excellence, and client-centered service.</p>
                
                <p>Today, our team of over 75 attorneys and legal professionals continues to uphold these values while embracing innovative approaches to legal practice. We leverage technology and modern methodologies to deliver efficient, effective legal solutions without losing the personal touch that has defined our firm since day one.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Legis & Partners office" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-secondary opacity-10 rounded-xl z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">These principles guide our practice and define our approach to serving clients.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">balance</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Integrity</h3>
              <p className="text-gray-600">We adhere to the highest ethical standards in all our interactions, ensuring transparency and honesty in everything we do.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">stars</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
              <p className="text-gray-600">We are committed to delivering the highest quality legal services, paying meticulous attention to detail and staying at the forefront of legal developments.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">groups</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Client Focus</h3>
              <p className="text-gray-600">We place our clients at the center of everything we do, taking the time to understand their unique needs and tailoring our approach accordingly.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">lightbulb</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Innovation</h3>
              <p className="text-gray-600">We embrace creative thinking and modern approaches to solve complex legal challenges effectively and efficiently.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">diversity_3</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Diversity</h3>
              <p className="text-gray-600">We value diverse perspectives and experiences, fostering an inclusive environment that strengthens our firm and benefits our clients.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <span className="material-icons text-3xl">volunteer_activism</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Community</h3>
              <p className="text-gray-600">We are dedicated to giving back to the communities we serve through pro bono work, charitable initiatives, and civic engagement.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our experienced team of attorneys is dedicated to providing exceptional legal representation.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-sm"
              variants={itemVariants}
            >
              <div className="h-80 bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Michael J. Reynolds" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">Michael J. Reynolds</h3>
                <p className="text-secondary font-medium mb-4">Managing Partner</p>
                <p className="text-gray-600 mb-4">With over 25 years of experience in corporate law, Michael leads our firm with a focus on strategic growth and client service excellence.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-sm"
              variants={itemVariants}
            >
              <div className="h-80 bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">Sarah Chen</h3>
                <p className="text-secondary font-medium mb-4">Senior Partner, Litigation</p>
                <p className="text-gray-600 mb-4">A formidable litigator with a remarkable track record in complex commercial and civil disputes, Sarah leads our litigation practice.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl overflow-hidden shadow-sm"
              variants={itemVariants}
            >
              <div className="h-80 bg-muted overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="David Washington" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-1">David Washington</h3>
                <p className="text-secondary font-medium mb-4">Partner, Intellectual Property</p>
                <p className="text-gray-600 mb-4">Specializing in intellectual property protection and technology law, David helps clients safeguard their most valuable assets.</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/contact" className="inline-flex items-center bg-primary hover:bg-secondary text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
              Contact Our Team
              <span className="material-icons ml-2">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-200 mb-8">Let's discuss how our legal expertise can help you achieve your goals.</p>
            <Link href="/contact" className="bg-white text-primary hover:bg-secondary hover:text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-block">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
