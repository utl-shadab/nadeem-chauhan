export interface ServiceProcess {
  title: string;
  description: string;
}

export interface ServiceQuote {
  text: string;
  author: string;
  title: string;
}

export interface Service {
  slug: string;
  title: string;
  category: 'business' | 'personal';
  excerpt: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  content: string;
  expertise: string[];
  benefits: string[];
  process: ServiceProcess[];
  quote: ServiceQuote;
}

export const services: Service[] = [
  {
    slug: 'corporate-law',
    title: 'Corporate Law',
    category: 'business',
    excerpt: 'Comprehensive legal solutions for businesses of all sizes, from startups to multinational corporations.',
    description: 'Our corporate law team provides strategic counsel to help businesses navigate complex legal challenges and capitalize on opportunities.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: 'Our corporate law practice offers comprehensive legal services to businesses at all stages of development. From entity formation and governance to complex mergers and acquisitions, our attorneys provide strategic counsel tailored to your business objectives. We work closely with entrepreneurs, small businesses, and large corporations to navigate legal complexities and capitalize on opportunities. Our team has extensive experience in drafting and negotiating commercial contracts, ensuring regulatory compliance, and resolving business disputes efficiently.',
    expertise: [
      'Business Formation & Structuring',
      'Mergers & Acquisitions',
      'Corporate Governance',
      'Commercial Contracts',
      'Regulatory Compliance',
      'Business Succession Planning',
      'Corporate Finance'
    ],
    benefits: [
      'Access to attorneys with deep industry knowledge and business acumen',
      'Practical, business-focused legal solutions',
      'Proactive risk management strategies',
      'Long-term relationship focused on your company\'s growth',
      'Seamless coordination with other practice areas as needed'
    ],
    process: [
      {
        title: 'Initial Business Assessment',
        description: 'We analyze your business structure, operations, and goals to identify legal needs and potential challenges.'
      },
      {
        title: 'Strategy Development',
        description: 'Based on your specific situation, we develop a comprehensive legal strategy aligned with your business objectives.'
      },
      {
        title: 'Implementation',
        description: 'We execute the legal services needed, whether drafting contracts, negotiating deals, or ensuring compliance.'
      },
      {
        title: 'Ongoing Support',
        description: 'We provide continuing legal counsel as your business evolves, helping you navigate new challenges and opportunities.'
      }
    ],
    quote: {
      text: 'The corporate team at Legis & Partners provided invaluable guidance during our company\'s merger. Their attention to detail and strategic approach made a complex process manageable and successful.',
      author: 'Michael Reynolds',
      title: 'CEO, TechInnovate Inc.'
    }
  },
  {
    slug: 'litigation',
    title: 'Litigation',
    category: 'business',
    excerpt: 'Strategic advocacy and dispute resolution services to protect your interests in and out of the courtroom.',
    description: 'Our litigation team provides powerful representation in disputes of all kinds, with a focus on efficient resolution and positive outcomes.',
    imageUrl: 'https://images.unsplash.com/photo-1567525884226-4ae9d7bc1aab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: 'Our litigation practice represents clients in a wide range of disputes, from commercial and contract disputes to complex business litigation. We understand that litigation is often a last resort, which is why we explore all avenues for resolution, including negotiation, mediation, and arbitration. When trial is necessary, our experienced litigators provide powerful advocacy and strategic representation. We handle cases in state and federal courts, as well as before administrative agencies and in alternative dispute resolution forums. Our approach is always results-oriented, focused on achieving the best possible outcome while managing costs and minimizing disruption to your business or personal life.',
    expertise: [
      'Commercial Litigation',
      'Contract Disputes',
      'Employment Litigation',
      'Real Estate Litigation',
      'Intellectual Property Disputes',
      'Class Action Defense',
      'Alternative Dispute Resolution'
    ],
    benefits: [
      'Strategic case evaluation and litigation planning',
      'Experienced trial attorneys with extensive courtroom experience',
      'Focus on efficient resolution and cost management',
      'Clear communication throughout the litigation process',
      'Creative problem-solving approach to dispute resolution'
    ],
    process: [
      {
        title: 'Case Evaluation',
        description: 'We assess the facts, legal issues, and potential outcomes of your case to develop an initial strategy.'
      },
      {
        title: 'Resolution Options',
        description: 'We explore all potential paths to resolution, including negotiation, mediation, or litigation.'
      },
      {
        title: 'Case Preparation',
        description: 'If litigation is necessary, we thoroughly prepare your case, including discovery, motions, and trial strategy.'
      },
      {
        title: 'Representation',
        description: 'We advocate vigorously on your behalf in court or settlement negotiations to achieve the best possible outcome.'
      }
    ],
    quote: {
      text: 'When our company faced a complex contract dispute, the litigation team provided invaluable counsel. Their strategic approach and unwavering advocacy resulted in a favorable settlement that protected our interests.',
      author: 'Sarah Chen',
      title: 'COO, Global Manufacturing Corp.'
    }
  },
  {
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    category: 'business',
    excerpt: 'Protection for your innovations, creative works, and brand identity in today\'s competitive marketplace.',
    description: 'Our intellectual property attorneys help clients protect, manage, and monetize their valuable IP assets.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: 'Our intellectual property practice helps clients protect, manage, and monetize their valuable IP assets. In today\'s knowledge-based economy, intellectual property often represents the most valuable assets of a business. Our attorneys have extensive experience in trademark, copyright, patent, and trade secret matters. We assist clients with IP registration, licensing, enforcement, and litigation. Our team works with businesses of all sizes, from startups to multinational corporations, to develop comprehensive IP strategies that align with their business goals. We understand the technical and legal complexities of intellectual property and provide practical, business-focused solutions.',
    expertise: [
      'Trademark Registration & Enforcement',
      'Copyright Protection',
      'Patent Prosecution & Litigation',
      'Trade Secret Protection',
      'IP Licensing & Transactions',
      'IP Portfolio Management',
      'IP Due Diligence & Audits'
    ],
    benefits: [
      'Comprehensive protection for valuable intellectual assets',
      'Strategic approach to IP development and monetization',
      'Proactive risk management and infringement prevention',
      'Experienced representation in IP disputes',
      'Integration of IP strategy with overall business objectives'
    ],
    process: [
      {
        title: 'IP Audit & Assessment',
        description: 'We identify your existing and potential intellectual property assets and evaluate protection needs.'
      },
      {
        title: 'Protection Strategy',
        description: 'We develop a comprehensive strategy for registering, protecting, and leveraging your IP assets.'
      },
      {
        title: 'Registration & Documentation',
        description: 'We handle all aspects of IP registration, including applications, responses to office actions, and maintenance.'
      },
      {
        title: 'Enforcement & Monetization',
        description: 'We help enforce your IP rights against infringement and develop strategies to generate value from your IP.'
      }
    ],
    quote: {
      text: 'The IP team\'s expertise was instrumental in protecting our innovative technology and strengthening our market position. Their strategic guidance helped us navigate complex IP issues with confidence.',
      author: 'David Washington',
      title: 'CTO, Innovate Tech Solutions'
    }
  },
  {
    slug: 'tax-law',
    title: 'Tax Law',
    category: 'business',
    excerpt: 'Strategic tax planning and compliance solutions for individuals and businesses.',
    description: 'Our tax attorneys provide comprehensive counsel on tax planning, compliance, and controversy matters.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: 'Our tax law practice offers strategic advice on tax planning, compliance, and controversy matters for individuals and businesses. Tax law impacts nearly every personal and business decision, from entity formation and business transactions to estate planning and wealth transfer. Our tax attorneys work closely with clients to develop and implement tax-efficient strategies that minimize liabilities while achieving business and personal goals. We represent clients before the IRS and state tax authorities in audits, appeals, and litigation. Our team stays current on constantly evolving tax laws and regulations to provide timely, accurate counsel tailored to your specific situation.',
    expertise: [
      'Business Tax Planning',
      'Individual Tax Planning',
      'International Tax',
      'Estate & Gift Tax Planning',
      'Tax Controversy & Litigation',
      'State & Local Tax',
      'Nonprofit Tax Issues'
    ],
    benefits: [
      'Minimization of tax liabilities through strategic planning',
      'Compliance with complex and changing tax regulations',
      'Experienced representation in tax disputes',
      'Integration of tax planning with overall business or personal financial strategies',
      'Proactive approach to identifying tax-saving opportunities'
    ],
    process: [
      {
        title: 'Tax Assessment',
        description: 'We analyze your current tax situation and identify areas for optimization or potential risk.'
      },
      {
        title: 'Strategy Development',
        description: 'We create customized tax planning strategies aligned with your financial goals and risk tolerance.'
      },
      {
        title: 'Implementation',
        description: 'We execute tax planning strategies and ensure compliance with applicable laws and regulations.'
      },
      {
        title: 'Ongoing Monitoring',
        description: 'We regularly review and update your tax plan as laws change and your circumstances evolve.'
      }
    ],
    quote: {
      text: 'The tax team\'s knowledgeable guidance helped our business navigate complex tax issues during international expansion. Their strategic planning saved us significantly in tax liabilities while ensuring full compliance.',
      author: 'Jennifer Lopez',
      title: 'CFO, Global Enterprises Ltd.'
    }
  },
  {
    slug: 'employment-law',
    title: 'Employment Law',
    category: 'business',
    excerpt: 'Comprehensive guidance on workplace laws, policies, and dispute resolution for employers.',
    description: 'Our employment law attorneys help businesses navigate the complex landscape of workplace regulations and employee relations.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: 'Our employment law practice provides comprehensive counsel to employers on workplace laws, policies, and disputes. In today\'s complex regulatory environment, employers face significant challenges in managing their workforce while maintaining compliance with federal, state, and local employment laws. Our attorneys help clients develop effective workplace policies, navigate hiring and termination decisions, address discrimination and harassment issues, and resolve employment disputes. We take a proactive approach to employment law, focusing on prevention and risk management to help clients avoid costly litigation. When disputes arise, we provide strategic representation in administrative proceedings and litigation to protect our clients\' interests.',
    expertise: [
      'Employment Policies & Handbooks',
      'Wage & Hour Compliance',
      'Discrimination & Harassment Claims',
      'Employment Contracts & Severance Agreements',
      'Non-Compete & Confidentiality Agreements',
      'HR Compliance Training',
      'Employment Litigation'
    ],
    benefits: [
      'Reduction of employment-related legal risks',
      'Compliant workplace policies and practices',
      'Strategic guidance on employment decisions',
      'Effective management of workplace disputes',
      'Proactive approach to emerging employment law issues'
    ],
    process: [
      {
        title: 'Compliance Assessment',
        description: 'We review your current employment practices and policies to identify compliance issues and areas for improvement.'
      },
      {
        title: 'Policy Development',
        description: 'We create or update employment policies, handbooks, and agreements to ensure legal compliance and protect your interests.'
      },
      {
        title: 'Training & Implementation',
        description: 'We provide guidance and training to ensure effective implementation of employment policies and practices.'
      },
      {
        title: 'Ongoing Support',
        description: 'We offer continuing counsel on employment decisions and promptly address workplace issues as they arise.'
      }
    ],
    quote: {
      text: 'Their employment law team provided invaluable guidance during a complex restructuring. Their practical advice helped us navigate difficult decisions while minimizing legal exposure and maintaining employee morale.',
      author: 'Robert Johnson',
      title: 'HR Director, National Retail Chain'
    }
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    category: 'personal',
    excerpt: 'Compassionate legal support for family matters, including divorce, custody, and support issues.',
    description: 'Our family law attorneys provide sensitive, strategic counsel during some of life\'s most challenging transitions.',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: 'Our family law practice provides compassionate, strategic counsel for individuals facing divorce, custody disputes, and other family matters. We understand that family law issues are deeply personal and emotionally challenging. Our attorneys combine legal expertise with sensitivity to help clients navigate these difficult transitions while protecting their interests and those of their children. We handle all aspects of divorce, including property division, spousal support, child custody, and child support. Where appropriate, we encourage mediation and collaborative approaches to resolve family disputes amicably. When litigation is necessary, we provide strong, effective advocacy to achieve favorable outcomes.',
    expertise: [
      'Divorce & Legal Separation',
      'Child Custody & Visitation',
      'Child Support & Spousal Support',
      'Property Division',
      'Prenuptial & Postnuptial Agreements',
      'Domestic Violence Protection',
      'Adoption & Surrogacy'
    ],
    benefits: [
      'Compassionate guidance through emotionally challenging situations',
      'Strategic protection of your financial interests and parental rights',
      'Exploration of amicable resolution options when appropriate',
      'Strong advocacy when litigation is necessary',
      'Focus on long-term family wellbeing, especially for children'
    ],
    process: [
      {
        title: 'Initial Consultation',
        description: 'We discuss your situation in detail, explain your legal options, and address your immediate concerns.'
      },
      {
        title: 'Strategy Development',
        description: 'We create a customized legal strategy based on your specific circumstances and goals.'
      },
      {
        title: 'Negotiation & Resolution',
        description: 'We pursue resolution through negotiation, mediation, or collaborative law when possible.'
      },
      {
        title: 'Litigation',
        description: 'When necessary, we represent your interests vigorously in court to achieve a favorable outcome.'
      }
    ],
    quote: {
      text: 'During my divorce, my attorney provided not only exceptional legal representation but also the emotional support I needed during a difficult time. Their guidance helped me secure a fair settlement and custody arrangement that prioritized my children\'s wellbeing.',
      author: 'Sarah Mitchell',
      title: 'Family Law Client'
    }
  },
  {
    slug: 'estate-planning',
    title: 'Estate Planning',
    category: 'personal',
    excerpt: 'Customized estate plans to protect your assets, provide for loved ones, and secure your legacy.',
    description: 'Our estate planning attorneys help clients create comprehensive plans that reflect their wishes and protect their families.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: 'Our estate planning practice helps clients create comprehensive plans to protect their assets, provide for loved ones, and establish their legacy. Effective estate planning is important for everyone, regardless of wealth or family circumstances. Our attorneys work closely with clients to understand their unique situations and develop personalized estate plans that address their specific concerns and goals. We assist with wills, trusts, powers of attorney, healthcare directives, and other essential documents. For clients with significant assets or complex family situations, we provide sophisticated planning strategies to minimize taxes, protect assets, and ensure efficient transfer of wealth to future generations.',
    expertise: [
      'Wills & Living Trusts',
      'Powers of Attorney',
      'Healthcare Directives',
      'Asset Protection Planning',
      'Business Succession Planning',
      'Special Needs Planning',
      'Probate & Trust Administration'
    ],
    benefits: [
      'Peace of mind knowing your wishes will be honored',
      'Protection for your loved ones and assets',
      'Minimization of taxes and probate expenses',
      'Customized planning for your unique circumstances',
      'Regular updates to reflect changes in laws and your situation'
    ],
    process: [
      {
        title: 'Initial Assessment',
        description: 'We discuss your family situation, assets, and goals to understand your estate planning needs.'
      },
      {
        title: 'Plan Development',
        description: 'We create a customized estate plan with appropriate documents and strategies to meet your objectives.'
      },
      {
        title: 'Implementation',
        description: 'We prepare all necessary documents and assist with asset titling and beneficiary designations.'
      },
      {
        title: 'Periodic Review',
        description: 'We recommend regular reviews to ensure your estate plan remains current with changes in laws and your life circumstances.'
      }
    ],
    quote: {
      text: 'The estate planning team took the time to understand our family\'s unique needs and created a comprehensive plan that gave us peace of mind. Their clear explanations made complex concepts accessible and helped us make informed decisions about our legacy.',
      author: 'James and Maria Rodriguez',
      title: 'Estate Planning Clients'
    }
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    category: 'personal',
    excerpt: 'Legal guidance for residential and commercial real estate transactions and disputes.',
    description: 'Our real estate attorneys represent buyers, sellers, developers, and property owners in all aspects of real estate law.',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: 'Our real estate practice provides comprehensive legal services for residential and commercial real estate matters. We represent buyers, sellers, developers, landlords, tenants, and lenders in transactions and disputes involving all types of real property. Our attorneys handle real estate purchases and sales, leasing, financing, development, and land use issues. We conduct thorough due diligence, draft and review contracts, resolve title issues, and ensure smooth closings. For property owners facing disputes, we provide effective representation in litigation involving boundary disputes, easements, construction defects, and other real estate matters. Our team combines real estate expertise with business acumen to help clients achieve their property-related goals.',
    expertise: [
      'Residential & Commercial Transactions',
      'Property Development',
      'Commercial Leasing',
      'Construction Contracts & Disputes',
      'Title Issues & Due Diligence',
      'Land Use & Zoning',
      'Real Estate Litigation'
    ],
    benefits: [
      'Protection of your interests in real estate transactions',
      'Thorough due diligence to identify potential issues',
      'Clear contracts that minimize future disputes',
      'Efficient resolution of real estate conflicts',
      'Strategic guidance on real estate investments and development'
    ],
    process: [
      {
        title: 'Transaction Analysis',
        description: 'We review the proposed transaction, identify potential issues, and develop a strategy to protect your interests.'
      },
      {
        title: 'Due Diligence',
        description: 'We conduct thorough research on the property, including title examination, survey review, and disclosure analysis.'
      },
      {
        title: 'Documentation',
        description: 'We draft, review, and negotiate contracts and other documents essential to the transaction.'
      },
      {
        title: 'Closing & Follow-up',
        description: 'We manage the closing process and address any post-closing matters that may arise.'
      }
    ],
    quote: {
      text: 'Their real estate team\'s expertise was invaluable during our commercial property acquisition. They identified potential issues during due diligence, negotiated favorable contract terms, and ensured a smooth closing process.',
      author: 'Thomas Wilson',
      title: 'Commercial Real Estate Investor'
    }
  },
  {
    slug: 'personal-injury',
    title: 'Personal Injury',
    category: 'personal',
    excerpt: 'Dedicated representation for individuals injured due to negligence, seeking fair compensation.',
    description: 'Our personal injury attorneys fight for the rights of injured clients to secure the compensation they deserve.',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: 'Our personal injury practice is dedicated to helping injured individuals and their families recover compensation for damages caused by others\' negligence. We handle a wide range of personal injury cases, including car accidents, slip and falls, medical malpractice, product liability, and workplace injuries. Our attorneys work tirelessly to build strong cases through thorough investigation, expert consultation, and compelling presentation of evidence. We negotiate aggressively with insurance companies to obtain fair settlements and, when necessary, advocate powerfully in court to secure just compensation. Throughout the process, we provide compassionate support to clients dealing with physical injuries, emotional trauma, and financial hardship resulting from accidents.',
    expertise: [
      'Auto & Motorcycle Accidents',
      'Slip & Fall Injuries',
      'Medical Malpractice',
      'Product Liability',
      'Workplace Injuries',
      'Wrongful Death',
      'Insurance Claims & Disputes'
    ],
    benefits: [
      'No fees unless we recover compensation for you',
      'Thorough investigation of your accident and injuries',
      'Access to medical and technical experts to strengthen your case',
      'Strong negotiation with insurance companies',
      'Dedicated advocacy in court when necessary'
    ],
    process: [
      {
        title: 'Case Evaluation',
        description: 'We assess the circumstances of your injury, liability issues, and potential compensation.'
      },
      {
        title: 'Investigation',
        description: 'We gather evidence, interview witnesses, consult experts, and document your damages.'
      },
      {
        title: 'Claim Submission & Negotiation',
        description: 'We prepare and submit insurance claims and negotiate for fair settlement offers.'
      },
      {
        title: 'Litigation',
        description: 'If a fair settlement cannot be reached, we file a lawsuit and advocate for you in court.'
      }
    ],
    quote: {
      text: 'After my car accident, I was overwhelmed with medical bills and unable to work. My attorney fought tirelessly for my rights and secured a settlement that covered all my expenses and provided financial security during my recovery.',
      author: 'Emily Johnson',
      title: 'Personal Injury Client'
    }
  },
  {
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    category: 'personal',
    excerpt: 'Vigorous defense against criminal charges to protect your rights, freedom, and future.',
    description: 'Our criminal defense attorneys provide strategic representation for clients facing misdemeanor and felony charges.',
    imageUrl: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false,
    content: 'Our criminal defense practice provides strategic, aggressive representation for individuals facing criminal charges. We handle a wide range of cases, from misdemeanors to serious felonies, at both state and federal levels. Our defense attorneys have extensive experience in all phases of criminal proceedings, from pre-arrest investigations through trial and appeal. We conduct thorough case analysis, challenge evidence, negotiate with prosecutors, and present compelling defenses in court. We understand that a criminal charge can have devastating consequences for your freedom, reputation, and future opportunities. That\'s why we fight tirelessly to protect your rights and achieve the best possible outcome in your case.',
    expertise: [
      'DUI & Traffic Offenses',
      'Drug Crimes',
      'White Collar Crimes',
      'Assault & Violent Crimes',
      'Theft & Property Crimes',
      'Federal Criminal Defense',
      'Appeals & Post-Conviction Relief'
    ],
    benefits: [
      'Strategic defense tailored to your specific case',
      'Protection of your constitutional rights throughout the process',
      'Thorough investigation and evidence analysis',
      'Skilled negotiation for dismissals, reduced charges, or favorable pleas',
      'Powerful advocacy at trial when necessary'
    ],
    process: [
      {
        title: 'Case Analysis',
        description: 'We review the charges, evidence, and procedures in your case to identify strengths and weaknesses.'
      },
      {
        title: 'Defense Strategy',
        description: 'We develop a customized defense strategy based on the facts and legal issues in your case.'
      },
      {
        title: 'Negotiation',
        description: 'When appropriate, we negotiate with prosecutors for dismissals, reduced charges, or favorable plea arrangements.'
      },
      {
        title: 'Trial Representation',
        description: 'If your case goes to trial, we provide vigorous representation to challenge the prosecution\'s case and present your defense.'
      }
    ],
    quote: {
      text: 'Facing criminal charges was the most frightening experience of my life. My attorney provided not only exceptional legal representation but also the support and guidance I needed during a difficult time. Thanks to their efforts, my charges were ultimately dismissed.',
      author: 'Marcus Thompson',
      title: 'Criminal Defense Client'
    }
  }
];
