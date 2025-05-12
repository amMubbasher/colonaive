// // src/components/PillarsSection.tsx

// import React from "react";
// import PublicAwarenessImg from "../assets/images/pillars/public-awareness.jpg";
// import ClinicianEngagementImg from "../assets/images/pillars/clinician-engagement.jpg";
// import PolicyAlignmentImg from "../assets/images/pillars/policy-alignment.jpg";
// import CorporateCSRImg from "../assets/images/pillars/corporate-csr.jpg";
// import PatientEducationImg from "../assets/images/pillars/patient-education.jpg";

// const pillars = [
//   {
//     title: "Public Awareness",
//     label: "RID-CRC PUB™",
//     image: PublicAwarenessImg,
//   },
//   {
//     title: "Clinician Engagement",
//     label: "RID-CRC SGP™",
//     image: ClinicianEngagementImg,
//   },
//   {
//     title: "Policy Alignment",
//     label: "RID-CRC GOV™",
//     image: PolicyAlignmentImg,
//   },
//   {
//     title: "Corporate CSR",
//     label: "RID-CRC CSR™",
//     image: CorporateCSRImg,
//   },
//   {
//     title: "Patient Education",
//     label: "RID-CRC EDU™",
//     image: PatientEducationImg,
//   },
// ];

// const PillarsSection = () => {
//   return (
//     <section className="bg-sky-50 py-20 px-6" id="pillars">
//       <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-700 mb-12">
//         THE 5 PILLARS OF PROJECT <span className="text-teal-600">COLONAiVE™</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
//         {pillars.map((pillar, index) => (
//           <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl">
//             <img src={pillar.image} alt={pillar.title} className="w-full h-40 object-cover" />
//             <div className="p-4 text-center">
//               <p className="text-sm text-gray-500 font-semibold">{pillar.label}</p>
//               <p className="text-base font-bold text-gray-800 mt-1">{pillar.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PillarsSection;































// src/components/PillarsSection.tsx

// src/components/PillarsSection.tsx

// src/components/PillarsSection.tsx

import React from "react";
import { motion } from "framer-motion";
import PublicAwarenessImg from "../assets/images/pillars/public-awareness.jpg";
import ClinicianEngagementImg from "../assets/images/pillars/clinician-engagement.jpg";
import PolicyAlignmentImg from "../assets/images/pillars/policy-alignment.jpg";
import CorporateCSRImg from "../assets/images/pillars/corporate-csr.jpg";
import PatientEducationImg from "../assets/images/pillars/patient-education.jpg";

const pillars = [
  {
    title: "Public Awareness",
    label: "RID-CRC PUB™",
    image: PublicAwarenessImg,
    description: "Raising awareness about colorectal cancer screening importance through national campaigns.",
  },
  {
    title: "Clinician Engagement",
    label: "RID-CRC SGP™",
    image: ClinicianEngagementImg,
    description: "Empowering healthcare providers with resources and education for patient support.",
  },
  {
    title: "Policy Alignment",
    label: "RID-CRC GOV™",
    image: PolicyAlignmentImg,
    description: "Working with governing bodies to optimize screening protocols and accessibility.",
  },
  {
    title: "Corporate CSR",
    label: "RID-CRC CSR™",
    image: CorporateCSRImg,
    description: "Engaging corporations to champion employee health initiatives and awareness programs.",
  },
  {
    title: "Patient Education",
    label: "RID-CRC EDU™",
    image: PatientEducationImg,
    description: "Providing patients with clear information for informed healthcare decisions.",
  },
];

const PillarsSection = () => {
  return (
    <section className="relative py-24 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#004f8c] to-[#102035]" id="pillars">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 bg-[#25D0B1]/5"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#25D0B1]/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#25D0B1]/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-24 bg-[#25D0B1]/5"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#25D0B1]/10 text-[#25D0B1] text-sm font-medium mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              animation: "pulse 5s infinite"
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#25D0B1] mr-2"></span>
            <span>OUR STRATEGIC FRAMEWORK</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            THE 5 PILLARS OF PROJECT <span className="text-[#25D0B1]">COLONAiVE™</span>
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-[#25D0B1] mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="max-w-3xl mx-auto text-white/70 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our comprehensive approach combines these strategic pillars to effectively combat colorectal cancer nationwide.
          </motion.p>
        </div>

        {/* Featured Pillar - Hero Style */}
        <motion.div 
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-auto overflow-hidden">
                <img 
                  src={pillars[0].image} 
                  alt={pillars[0].title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#004f8c]/80 via-[#004f8c]/60 to-transparent lg:via-transparent"></div>
                <div className="absolute top-6 left-6 bg-[#25D0B1] text-[#004f8c] text-xs font-bold px-3 py-1.5 rounded">
                  {pillars[0].label}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-10 lg:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {pillars[0].title}
                </h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {pillars[0].description} Our initiatives create widespread public discourse on colorectal cancer prevention, empowering individuals to take proactive steps towards early screening and healthy lifestyle choices.
                </p>
                <a href="#learn-more" className="inline-flex items-center text-[#25D0B1] font-medium group">
                  Learn more about this pillar
                  <svg 
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    style={{
                      animation: "moveArrow 5s infinite"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining Pillars - Responsive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
          {pillars.slice(1).map((pillar, index) => (
            <motion.div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#25D0B1]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              style={{
                animation: `float 5s infinite ${index * 0.8}s`
              }}
            >
              <div className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102035] via-[#102035]/60 to-transparent"></div>
                  
                  {/* Animated accent line */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 bg-[#25D0B1]"
                    style={{
                      width: "50%",
                      animation: `lineWidth 5s infinite ${index * 0.5}s`
                    }}
                  ></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#25D0B1]/20 backdrop-blur-sm text-[#25D0B1] text-xs font-medium px-2.5 py-1 rounded">
                    {pillar.label}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#25D0B1] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70 mb-6 flex-grow">{pillar.description}</p>
                  
                  <div className="pt-4 mt-auto border-t border-white/10">
                    <a href="#learn-more" className="text-[#25D0B1] text-sm font-medium flex items-center">
                      Explore this pillar
                      <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a 
            href="/explore-pillars" 
            className="inline-flex items-center bg-[#25D0B1] hover:bg-[#25D0B1]/90 text-[#004f8c] font-bold py-3.5 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-[#25D0B1]/20 hover:shadow-xl hover:-translate-y-1"
          >
            Explore All Five Pillars
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes lineWidth {
          0%, 100% { width: 30%; opacity: 0.7; }
          50% { width: 70%; opacity: 1; }
        }
        
        @keyframes moveArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
};

export default PillarsSection;
