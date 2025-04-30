/**
 * Structured data for smart chat suggestions
 * These suggestions are organized by service category and include predefined responses
 */

interface SuggestionCategory {
  category: string; 
  icon: string;   // Material icon name
  suggestions: Suggestion[];
}

export interface Suggestion {
  id: string;
  text: string;
  response: string[] | string;
}

// General catchall suggestion for unmatched queries
export const defaultResponse = [
  "I'm not sure I understand your question completely. Could you please provide more details?",
  "For personalized assistance, you may want to continue this conversation on WhatsApp or schedule a consultation.",
  "Our legal experts would be happy to address your specific concerns during a consultation.",
  "Would you like me to help you schedule a call with one of our attorneys?"
];

// Smart suggestions organized by legal service category
export const suggestionCategories: SuggestionCategory[] = [
  {
    category: "General Inquiries",
    icon: "info",
    suggestions: [
      {
        id: "general-1",
        text: "What services do you offer?",
        response: [
          "We offer a comprehensive range of legal services including: Corporate Law, Family Law, Criminal Defense, Estate Planning, Intellectual Property, Real Estate Law, Immigration Law, and more.",
          "Is there a specific area of law you're interested in learning more about?"
        ]
      },
      {
        id: "general-2",
        text: "How can I schedule a consultation?",
        response: [
          "You can schedule a consultation in several ways:",
          "1. Call our office at +91 9756188580",
          "2. Email us at contact@nadeemchauhan.com",
          "3. Use our website contact form",
          "4. Continue this conversation on WhatsApp",
          "What works best for you?"
        ]
      },
      {
        id: "general-3",
        text: "What are your fees?",
        response: [
          "Our fees vary depending on the nature and complexity of your legal matter.",
          "We offer both hourly rates and flat fees for certain services. We're committed to transparency in our billing practices.",
          "Would you like to discuss your specific situation so we can provide a tailored fee estimate?"
        ]
      },
      {
        id: "general-4",
        text: "Do you offer free consultations?",
        response: "We offer a complimentary 15-minute initial phone consultation to discuss your legal needs and determine if our services are a good fit for your situation."
      },
      {
        id: "general-5",
        text: "Where is your office located?",
        response: "Our main office is located at 1234 Legal Avenue, Suite 500, New York, NY 10001. We also offer virtual consultations for clients who prefer to meet remotely."
      },
      {
        id: "general-6",
        text: "What are your operating hours?",
        response: "Our regular office hours are Monday through Friday, 9:00 AM to 6:00 PM. We may accommodate meetings outside these hours by special arrangement."
      },
      {
        id: "general-7",
        text: "Do you handle urgent legal matters?",
        response: "Yes, we understand that some legal matters require immediate attention. For urgent issues, please call our office directly at +91 9756188580."
      },
      {
        id: "general-8",
        text: "What languages do you speak?",
        response: "Our team includes attorneys and staff who speak English, Hindi, and several other languages to better serve our diverse clientele."
      },
      {
        id: "general-9",
        text: "How experienced are your attorneys?",
        response: "Our legal team has over 25 years of combined experience across various practice areas. Each attorney specializes in specific areas of law to provide expert legal representation."
      },
      {
        id: "general-10",
        text: "Can I speak with a specific attorney?",
        response: "Yes, you can request to speak with a specific attorney. Please let us know which attorney you'd like to meet with when scheduling your consultation."
      }
    ]
  },
  {
    category: "Corporate Law",
    icon: "business",
    suggestions: [
      {
        id: "corporate-1",
        text: "How do I register a new business?",
        response: [
          "Registering a new business involves several steps:",
          "1. Choosing the right business structure (LLC, Corporation, Partnership, etc.)",
          "2. Name registration and availability check",
          "3. Filing formation documents with the appropriate government agency",
          "4. Obtaining necessary licenses and permits",
          "5. Setting up tax accounts",
          "Our corporate team can guide you through the entire process. Would you like to schedule a consultation to discuss your specific business needs?"
        ]
      },
      {
        id: "corporate-2",
        text: "What's the difference between LLC and Corporation?",
        response: [
          "The key differences between LLCs and Corporations are:",
          "• Liability Protection: Both offer personal liability protection",
          "• Taxation: LLCs have pass-through taxation while corporations face double taxation (unless elected as S-Corp)",
          "• Ownership: Corporations have shareholders, while LLCs have members",
          "• Management: Corporations require boards and officers; LLCs are more flexible",
          "• Regulations: Corporations face more formal requirements",
          "The best choice depends on your specific business goals, taxation preferences, and growth plans."
        ]
      },
      {
        id: "corporate-3",
        text: "Do I need a shareholders' agreement?",
        response: "Yes, a shareholders' agreement is highly recommended for any business with multiple owners. It establishes clear rules for ownership rights, decision-making processes, dispute resolution, and exit strategies. This document helps prevent conflicts and provides a roadmap for handling various business situations."
      },
      {
        id: "corporate-4",
        text: "How can I protect my business from legal issues?",
        response: [
          "Protecting your business from legal issues involves:",
          "1. Establishing the right legal structure",
          "2. Having proper contracts and agreements in place",
          "3. Compliance with industry regulations",
          "4. Proper employment practices and documentation",
          "5. Intellectual property protection",
          "6. Regular legal reviews and updates",
          "7. Appropriate insurance coverage",
          "We can help you develop a comprehensive legal protection strategy for your business."
        ]
      },
      {
        id: "corporate-5",
        text: "What contracts does my business need?",
        response: [
          "Essential business contracts typically include:",
          "• Operating agreements or bylaws",
          "• Client/customer agreements",
          "• Vendor/supplier agreements",
          "• Employment contracts",
          "• Confidentiality agreements (NDAs)",
          "• Terms of service and privacy policies",
          "• Commercial leases",
          "The specific contracts you need depend on your business type, industry, and operations. We can help identify and draft the right agreements for your situation."
        ]
      },
      {
        id: "corporate-6",
        text: "How do I handle a business dispute?",
        response: "Business disputes require careful handling. We recommend: 1) Reviewing relevant contracts, 2) Documenting all communications, 3) Considering negotiation or mediation before litigation, 4) Consulting with a business attorney early. Our team can help assess your situation and develop an effective strategy for resolution."
      },
      {
        id: "corporate-7",
        text: "What's involved in buying or selling a business?",
        response: "Buying or selling a business involves due diligence, valuation, structuring the transaction (asset vs. stock sale), preparing/negotiating purchase agreements, handling regulatory approvals, and managing the transition. Our team can guide you through this complex process to protect your interests."
      },
      {
        id: "corporate-8",
        text: "How do I protect my intellectual property?",
        response: "To protect intellectual property, consider: 1) Trademarks for brand names/logos, 2) Patents for inventions, 3) Copyrights for creative works, 4) Trade secret protection, 5) Strong confidentiality agreements. We can help develop a comprehensive IP protection strategy for your business."
      },
      {
        id: "corporate-9",
        text: "What compliance issues should my business address?",
        response: "Compliance requirements vary by industry, but typically include: business licensing, tax regulations, employment laws, data privacy, industry-specific regulations, and corporate governance requirements. We can help identify the specific compliance needs for your business."
      },
      {
        id: "corporate-10",
        text: "How do I handle employee legal issues?",
        response: "Employee legal issues require proper employment documentation, clear policies, consistent application of rules, and compliance with labor laws. Our firm can help with employee handbooks, contracts, dispute resolution, and compliance to minimize employment legal risks."
      }
    ]
  },
  {
    category: "Family Law",
    icon: "family_restroom",
    suggestions: [
      {
        id: "family-1",
        text: "How does the divorce process work?",
        response: [
          "The divorce process typically involves:",
          "1. Filing a petition for dissolution of marriage",
          "2. Financial disclosure and documentation",
          "3. Negotiation of terms (property division, support, custody)",
          "4. Settlement or litigation if agreement can't be reached",
          "5. Final judgment and decree",
          "The timeline and complexity vary based on whether it's contested or uncontested and the specific issues involved. Would you like to discuss your situation in a private consultation?"
        ]
      },
      {
        id: "family-2",
        text: "How is child custody determined?",
        response: "Child custody is determined based on the 'best interests of the child' standard. Factors include: parental ability to provide care, home stability, child's relationship with each parent, child's needs, and sometimes the child's preferences (depending on age). Courts typically favor arrangements that allow meaningful relationships with both parents when possible."
      },
      {
        id: "family-3",
        text: "How is child support calculated?",
        response: "Child support is calculated based on established guidelines that consider: parents' incomes, number of children, parenting time allocation, childcare costs, health insurance, and other child-related expenses. The specific formula varies by jurisdiction. We can provide a more specific estimate based on your situation."
      },
      {
        id: "family-4",
        text: "What is the difference between legal and physical custody?",
        response: "Legal custody involves decision-making authority regarding the child's education, healthcare, religion, etc. Physical custody refers to where the child lives and which parent handles day-to-day care. Parents can share both types of custody (joint) or one parent may have primary custody while the other has visitation rights."
      },
      {
        id: "family-5",
        text: "How do I modify a custody or support order?",
        response: "To modify a custody or support order, you must demonstrate a substantial change in circumstances since the original order. The process involves filing a petition for modification, providing evidence of changed circumstances, and showing that modification serves the child's best interests. The court will then determine if changes are warranted."
      },
      {
        id: "family-6",
        text: "What is a prenuptial agreement?",
        response: "A prenuptial agreement is a contract between prospective spouses made before marriage that outlines how assets, debts, and other financial matters will be handled during marriage and in case of divorce or death. It can protect family businesses, inheritance, and provide clarity about financial responsibilities. Both parties should have independent legal representation when creating a prenup."
      },
      {
        id: "family-7",
        text: "How is marital property divided in divorce?",
        response: "Marital property division depends on whether your jurisdiction follows 'equitable distribution' (fair but not necessarily equal) or 'community property' (50-50 split) principles. Factors include: marriage length, each spouse's financial situation, contributions to the marriage, future needs, and sometimes fault. Separate property (owned before marriage or received as gifts/inheritance) typically remains with the original owner."
      },
      {
        id: "family-8",
        text: "How does the adoption process work?",
        response: "The adoption process varies based on the type (domestic, international, stepparent, etc.) but generally involves: application and screening, home study, matching with a child, legal proceedings to terminate birth parents' rights, placement, post-placement visits, and finalization hearing. Our firm can guide you through this complex but rewarding process."
      },
      {
        id: "family-9",
        text: "What is alimony/spousal support?",
        response: "Alimony (spousal support) is financial assistance paid by one spouse to the other after divorce. It's based on factors like: marriage length, each spouse's earning capacity and financial needs, standard of living during marriage, and contributions to the marriage. It can be temporary, rehabilitative, or permanent depending on circumstances."
      },
      {
        id: "family-10",
        text: "How do I establish paternity?",
        response: "Paternity can be established voluntarily through an acknowledgment form signed by both parents, or involuntarily through court-ordered genetic testing. Establishing paternity grants legal rights and responsibilities, including child support obligations, custody/visitation rights, and the child's rights to benefits, inheritance, and medical history information."
      }
    ]
  },
  {
    category: "Criminal Defense",
    icon: "gavel",
    suggestions: [
      {
        id: "criminal-1",
        text: "What should I do if I'm arrested?",
        response: [
          "If you're arrested:",
          "1. Remain calm and polite, but remember your rights",
          "2. Exercise your right to remain silent - don't make statements without an attorney",
          "3. Request an attorney immediately",
          "4. Don't consent to searches without a warrant",
          "5. Don't discuss your case with anyone except your attorney",
          "6. Contact a family member or friend who can help arrange for legal representation",
          "Time is critical in criminal cases, so securing legal representation quickly is essential."
        ]
      },
      {
        id: "criminal-2",
        text: "What's the difference between a felony and misdemeanor?",
        response: "The main difference between felonies and misdemeanors is severity. Felonies are more serious crimes punishable by imprisonment of more than one year and/or substantial fines. Misdemeanors are less serious offenses typically punishable by less than one year in jail and smaller fines. Felony convictions also carry more significant long-term consequences regarding voting rights, employment, housing, and gun ownership."
      },
      {
        id: "criminal-3",
        text: "How does bail work?",
        response: "Bail is a financial guarantee that you'll return for court appearances. The amount is determined at a bail hearing based on factors like criminal history, flight risk, and charge severity. You can pay the full amount (refunded after case conclusion if you appear) or use a bail bondsman (paying a non-refundable fee, typically 10%). Some defendants may be released on their own recognizance without payment."
      },
      {
        id: "criminal-4",
        text: "What happens during arraignment?",
        response: "During arraignment, which typically occurs shortly after arrest, you're formally informed of the charges against you, advised of your rights, and asked to enter a plea (guilty, not guilty, or no contest). Bail may be set or reviewed, and future court dates are scheduled. This is a critical early stage where having legal representation is important."
      },
      {
        id: "criminal-5",
        text: "Should I accept a plea bargain?",
        response: "Whether to accept a plea bargain depends on your specific case, the evidence against you, the offered terms, and potential outcomes of going to trial. An experienced criminal defense attorney can evaluate the strength of your case, negotiate better terms, and advise whether accepting a plea or proceeding to trial is in your best interest. This decision should never be made without legal counsel."
      },
      {
        id: "criminal-6",
        text: "How can I get charges reduced or dismissed?",
        response: "Potential strategies for charge reduction or dismissal include: challenging evidence collection procedures, identifying constitutional rights violations, questioning witness credibility, providing exculpatory evidence, negotiating with prosecutors, participating in diversion programs, or demonstrating insufficient evidence. An experienced defense attorney can determine the best approach for your specific situation."
      },
      {
        id: "criminal-7",
        text: "What is expungement?",
        response: "Expungement is a legal process that allows certain criminal records to be sealed or erased in the eyes of the law. When a record is expunged, you can legally state you have no conviction in most circumstances. Eligibility varies by jurisdiction but typically depends on the offense type, time elapsed since completion of sentence, and your subsequent record. Not all offenses qualify for expungement."
      },
      {
        id: "criminal-8",
        text: "What should I expect during a criminal trial?",
        response: "A criminal trial typically involves: jury selection, opening statements, prosecution's case presentation, defense cross-examination, defense case presentation, prosecution cross-examination, closing arguments, jury instructions, jury deliberation, and verdict. The prosecution must prove guilt beyond a reasonable doubt. Trial preparation and strategy are critical elements where experienced legal representation is essential."
      },
      {
        id: "criminal-9",
        text: "What are my rights when interacting with police?",
        response: "Your key rights when interacting with police include: the right to remain silent (Fifth Amendment), the right to refuse searches without a warrant (Fourth Amendment), the right to an attorney (Sixth Amendment), and freedom from unreasonable detention. You should always be respectful but firm in exercising these rights. State clearly: 'I am exercising my right to remain silent and I want an attorney.'"
      },
      {
        id: "criminal-10",
        text: "Can I appeal a conviction?",
        response: "Yes, you can appeal a conviction, but appeals must be based on legal errors rather than simply disliking the outcome. Potential grounds include: improper evidence admission, jury instruction errors, insufficient evidence, prosecutorial misconduct, or ineffective counsel. Appeals have strict deadlines and procedural requirements, so consulting with an appeals attorney promptly after conviction is crucial."
      }
    ]
  },
  {
    category: "Estate Planning",
    icon: "description",
    suggestions: [
      {
        id: "estate-1",
        text: "Do I need a will?",
        response: [
          "Yes, most adults should have a will, regardless of asset value or family situation. A will allows you to:",
          "• Specify how your assets should be distributed",
          "• Name guardians for minor children",
          "• Appoint an executor to handle your estate",
          "• Potentially minimize family conflicts",
          "Without a will, your assets will be distributed according to state intestacy laws, which may not align with your wishes. We recommend reviewing and updating your will after major life events like marriage, divorce, births, or significant asset changes."
        ]
      },
      {
        id: "estate-2",
        text: "What's the difference between a will and trust?",
        response: "The key differences: A will takes effect after death and goes through probate (public court process), while a trust takes effect immediately and avoids probate (private). Trusts offer more control over how and when assets are distributed, provide incapacity planning, and can include special provisions for complex situations. Wills are simpler and less expensive to create but provide less control and privacy."
      },
      {
        id: "estate-3",
        text: "How do I avoid probate?",
        response: "Common strategies to avoid probate include: establishing a revocable living trust, designating beneficiaries on accounts (retirement, life insurance, etc.), holding property in joint tenancy with right of survivorship, creating payable-on-death accounts, and making lifetime gifts. Each strategy has different implications for control, taxes, and asset protection, so a comprehensive estate plan often uses multiple approaches."
      },
      {
        id: "estate-4",
        text: "What are advance directives?",
        response: "Advance directives are legal documents that specify your healthcare wishes if you become unable to communicate them. They typically include: 1) A living will outlining treatment preferences for end-of-life care, and 2) A healthcare power of attorney appointing someone to make medical decisions for you. These documents ensure your wishes are honored and reduce burden on family members during difficult times."
      },
      {
        id: "estate-5",
        text: "What is a power of attorney?",
        response: "A power of attorney (POA) is a legal document authorizing someone to act on your behalf. A financial POA handles financial and property matters, while a healthcare POA makes medical decisions. POAs can be 'durable' (remains valid if you become incapacitated) or 'springing' (takes effect only upon incapacity). These documents are crucial for incapacity planning and preventing court-appointed guardianship."
      },
      {
        id: "estate-6",
        text: "How do estate taxes work?",
        response: "Estate taxes may apply to assets transferred at death if your estate exceeds certain thresholds. Currently, the federal exemption is quite high ($12.92 million in 2023), so most estates don't owe federal estate tax. However, some states have lower exemption thresholds for their own estate or inheritance taxes. Various planning strategies can help minimize potential estate tax liability while achieving your distribution goals."
      },
      {
        id: "estate-7",
        text: "What happens if I die without a will?",
        response: "Dying without a will (intestate) means your assets will be distributed according to your state's intestacy laws, regardless of your actual wishes. Typically, assets go to your closest relatives in a predetermined order (spouse, children, parents, siblings, etc.). The court will appoint an administrator for your estate and guardians for minor children. This often results in outcomes different from what you might have wanted."
      },
      {
        id: "estate-8",
        text: "How do I choose an executor or trustee?",
        response: "When choosing an executor or trustee, consider: trustworthiness, financial responsibility, organizational skills, availability, geographical proximity, ability to handle family dynamics, and willingness to serve. The person should be comfortable with the responsibilities and able to seek professional help when needed. You can also appoint co-executors/trustees or name professional fiduciaries for complex situations."
      },
      {
        id: "estate-9",
        text: "How often should I update my estate plan?",
        response: "You should review your estate plan every 3-5 years and after major life events such as: marriage, divorce, births, deaths, significant asset changes, business changes, relocating to another state, or major tax law changes. Regular reviews ensure your plan still reflects your wishes and takes advantage of current laws. Minor updates can often be made with simple amendments rather than creating entirely new documents."
      },
      {
        id: "estate-10",
        text: "How do I protect assets for minor children?",
        response: "To protect assets for minor children: 1) Create a trust specifying how and when they receive assets, 2) Name a trustworthy guardian in your will, 3) Consider a separate property guardian if needed, 4) Establish specific distribution terms (education, health, age-based distributions), 5) Name contingent beneficiaries, and 6) Consider life insurance to provide additional support. These measures ensure children's needs are met according to your wishes."
      }
    ]
  },
  {
    category: "Real Estate Law",
    icon: "home",
    suggestions: [
      {
        id: "real-estate-1",
        text: "What should I know before buying property?",
        response: [
          "Before buying property, you should:",
          "1. Get pre-approved for financing",
          "2. Understand all costs beyond the purchase price (taxes, insurance, maintenance, HOA fees)",
          "3. Research the property's title history and any encumbrances",
          "4. Review HOA rules and restrictions if applicable",
          "5. Get professional inspections for condition issues",
          "6. Understand zoning and land use regulations, especially for development plans",
          "7. Have all contracts reviewed by an attorney before signing",
          "8. Verify property boundaries with a survey",
          "Our real estate team can help guide you through this process to avoid costly mistakes."
        ]
      },
      {
        id: "real-estate-2",
        text: "What is title insurance and do I need it?",
        response: "Title insurance protects buyers and lenders against losses from defects in the property title (ownership rights). Unlike other insurance, it's a one-time premium covering past issues like errors in public records, unknown liens, forgery, or undisclosed heirs. It's highly recommended and often required by mortgage lenders, as even thorough title searches can miss hidden problems that could jeopardize your ownership rights."
      },
      {
        id: "real-estate-3",
        text: "What should be included in a real estate contract?",
        response: "A comprehensive real estate contract should include: complete buyer and seller information, accurate property description, purchase price and financing terms, earnest money details, inspection provisions, closing date, possession terms, included/excluded items, title requirements, contingencies (financing, inspection, appraisal), default remedies, and signatures of all parties. Having an attorney review before signing can prevent costly disputes."
      },
      {
        id: "real-estate-4",
        text: "What is a real estate closing?",
        response: "A real estate closing (settlement) is the final step in a property transaction where ownership officially transfers. During closing: final documents are signed, the buyer pays the remaining purchase price and closing costs, the seller receives proceeds, deed and mortgage are recorded, and keys are exchanged. The process is typically facilitated by a closing agent, attorney, or title company depending on local practices."
      },
      {
        id: "real-estate-5",
        text: "How do I handle boundary disputes with neighbors?",
        response: "For boundary disputes: 1) Review property surveys and deed descriptions, 2) Research historical records, 3) Consider getting a new professional survey, 4) Try neighborly discussion or mediation first, 5) Document all encroachments or issues, 6) Consider a boundary agreement if resolution is reached, 7) Consult an attorney about adverse possession claims or needed legal action if informal resolution fails."
      },
      {
        id: "real-estate-6",
        text: "What are easements and how do they affect property?",
        response: "Easements are legal rights allowing someone else to use part of your property for a specific purpose, such as utility lines, shared driveways, or access paths. They can affect property use and value by restricting building areas or requiring access maintenance. Easements typically transfer with property ownership and should be disclosed in property records. An attorney can help understand existing easements or establish new ones properly."
      },
      {
        id: "real-estate-7",
        text: "What should I know about commercial leases?",
        response: "Commercial leases are more complex than residential leases and typically involve: longer terms, significant customization, different expense allocations (triple net, modified gross, full service), use restrictions, build-out provisions, assignment/subletting rights, renewal options, and personal guarantees. Professional negotiation and review are essential as terms are less standardized and can significantly impact business operations and finances."
      },
      {
        id: "real-estate-8",
        text: "How do I evict a tenant?",
        response: "The eviction process requires strict adherence to legal procedures: 1) Valid legal grounds (non-payment, lease violations, etc.), 2) Proper written notice with specific timeframes, 3) Filing court paperwork if tenant doesn't comply, 4) Court hearing, 5) Judgment and writ of possession if successful, 6) Official removal by law enforcement. Self-help methods like changing locks are illegal. The process varies by jurisdiction and property type."
      },
      {
        id: "real-estate-9",
        text: "What is zoning and how does it affect property use?",
        response: "Zoning regulates how property can be used through local ordinances dividing areas into residential, commercial, industrial, or mixed-use zones with specific requirements (building height, density, setbacks, parking, etc.). Zoning affects what you can build and how you can use property. Changing use may require variances, special permits, or rezoning applications through local planning departments, often requiring professional assistance."
      },
      {
        id: "real-estate-10",
        text: "What should I know about property tax assessments?",
        response: "Property tax assessments determine your tax liability based on the assessed property value. Key points: 1) Assessments may not match market value, 2) Jurisdictions use different assessment percentages and rates, 3) You can appeal if you believe the assessment is inaccurate, 4) Tax exemptions may be available (homestead, senior, veteran, etc.), 5) Significant improvements typically increase assessments. An attorney can help with assessment appeals or tax exemption applications."
      }
    ]
  },
  {
    category: "Immigration Law",
    icon: "flight",
    suggestions: [
      {
        id: "immigration-1",
        text: "How do I apply for a visa?",
        response: [
          "Visa application processes vary based on visa type, but generally include:",
          "1. Determining the appropriate visa category for your needs",
          "2. Gathering required documentation and evidence",
          "3. Completing and submitting application forms",
          "4. Paying application fees",
          "5. Attending biometrics appointment (fingerprinting/photos)",
          "6. Potentially attending an interview",
          "7. Waiting for processing and decision",
          "Each visa category has specific requirements and processing times. Our immigration team can help determine the best visa option and guide you through the application process."
        ]
      },
      {
        id: "immigration-2",
        text: "What's the difference between immigrant and non-immigrant visas?",
        response: "Immigrant visas (green cards) are for permanent residence in the country, while non-immigrant visas are temporary for specific purposes (tourism, business, education, work, etc.). Immigrant visas allow indefinite stay with a path to citizenship, while non-immigrant visas have expiration dates and specific activity limitations. Non-immigrant visa holders must demonstrate they don't intend to abandon their home country, unlike immigrant visa applicants."
      },
      {
        id: "immigration-3",
        text: "How can I get a green card?",
        response: [
          "Common paths to obtaining a green card (permanent residence) include:",
          "• Family sponsorship by U.S. citizen or permanent resident relatives",
          "• Employment-based immigration through employer sponsorship",
          "• Investment immigration (EB-5 program)",
          "• Refugee or asylum status",
          "• Diversity visa lottery for eligible countries",
          "• Special immigrant categories (religious workers, juveniles, etc.)",
          "• Humanitarian programs (VAWA, T visa, U visa)",
          "Each pathway has specific eligibility requirements, documentation needs, and processing times. We can help determine your best options based on your situation."
        ]
      },
      {
        id: "immigration-4",
        text: "How long does the immigration process take?",
        response: "Immigration processing times vary significantly based on case type, country of origin, service center workloads, and individual circumstances. Family sponsorship can take 1-20+ years depending on relationship and country. Employment-based cases typically take 1-3 years. Citizenship applications average 12-18 months. These timeframes change regularly, so checking current processing times and consulting with an immigration attorney provides the most accurate estimates for your specific situation."
      },
      {
        id: "immigration-5",
        text: "What documents do I need for immigration applications?",
        response: "Common documents for immigration applications include: valid passport, birth certificate, marriage/divorce certificates, police clearances, financial documentation, educational credentials, employment letters, photos, medical exam results, and application-specific evidence (relationship proof, business documentation, etc.). All foreign-language documents typically require certified translations. An immigration attorney can provide a precise document checklist based on your specific application type."
      },
      {
        id: "immigration-6",
        text: "How do I become a citizen?",
        response: "To become a naturalized citizen, you must: 1) Be a permanent resident (green card holder) for typically 3-5 years, 2) Meet physical presence and continuous residence requirements, 3) Demonstrate good moral character, 4) Pass English language tests (with certain exemptions), 5) Pass a civics examination, 6) Take an oath of allegiance. The process involves filing Form N-400, biometrics, interview, and oath ceremony."
      },
      {
        id: "immigration-7",
        text: "What happens if my visa or immigration application is denied?",
        response: "If your application is denied, options may include: 1) Motion to reconsider/reopen if there's new evidence or legal arguments, 2) Appeal to a higher authority within the immigration system, 3) Reapplying with stronger evidence, 4) Applying for a different visa category, or 5) Seeking waivers for grounds of inadmissibility. The best approach depends on the specific reason for denial. Consulting an immigration attorney promptly is crucial to understand your options."
      },
      {
        id: "immigration-8",
        text: "Can immigration status affect my employment?",
        response: "Yes, immigration status directly impacts employment authorization. Only U.S. citizens, permanent residents, and certain non-immigrants with work authorization can legally work. Working without authorization can lead to serious immigration consequences. Employers must verify work eligibility through the I-9 process. Changing jobs may affect certain visa statuses (like H-1B), and immigration status changes may require updated work authorization documentation."
      },
      {
        id: "immigration-9",
        text: "What should I do if I'm facing deportation?",
        response: "If facing deportation (removal proceedings): 1) Seek immediate legal representation from an experienced immigration attorney, 2) Attend all scheduled court hearings, 3) Gather documentation supporting your case, 4) Explore relief options (asylum, cancellation of removal, adjustment of status, voluntary departure), 5) Consider appealing negative decisions if legally justified. Immigration court proceedings are complex, and having proper legal representation significantly improves outcomes."
      },
      {
        id: "immigration-10",
        text: "How can I check my immigration case status?",
        response: "You can check your immigration case status by: 1) Using USCIS online case status tools with your receipt number, 2) Creating a USCIS online account, 3) Calling the USCIS Contact Center, 4) Scheduling an InfoPass appointment at a USCIS office for complex issues, or 5) Submitting a case inquiry if your case is outside normal processing times. Your immigration attorney can also make inquiries on your behalf."
      }
    ]
  },
  {
    category: "Personal Injury",
    icon: "healing",
    suggestions: [
      {
        id: "injury-1",
        text: "What should I do after an accident?",
        response: [
          "After an accident, you should:",
          "1. Seek medical attention immediately, even for seemingly minor injuries",
          "2. Report the accident to police and obtain a copy of the report",
          "3. Document the scene with photos and gather witness contact information",
          "4. Exchange insurance and contact information with other involved parties",
          "5. Notify your insurance company about the accident",
          "6. Keep detailed records of all medical treatments and expenses",
          "7. Avoid giving statements to other parties' insurance companies",
          "8. Consult with a personal injury attorney before accepting any settlements",
          "Taking these steps helps preserve evidence and protect your legal rights."
        ]
      },
      {
        id: "injury-2",
        text: "How is compensation determined in personal injury cases?",
        response: "Compensation in personal injury cases typically considers: medical expenses (past and future), lost wages and earning capacity, property damage, pain and suffering, emotional distress, loss of enjoyment of life, and sometimes punitive damages for egregious conduct. The amount depends on injury severity, long-term impact, clear liability, insurance coverage limits, and jurisdiction. Every case is unique, and an experienced attorney can provide a more specific evaluation of your potential compensation."
      },
      {
        id: "injury-3",
        text: "How long do I have to file a personal injury claim?",
        response: "The time limit (statute of limitations) for filing a personal injury claim varies by jurisdiction and injury type, typically ranging from 1-6 years from the incident date. Special rules may apply for government entities (often shorter deadlines), minors (extended timeframes), or latent injuries (discovery rule). Missing these deadlines typically bars your claim permanently, so consulting an attorney promptly after an injury is crucial."
      },
      {
        id: "injury-4",
        text: "What is negligence and how does it affect my case?",
        response: "Negligence is the legal basis for most personal injury claims, requiring proof that: 1) The defendant owed you a duty of care, 2) They breached that duty, 3) The breach directly caused your injury, and 4) You suffered actual damages. Some jurisdictions follow comparative negligence (your compensation reduces by your percentage of fault) while others use contributory negligence (no recovery if you're partly at fault)."
      },
      {
        id: "injury-5",
        text: "Should I accept an insurance settlement offer?",
        response: "You should generally not accept an initial insurance settlement offer without attorney review. Early offers are typically low and may not account for future medical needs or complications. Once accepted, you usually cannot seek additional compensation. An attorney can evaluate if the offer adequately covers all damages, negotiate for a fair amount, or advise on litigation if necessary."
      },
      {
        id: "injury-6",
        text: "How do contingency fees work?",
        response: "Contingency fees mean the attorney only gets paid if you win your case, typically taking a percentage (usually 33-40%) of your settlement or award. This arrangement allows access to legal representation without upfront costs. The specific percentage, whether it applies before or after case expenses, and how costs are handled should be clearly outlined in a written fee agreement before representation begins."
      },
      {
        id: "injury-7",
        text: "What is a demand letter?",
        response: "A demand letter is a formal document sent to the at-fault party or their insurance company outlining your case and compensation request. It typically includes: accident details, liability arguments, injury description, treatment summary, damages calculation, and settlement demand with response timeframe. This often initiates settlement negotiations and demonstrates case seriousness. An effective demand letter requires thorough documentation and strategic presentation."
      },
      {
        id: "injury-8",
        text: "Will my personal injury case go to trial?",
        response: "Most personal injury cases (over 90%) settle before trial, but preparing as if trial is possible strengthens your negotiating position. Factors affecting settlement likelihood include: clear liability, damage documentation, insurance coverage adequacy, and reasonableness of both parties. The litigation process includes discovery, depositions, and pretrial motions before reaching actual trial, with settlement possibilities at each stage."
      },
      {
        id: "injury-9",
        text: "What if the accident was partly my fault?",
        response: "If you're partly at fault, the impact depends on your jurisdiction's rules: 1) Pure comparative negligence allows recovery reduced by your fault percentage, 2) Modified comparative negligence permits recovery if your fault is below a threshold (typically 50-51%), 3) Contributory negligence bars recovery if you're even slightly at fault. An attorney can advise how local rules apply to your specific situation."
      },
      {
        id: "injury-10",
        text: "How long does a personal injury lawsuit take?",
        response: "Personal injury cases typically take 1-3 years from filing to resolution, though simple cases may settle in months while complex ones can take several years. Factors affecting timeline include: medical treatment duration, case complexity, court backlog, settlement negotiations, and whether trial is necessary. Your attorney should provide a realistic timeframe based on your specific circumstances and jurisdiction's typical processing times."
      }
    ]
  },
  {
    category: "Employment Law",
    icon: "business_center",
    suggestions: [
      {
        id: "employment-1",
        text: "What constitutes workplace discrimination?",
        response: [
          "Workplace discrimination occurs when an employee or job applicant is treated unfavorably because of protected characteristics including:",
          "• Race, color, or ethnicity",
          "• Gender or sex (including pregnancy)",
          "• Age (40 or older)",
          "• Religion",
          "• National origin",
          "• Disability",
          "• Genetic information",
          "Discrimination can manifest in hiring, firing, promotion, compensation, job assignments, training, benefits, or any other employment terms. Both direct discrimination and practices with disparate impact on protected groups may be illegal under various federal and state laws."
        ]
      },
      {
        id: "employment-2", 
        text: "What is workplace harassment?",
        response: "Workplace harassment is unwelcome conduct based on protected characteristics that creates a hostile, intimidating, or offensive work environment or results in adverse employment action. Sexual harassment includes unwanted sexual advances, requests for sexual favors, or other verbal/physical sexual conduct. For conduct to constitute illegal harassment, it generally must be severe or pervasive, though standards vary by jurisdiction. Employers have legal obligations to prevent and address harassment."
      },
      {
        id: "employment-3",
        text: "What should be in an employment contract?",
        response: "A comprehensive employment contract should include: job title and description, compensation details (salary, bonuses, benefits), work schedule, employment term (at-will or specific duration), confidentiality provisions, intellectual property rights, non-compete/non-solicitation clauses (if applicable), termination conditions, dispute resolution process, and governing law. Having an attorney review before signing helps ensure fair terms and enforceability."
      },
      {
        id: "employment-4",
        text: "What are my rights regarding overtime pay?",
        response: "Under the Fair Labor Standards Act (FLSA), non-exempt employees must receive overtime pay of at least 1.5 times their regular rate for hours worked beyond 40 in a workweek. Certain employees are exempt (executives, professionals, administrators meeting specific criteria). State laws may provide additional protections like daily overtime. Misclassification of exempt status is common, and workers can seek back pay for unpaid overtime within the statute of limitations."
      },
      {
        id: "employment-5",
        text: "Can I be fired without cause?",
        response: "In at-will employment states (most U.S. jurisdictions), employers can generally terminate employment without cause or notice. However, important exceptions exist: 1) Firing cannot violate anti-discrimination laws, 2) Termination cannot be retaliation for protected activities (whistleblowing, exercising legal rights), 3) Employment contracts may require cause, 4) Certain public policy exceptions exist. Wrongful termination claims require showing the firing violated specific legal protections."
      },
      {
        id: "employment-6",
        text: "What are non-compete agreements?",
        response: "Non-compete agreements restrict employees from working for competitors or starting competing businesses for a specified period in a defined geographic area after employment ends. Enforceability varies significantly by state - some enforce reasonable agreements, others severely limit them, and some (like California) generally prohibit them. Enforceability depends on legitimate business interest protection, reasonable time/geographic scope, and consideration provided to the employee."
      },
      {
        id: "employment-7",
        text: "What is FMLA leave?",
        response: "The Family and Medical Leave Act (FMLA) provides eligible employees up to 12 weeks of unpaid, job-protected leave yearly for: serious health conditions, caring for family members with serious health conditions, childbirth/adoption, or military family needs. Eligibility requires: working for a covered employer (50+ employees), 12+ months employment, 1,250+ hours worked in preceding year. Employers must maintain health benefits during leave and restore employees to equivalent positions upon return."
      },
      {
        id: "employment-8",
        text: "What should I do if I experience workplace discrimination?",
        response: "If you experience workplace discrimination: 1) Document all incidents with dates, witnesses, and details, 2) Report through appropriate company channels following policies, 3) Preserve relevant communications and performance reviews, 4) Consult an employment attorney to understand your rights, 5) File with the EEOC or state agency within required timeframes (typically 180-300 days), 6) Consider whether mediation or litigation is appropriate. Taking prompt action preserves legal options."
      },
      {
        id: "employment-9",
        text: "What is wrongful termination?",
        response: "Wrongful termination occurs when employment is ended illegally, including: discrimination based on protected characteristics, retaliation for protected activities (reporting harassment, filing workers' comp, etc.), violation of employment contracts, breach of good faith and fair dealing, or termination contrary to public policy (refusing to commit illegal acts). Remedies may include reinstatement, back pay, front pay, and sometimes punitive damages depending on circumstances and jurisdiction."
      },
      {
        id: "employment-10",
        text: "What are reasonable accommodations for disabilities?",
        response: "Reasonable accommodations are modifications enabling qualified individuals with disabilities to perform essential job functions. Examples include: schedule adjustments, physical workspace modifications, equipment provision, reassignment to vacant positions, or policy exceptions. Employers must provide accommodations unless they cause undue hardship (significant difficulty or expense). The accommodation process should be interactive, with employer and employee collaborating to identify effective solutions."
      }
    ]
  },
  {
    category: "Intellectual Property",
    icon: "copyright",
    suggestions: [
      {
        id: "ip-1",
        text: "What's the difference between patents, trademarks, and copyrights?",
        response: [
          "The main differences between these intellectual property types are:",
          "• Patents protect inventions, processes, and functional designs, lasting 15-20 years depending on type",
          "• Trademarks protect brands, names, logos, and slogans that identify products/services, potentially lasting indefinitely with proper maintenance",
          "• Copyrights protect original creative works (writing, art, music, software), lasting author's life plus 70 years (generally)",
          "• Trade secrets protect confidential business information through security measures rather than registration",
          "Each type has distinct registration processes, protection scopes, and enforcement mechanisms. The right protection depends on what you're trying to safeguard."
        ]
      },
      {
        id: "ip-2",
        text: "How do I protect my business name and logo?",
        response: "To protect your business name and logo: 1) Conduct thorough trademark searches, 2) Use the mark in commerce, 3) Register with the appropriate trademark office (national for broader rights, international for foreign markets), 4) Monitor for infringement, 5) Enforce your rights when necessary. While registration isn't mandatory, it provides significant legal advantages including presumed validity, constructive notice, and access to federal courts and statutory damages."
      },
      {
        id: "ip-3",
        text: "What can be patented?",
        response: "To be patentable, an invention must be: novel (new), non-obvious (not an obvious modification to those skilled in the field), useful (functional and operative), and patent-eligible subject matter (processes, machines, manufactures, compositions of matter). Abstract ideas, natural phenomena, and laws of nature aren't patentable without practical application. Software, business methods, and biotechnology inventions face more complex eligibility analysis, often requiring experienced patent counsel."
      },
      {
        id: "ip-4",
        text: "How do I copyright my work?",
        response: "Copyright protection exists automatically when original work is created and fixed in tangible form. However, registration with the Copyright Office provides important benefits: public record of ownership, legal presumption of validity, ability to sue for infringement, eligibility for statutory damages/attorney fees, and protection against importation of infringing copies. Registration involves submitting application, fee, and deposit copies. For maximum protection, register before publication or within three months after."
      },
      {
        id: "ip-5",
        text: "What is trademark infringement?",
        response: "Trademark infringement occurs when an unauthorized party uses a mark that is identical or confusingly similar to a protected trademark on related goods/services, likely causing consumer confusion about source or affiliation. Factors courts consider include: mark similarity, product/service relatedness, actual confusion evidence, marketing channels, consumer sophistication, and defendant's intent. Remedies include injunctions, damages, profits disgorgement, and sometimes attorney fees."
      },
      {
        id: "ip-6",
        text: "How do I conduct a trademark search?",
        response: "A comprehensive trademark search includes: 1) Federal database searches (USPTO), 2) State trademark registrations, 3) Common law/unregistered uses (business directories, internet searches), 4) Domain names, 5) Social media platforms. While basic searches can be self-conducted, professional searches provide more thorough analysis of potential conflicts, including phonetic equivalents, foreign translations, and visual similarities that could block registration or lead to infringement issues."
      },
      {
        id: "ip-7",
        text: "What is fair use in copyright?",
        response: "Fair use is a copyright doctrine allowing limited use of copyrighted material without permission for purposes like criticism, commentary, news reporting, teaching, scholarship, or research. Courts evaluate four factors: 1) Purpose and character (transformative use), 2) Nature of the copyrighted work, 3) Amount and substantiality used, 4) Effect on potential market. It's a case-by-case determination without clear boundaries, making it advisable to consult legal counsel for specific situations."
      },
      {
        id: "ip-8",
        text: "How do I protect my intellectual property internationally?",
        response: "For international IP protection: 1) Patents: File under Patent Cooperation Treaty (PCT) or directly in each country, 2) Trademarks: File under Madrid Protocol or individually by country, 3) Copyrights: Protection is automatic in Berne Convention countries but registration is recommended in some jurisdictions, 4) Trade secrets: Implement consistent global security measures. International protection requires strategic planning due to territorial nature of IP rights, varying requirements, and different enforcement regimes."
      },
      {
        id: "ip-9",
        text: "What are trade secrets?",
        response: "Trade secrets are confidential business information that provides competitive advantage because it's not generally known. Examples include formulas, processes, customer lists, and business strategies. Unlike patents, trade secrets have no registration system or expiration date but require reasonable secrecy measures. Protection comes through confidentiality agreements, access limitations, and legal remedies for misappropriation. Once publicly disclosed, protection is lost, making security essential."
      },
      {
        id: "ip-10",
        text: "Who owns intellectual property created by employees?",
        response: "Generally, employers own IP created by employees within their employment scope using employer resources under the 'work for hire' doctrine. However, the default rule may change based on: employment agreements, assignment provisions, industry customs, and jurisdictional differences. Independent contractors typically retain IP rights unless contracts specify otherwise. Clear written agreements addressing ownership, usage rights, and post-employment restrictions are essential to prevent disputes."
      }
    ]
  }
];

/**
 * Utility function to search suggestions by keywords
 */
export function findSuggestionsByKeywords(query: string): Suggestion[] {
  const normalizedQuery = query.toLowerCase().trim();
  const keywords = normalizedQuery.split(/\s+/);
  
  // Return 5 most relevant suggestions
  let matchedSuggestions: Array<{ suggestion: Suggestion, score: number }> = [];
  
  // Search through all categories and suggestions
  suggestionCategories.forEach(category => {
    category.suggestions.forEach(suggestion => {
      // Calculate relevance score based on keyword matches
      let score = 0;
      const suggestionText = suggestion.text.toLowerCase();
      
      keywords.forEach(keyword => {
        if (keyword.length < 3) return; // Skip very short words
        
        if (suggestionText.includes(keyword)) {
          score += 1;
          
          // Boost score for exact matches or phrase matches
          if (suggestionText.includes(normalizedQuery)) {
            score += 3;
          }
        }
      });
      
      if (score > 0) {
        matchedSuggestions.push({ suggestion, score });
      }
    });
  });
  
  // Sort by relevance score and take top 5
  return matchedSuggestions
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.suggestion);
}

/**
 * Find suggestions by category
 */
export function findSuggestionsByCategory(category: string): Suggestion[] {
  const categoryData = suggestionCategories.find(
    cat => cat.category.toLowerCase() === category.toLowerCase()
  );
  
  return categoryData ? categoryData.suggestions.slice(0, 5) : [];
}

/**
 * Get all suggestion categories with their icons
 */
export function getAllCategories() {
  return suggestionCategories.map(cat => ({
    category: cat.category,
    icon: cat.icon
  }));
}