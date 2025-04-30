import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const Services = () => {
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
              Our Legal Services
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-200 mb-6"
              variants={itemVariants}
            >
              Comprehensive legal solutions tailored to your needs
            </motion.p>
            
            <motion.div 
              className="w-20 h-1 bg-secondary mb-8"
              variants={itemVariants}
            ></motion.div>
            
            <motion.p 
              className="text-lg text-gray-200"
              variants={itemVariants}
            >
              From corporate transactions to personal matters, our experienced attorneys provide expert guidance across a wide range of practice areas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 pb-4 border-b border-gray-200">
                Business & Corporate Services
              </h2>
              
              <ul className="space-y-6">
                {services
                  .filter(service => service.category === 'business')
                  .map(service => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="group block">
                        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-200 flex items-center">
                          {service.title}
                          <span className="material-icons ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">arrow_forward</span>
                        </h3>
                        <p className="text-gray-600 mt-2">{service.excerpt}</p>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 pb-4 border-b border-gray-200">
                Personal Legal Services
              </h2>
              
              <ul className="space-y-6">
                {services
                  .filter(service => service.category === 'personal')
                  .map(service => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="group block">
                        <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-200 flex items-center">
                          {service.title}
                          <span className="material-icons ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">arrow_forward</span>
                        </h3>
                        <p className="text-gray-600 mt-2">{service.excerpt}</p>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">How we work with clients to deliver exceptional legal services.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
                <span className="material-icons text-3xl">chat</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">1. Initial Consultation</h3>
              <p className="text-gray-600">We begin with a thorough assessment of your legal needs, discussing your goals and concerns to develop a clear understanding of your situation.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
                <span className="material-icons text-3xl">map</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">2. Strategic Planning</h3>
              <p className="text-gray-600">Based on your needs, we develop a customized strategy that aligns with your objectives, outlining clear steps and potential outcomes.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
                <span className="material-icons text-3xl">verified</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">3. Execution & Results</h3>
              <p className="text-gray-600">We implement your legal strategy with precision and diligence, keeping you informed throughout the process and adapting as needed to achieve optimal results.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore some of our most requested legal services.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {services.filter(service => service.featured).map((service, index) => (
              <motion.div 
                key={service.slug}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden hover-up"
                variants={itemVariants}
                custom={index}
              >
                <div className="h-48 bg-muted overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.excerpt}</p>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-secondary font-medium flex items-center"
                  >
                    Learn More
                    <span className="material-icons text-sm ml-1">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Legal Guidance?</h2>
            <p className="text-xl text-gray-200 mb-8">Contact us today to schedule a consultation with one of our experienced attorneys.</p>
            <Link href="/contact" className="bg-white text-primary hover:bg-secondary hover:text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-block">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
