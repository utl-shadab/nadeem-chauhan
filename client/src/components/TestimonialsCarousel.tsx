import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials, Testimonial } from '@/data/testimonials';

// Updated testimonial data with higher quality images and consistent styling
const enhancedTestimonials = [
  {
    quote: "Comprehensive Solutions Tailored to Your Needs",
    name: "John D.",
    title: "CEO, TechStart Inc.",
    rating: "10/10 recommended",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Expert Legal Guidance When You Need It Most",
    name: "Sarah M.",
    title: "Family Law Client",
    rating: "10/10 recommended",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Strategic Approach to Complex Legal Challenges",
    name: "David W.",
    title: "CTO, Innovate Solutions",
    rating: "10/10 recommended",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Personal Attention and Professional Excellence",
    name: "Emily J.",
    title: "Personal Injury Client",
    rating: "10/10 recommended",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "Reliable Counsel for Every Business Decision",
    name: "Thomas W.",
    title: "Commercial Real Estate Investor",
    rating: "10/10 recommended",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "A Partner in Planning for Your Future",
    name: "Maria R.",
    title: "Estate Planning Client",
    rating: "10/10 recommended",
    imageUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '30%' : '-30%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '30%' : '-30%',
      opacity: 0
    })
  };

  const quoteVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: 0.3 
      } 
    }
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrent(prev => (prev + 1) % enhancedTestimonials.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const handlePrevious = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    setDirection(-1);
    setCurrent(prev => (prev === 0 ? enhancedTestimonials.length - 1 : prev - 1));
    startAutoplay();
  };

  const handleNext = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    setDirection(1);
    setCurrent(prev => (prev + 1) % enhancedTestimonials.length);
    startAutoplay();
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from our clients about their experiences working with our legal team at Nadeem Chauhan Consultancy.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
                  opacity: { duration: 0.5 }
                }}
                className="w-full"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section - Left side on desktop, top on mobile */}
                    <div className="w-full md:w-2/5 bg-gray-100">
                      <div className="h-64 md:h-full relative">
                        <img 
                          src={enhancedTestimonials[current].imageUrl} 
                          alt={enhancedTestimonials[current].name}
                          className="w-full h-full object-cover"
                        />
                        {/* Quotation mark overlay */}
                        <div className="absolute top-4 right-4 md:top-6 md:left-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                          <span className="material-icons text-primary text-2xl">format_quote</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section - Right side on desktop, bottom on mobile */}
                    <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-between">
                      <div>
                        <motion.h3 
                          className="text-xl md:text-2xl font-bold text-gray-800 mb-4"
                          variants={quoteVariants}
                          initial="initial"
                          animate="animate"
                          key={`title-${current}`}
                        >
                          {enhancedTestimonials[current].quote}
                        </motion.h3>
                        
                        <motion.div 
                          className="text-gray-500 text-sm mb-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          key={`rating-${current}`}
                        >
                          {enhancedTestimonials[current].rating}
                        </motion.div>
                      </div>
                      
                      <div>
                        <motion.div 
                          className="mb-6 md:mb-10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          key={`author-${current}`}
                        >
                          <h4 className="font-bold text-primary">
                            {enhancedTestimonials[current].name}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {enhancedTestimonials[current].title}
                          </p>
                        </motion.div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            {`0${current + 1}`}
                            <span className="mx-2 text-gray-300">—</span>
                            {`0${enhancedTestimonials.length}`}
                          </div>
                          
                          <div className="flex space-x-2">
                            <button
                              onClick={handlePrevious}
                              className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                              aria-label="Previous testimonial"
                            >
                              <span className="material-icons text-xl">arrow_back</span>
                            </button>
                            
                            <button
                              onClick={handleNext}
                              className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                              aria-label="Next testimonial"
                            >
                              <span className="material-icons text-xl">arrow_forward</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;