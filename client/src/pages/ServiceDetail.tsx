import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const ServiceDetail = () => {
  const [, params] = useRoute('/services/:slug');
  const slug = params?.slug;
  
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <Link href="/services" className="bg-primary hover:bg-secondary text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

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
              {service.title}
            </motion.h1>
            
            <motion.div 
              className="w-20 h-1 bg-secondary mb-8"
              variants={itemVariants}
            ></motion.div>
            
            <motion.p 
              className="text-xl text-gray-200"
              variants={itemVariants}
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none">
                <h2>How We Can Help</h2>
                <p>{service.content}</p>
                
                <h3>Our Approach</h3>
                <p>At Legis & Partners, we take a client-centered approach to {service.title.toLowerCase()}. We understand that each situation is unique, and we tailor our strategies to meet your specific needs and goals.</p>
                
                <h3>Why Choose Us for {service.title}</h3>
                <ul>
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                
                <blockquote>
                  <p>"{service.quote.text}"</p>
                  <footer>- {service.quote.author}, {service.quote.title}</footer>
                </blockquote>
                
                <h3>Our Process</h3>
                <ol>
                  {service.process.map((step, index) => (
                    <li key={index}><strong>{step.title}:</strong> {step.description}</li>
                  ))}
                </ol>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-28">
                <div className="bg-muted rounded-xl p-8 shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Our Expertise</h3>
                  <ul className="space-y-3">
                    {service.expertise.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="material-icons text-secondary mr-2 mt-0.5">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary text-white rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Need Assistance?</h3>
                  <p className="mb-6">Contact us today to schedule a consultation with one of our {service.title.toLowerCase()} specialists.</p>
                  <Link href="/contact" className="bg-white text-primary hover:bg-secondary hover:text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 inline-block w-full text-center">
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Related Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore other legal services that might be relevant to your needs.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {services
              .filter(s => s.category === service.category && s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div 
                  key={relatedService.slug}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden hover-up"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img 
                      src={relatedService.imageUrl} 
                      alt={relatedService.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.excerpt}</p>
                    <Link 
                      href={`/services/${relatedService.slug}`} 
                      className="text-secondary font-medium flex items-center"
                    >
                      Learn More
                      <span className="material-icons text-sm ml-1">arrow_forward</span>
                    </Link>
                  </div>
                </motion.div>
              ))
            }
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8">Our team is ready to provide the legal support you need.</p>
            <Link href="/contact" className="bg-white text-primary hover:bg-secondary hover:text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200 inline-block">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
