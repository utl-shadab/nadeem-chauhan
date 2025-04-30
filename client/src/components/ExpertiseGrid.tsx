import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface ExpertiseArea {
  title: string;
  slug: string;
  imageUrl: string;
}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Corporate Law',
    slug: '/services/corporate-law',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Family Law',
    slug: '/services/family-law',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Criminal Defense',
    slug: '/services/criminal-defense',
    imageUrl: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Estate Planning',
    slug: '/services/estate-planning',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + custom * 0.1,
      duration: 0.5
    }
  })
};

const ExpertiseGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left column for headings */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">Practice Areas</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
              <p className="text-gray-600 mb-8">
                Our team at Nadeem Chauhan Consultancy is dedicated to offering comprehensive legal
                solutions across multiple practice areas.
              </p>
            </div>
          </div>
          
          {/* Right column for expertise cards grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  className="group relative overflow-hidden rounded-lg"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="relative h-[400px] md:h-[320px] overflow-hidden rounded-lg">
                    <img
                      src={area.imageUrl}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    
                    {/* Content at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center">
                      <h3 className="text-white font-bold text-xl">
                        {area.title}
                      </h3>
                      
                      <Link href={area.slug} className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-primary shadow-md transition-transform group-hover:translate-x-1">
                        <span className="material-icons text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;