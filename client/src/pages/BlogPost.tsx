import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';

const BlogPost = () => {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blog" className="bg-primary hover:bg-secondary text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
            Back to Blog
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

  // Get related posts (same category)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

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
            <motion.div 
              className="flex items-center text-sm text-gray-300 mb-4"
              variants={itemVariants}
            >
              <Link href="/blog" className="hover:text-white transition-colors duration-200">
                Blog
              </Link>
              <span className="mx-2">›</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full">{post.category}</span>
            </motion.div>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              className="flex items-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 mr-4 overflow-hidden">
                <img 
                  src={post.author.imageUrl} 
                  alt={post.author.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <div className="flex items-center text-sm text-gray-300">
                  <span>{post.author.title}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <span className="material-icons text-sm mr-1">calendar_today</span>
                    {post.date}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-xl overflow-hidden mb-8 shadow-sm">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-gray-600 mb-8">{post.excerpt}</p>
                  
                  {post.content.map((section, index) => (
                    <div key={index}>
                      {section.type === 'heading' && (
                        <h2>{section.content}</h2>
                      )}
                      
                      {section.type === 'paragraph' && (
                        <p>{section.content}</p>
                      )}
                      
                      {section.type === 'list' && section.items && (
                        <ul>
                          {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                      
                      {section.type === 'quote' && (
                        <blockquote>
                          <p>"{section.content}"</p>
                          {section.author && (
                            <footer>- {section.author}</footer>
                          )}
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 mt-12 pt-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Share this article:</p>
                      <div className="flex space-x-3">
                        <a href="#" aria-label="Share on Twitter" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                          <span className="material-icons text-gray-600">share</span>
                        </a>
                        <a href="#" aria-label="Share on LinkedIn" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                          <span className="material-icons text-gray-600">link</span>
                        </a>
                        <a href="#" aria-label="Share via Email" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                          <span className="material-icons text-gray-600">email</span>
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Link href="/blog" className="text-secondary font-medium flex items-center">
                        <span className="material-icons mr-1">arrow_back</span>
                        Back to Blog
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-28 space-y-8">
                <div className="bg-muted rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">About the Author</h3>
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 overflow-hidden">
                      <img 
                        src={post.author.imageUrl} 
                        alt={post.author.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{post.author.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{post.author.title}</p>
                      <p className="text-sm text-gray-600">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <li key={relatedPost.slug} className="flex items-start">
                        <div className="h-16 w-16 bg-gray-200 rounded-md overflow-hidden flex-shrink-0 mr-3">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <Link href={`/blog/${relatedPost.slug}`} className="font-medium text-gray-800 hover:text-secondary transition-colors duration-200 line-clamp-2">
                            {relatedPost.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary text-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Need Legal Help?</h3>
                  <p className="mb-4">Get expert advice on {post.category.toLowerCase()} from our specialized attorneys.</p>
                  <Link href="/contact" className="bg-white text-primary hover:bg-secondary hover:text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 inline-block">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Articles */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">More Legal Insights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Explore more articles from our legal experts.</p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 3)
              .map((post, index) => (
                <motion.div 
                  key={post.slug}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover-up"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="h-48 bg-gray-100 overflow-hidden">
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
              ))
            }
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/blog" className="inline-flex items-center bg-primary hover:bg-secondary text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
              View All Articles
              <span className="material-icons ml-2">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
