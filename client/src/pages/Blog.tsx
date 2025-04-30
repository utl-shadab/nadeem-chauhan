import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

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
              Legal Insights & Updates
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-200 mb-6"
              variants={itemVariants}
            >
              Expert analysis and practical advice on legal matters
            </motion.p>
            
            <motion.div 
              className="w-20 h-1 bg-secondary mb-8"
              variants={itemVariants}
            ></motion.div>
            
            <motion.p 
              className="text-lg text-gray-200"
              variants={itemVariants}
            >
              Stay informed with the latest developments in the legal world through our regularly updated blog. Our attorneys share valuable insights, case analyses, and practical tips.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Main Content */}
            <div className="md:w-2/3">
              <motion.div 
                className="mb-12 flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === null ? 'bg-primary text-white' : 'bg-muted text-gray-600 hover:bg-gray-200'} transition-colors duration-200`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All Categories
                </button>
                
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-primary text-white' : 'bg-muted text-gray-600 hover:bg-gray-200'} transition-colors duration-200`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
              
              <motion.div 
                className="space-y-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {filteredPosts.map((post, index) => (
                  <motion.article 
                    key={post.slug}
                    className="border-b border-gray-200 pb-12 last:border-0"
                    variants={itemVariants}
                    custom={index}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                      <div className="md:col-span-2">
                        <div className="h-56 md:h-full bg-muted rounded-xl overflow-hidden">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                      
                      <div className="md:col-span-3">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span className="material-icons text-sm mr-1">calendar_today</span>
                          {post.date}
                          <span className="mx-2">•</span>
                          <span className="bg-muted text-gray-600 px-2 py-1 rounded-full text-xs">{post.category}</span>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-primary mb-4">
                          <Link href={`/blog/${post.slug}`} className="hover:text-secondary transition-colors duration-200">
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-5">{post.excerpt}</p>
                        
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 overflow-hidden">
                            <img 
                              src={post.author.imageUrl} 
                              alt={post.author.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{post.author.name}</p>
                            <p className="text-sm text-gray-500">{post.author.title}</p>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="inline-flex items-center text-secondary font-medium mt-5"
                        >
                          Read More
                          <span className="material-icons ml-1">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="md:w-1/3">
              <motion.div 
                className="sticky top-28 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-muted rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category}>
                        <button 
                          onClick={() => setSelectedCategory(category)}
                          className="text-gray-600 hover:text-secondary transition-colors duration-200 flex justify-between w-full"
                        >
                          <span>{category}</span>
                          <span className="bg-white text-gray-500 px-2 py-0.5 rounded-full text-xs">
                            {blogPosts.filter(post => post.category === category).length}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-muted rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <li key={post.slug} className="flex items-start">
                        <div className="h-16 w-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-3">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <Link href={`/blog/${post.slug}`} className="font-medium text-gray-800 hover:text-secondary transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary text-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Legal Consultation</h3>
                  <p className="mb-4">Need personalized legal advice? Schedule a consultation with our experts.</p>
                  <Link href="/contact" className="bg-white text-primary hover:bg-secondary hover:text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 inline-block">
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">Get the latest legal insights delivered to your inbox. We'll send you updates on new articles, legal developments, and expert advice.</p>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center bg-primary hover:bg-secondary text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Subscribe Now
              <span className="material-icons ml-2">send</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
