// // import React from 'react';

// // const EvidenceSection = () => {
// //   return (
// //     <section className="bg-white py-12 px-6 md:px-12 lg:px-24" id="kaiser-evidence">
// //       <div className="max-w-5xl mx-auto">
// //         <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
// //           🧪 Real-World Evidence: 20-Year Screening Success
// //         </h2>
// //         <p className="text-lg text-center text-gray-600 mb-10">
// //           One of the world’s strongest validations for national CRC screening comes from the U.S.
// //         </p>

// //         <div className="bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md mb-10">
// //           <h3 className="text-xl font-semibold text-gray-800 mb-4">
// //             Kaiser Permanente’s 20-Year CRC Screening Program
// //           </h3>
// //           <p className="text-gray-700 mb-6">
// //             A landmark study by Kaiser Permanente Northern California demonstrated the profound impact
// //             of organized, population-wide CRC screening:
// //           </p>
// //           <ul className="list-disc pl-6 text-gray-700 space-y-2">
// //             <li><strong>Screening participation</strong> rose from 37% to over 80%</li>
// //             <li><strong>CRC incidence</strong> dropped by approximately 30%</li>
// //             <li><strong>CRC mortality</strong> fell by nearly 50%</li>
// //             <li>All outcomes achieved through non-invasive testing and timely colonoscopy follow-up</li>
// //           </ul>
// //           <p className="mt-6 text-gray-700">
// //             These results confirm that when screening is systematic and widely adopted,
// //             colorectal cancer deaths can be dramatically reduced at the national level.
// //           </p>
// //         </div>

// //         <div className="bg-blue-50 rounded-2xl p-6 md:p-10 shadow-md">
// //           <h3 className="text-xl font-semibold text-blue-900 mb-4">
// //             🇸🇬 Singapore’s Opportunity: Go Further, Sooner
// //           </h3>
// //           <p className="text-blue-800 mb-4">
// //             Project COLONAiVE™ builds upon this proven foundation — and advances it with:
// //           </p>
// //           <ul className="list-disc pl-6 text-blue-800 space-y-2">
// //             <li>More sensitive, blood-based screening options</li>
// //             <li>Clinician-led coordination across GPs, labs, and specialists</li>
// //             <li>Digital pairing tools and real-time triaging</li>
// //             <li>Alignment with Healthier SG’s national preventive health strategy</li>
// //           </ul>
// //           <p className="mt-6 text-blue-900 font-medium">
// //             With the right coordination, Singapore can achieve — and surpass — the outcomes seen in the U.S.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default EvidenceSection;






























// import React from 'react';

// const EvidenceSection = () => {
//   // Stats data for the Kaiser study
//   const stats = [
//     { value: "80%+", label: "Screening Participation", originalValue: "37%" },
//     { value: "30%", label: "Reduction in CRC Incidence", prefix: "↓" },
//     { value: "50%", label: "Reduction in CRC Mortality", prefix: "↓" },
//   ];
  
//   return (
//     <section 
//       className="py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden " 
//       id="kaiser-evidence"
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#006ba6]/10 to-transparent"></div>
//         <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#006ba6]/5 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#006ba6]/5 blur-3xl"></div>
//       </div>
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Section header */}
//         <div className="text-center mb-12 md:mb-16 bg-[#006ba6] pb-4">
//           <div className="inline-flex items-center px-4 py-1.5 bg-[#006ba6]/10 rounded-full mb-4">
//             <span className="h-2 w-2 rounded-full bg-[#006ba6] mr-2"></span>
//             <span className="text-[#006ba6] text-sm font-medium">CLINICAL EVIDENCE</span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Real-World Evidence: <span className="text-[#006ba6]">20-Year Success</span>
//           </h2>
          
//           <p className="text-white/70 max-w-3xl mx-auto text-lg">
//             One of the world's strongest validations for national CRC screening comes from the U.S.
//           </p>
//         </div>

//         {/* Kaiser Study Card - With modern design */}
//         <div className="mb-12 md:mb-16 bg-[#0a1728]/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
//           <div className="p-6 md:p-10">
//             <div className="flex flex-col md:flex-row gap-8 md:gap-12">
//               <div className="md:w-3/5">
//                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
//                   Kaiser Permanente's 20-Year CRC Screening Program
//                 </h3>
                
//                 <p className="text-white/80 mb-6">
//                   A landmark study by Kaiser Permanente Northern California demonstrated the profound impact
//                   of organized, population-wide CRC screening:
//                 </p>
                
//                 <ul className="space-y-3 text-white/80">
//                   <li className="flex items-start">
//                     <span className="text-[#006ba6] mr-2 mt-1">•</span>
//                     <span><strong className="text-white">Screening participation</strong> rose from 37% to over 80%</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#006ba6] mr-2 mt-1">•</span>
//                     <span><strong className="text-white">CRC incidence</strong> dropped by approximately 30%</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#006ba6] mr-2 mt-1">•</span>
//                     <span><strong className="text-white">CRC mortality</strong> fell by nearly 50%</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-[#006ba6] mr-2 mt-1">•</span>
//                     <span>All outcomes achieved through non-invasive testing and timely colonoscopy follow-up</span>
//                   </li>
//                 </ul>
//               </div>
              
//               {/* Stats column */}
//               <div className="md:w-2/5 grid grid-cols-1 gap-4">
//                 {stats.map((stat, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-[#006ba6]/10 rounded-lg p-5 text-center"
//                     style={{ animation: `float 5s infinite ${index * 0.7}s` }}
//                   >
//                     <div className="mb-1 text-white/60 text-sm">{stat.originalValue && `From ${stat.originalValue} to`}</div>
//                     <div className="text-3xl md:text-4xl font-bold text-[#006ba6]">
//                       {stat.prefix}{stat.value}
//                     </div>
//                     <div className="text-white/80">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="mt-8 pt-6 border-t border-white/10">
//               <p className="text-white/80 italic">
//                 These results confirm that when screening is systematic and widely adopted,
//                 colorectal cancer deaths can be dramatically reduced at the national level.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Singapore's Opportunity Card */}
//         <div className="bg-[#0a1728]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-[#006ba6]/20 shadow-lg">
//           <div className="p-6 md:p-10">
//             <div className="flex flex-col lg:flex-row gap-8">
//               <div className="lg:w-1/2">
//                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center">
//                   <span className="text-3xl mr-2">🇸🇬</span> Singapore's Opportunity
//                 </h3>
                
//                 <p className="text-white/90 mb-6">
//                   Project COLONAiVE™ builds upon this proven foundation — and advances it with modern innovations that will help Singapore achieve superior outcomes, faster.
//                 </p>
                
//                 <div className="mt-8">
//                   <a href="#learn-more" className="inline-flex items-center px-6 py-3 bg-[#006ba6] text-white font-medium rounded-lg hover:bg-[#006ba6]/90 transition-all">
//                     Learn About Our Approach
//                     <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
              
//               <div className="lg:w-1/2">
//                 <div className="bg-[#006ba6]/10 rounded-lg p-6">
//                   <h4 className="text-lg font-semibold text-white mb-4">
//                     Enhanced Implementation:
//                   </h4>
//                   <ul className="space-y-3">
//                     <li className="flex items-center text-white/90">
//                       <div className="w-6 h-6 rounded-full bg-[#006ba6]/20 flex items-center justify-center mr-3 flex-shrink-0">
//                         <svg className="w-3 h-3 text-[#006ba6]" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       More sensitive, blood-based screening options
//                     </li>
//                     <li className="flex items-center text-white/90">
//                       <div className="w-6 h-6 rounded-full bg-[#006ba6]/20 flex items-center justify-center mr-3 flex-shrink-0">
//                         <svg className="w-3 h-3 text-[#006ba6]" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       Clinician-led coordination across healthcare providers
//                     </li>
//                     <li className="flex items-center text-white/90">
//                       <div className="w-6 h-6 rounded-full bg-[#006ba6]/20 flex items-center justify-center mr-3 flex-shrink-0">
//                         <svg className="w-3 h-3 text-[#006ba6]" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       Digital pairing tools and real-time triaging
//                     </li>
//                     <li className="flex items-center text-white/90">
//                       <div className="w-6 h-6 rounded-full bg-[#006ba6]/20 flex items-center justify-center mr-3 flex-shrink-0">
//                         <svg className="w-3 h-3 text-[#006ba6]" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       Alignment with Healthier SG's national strategy
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default EvidenceSection;











































// import React from 'react';

// const NationalTargetsSection = () => {
//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-blue-50" id="national-targets">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12 md:mb-16">
//           <div className="inline-flex items-center px-4 py-1.5 bg-blue-100 rounded-full mb-4">
//             <span className="h-2 w-2 rounded-full bg-blue-700 mr-2"></span>
//             <span className="text-blue-700 text-sm font-medium">OUR TARGETS</span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700">
//             10-YEAR NATIONAL TARGETS
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
//           {/* 2030 Goal - Enhanced Card */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//             {/* Top color bar */}
//             <div className="h-2 w-full bg-blue-600"></div>
            
//             <div className="p-6 md:p-8">
//               {/* Header with large goal */}
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center space-x-3">
//                   <span className="text-2xl md:text-3xl">🎯</span>
//                   <h3 className="text-xl md:text-2xl font-bold text-blue-800">2030 Goal</h3>
//                 </div>
//                 <div className="hidden md:block text-4xl font-bold text-blue-100">2030</div>
//               </div>
              
//               {/* Main goal text */}
//               <div className="bg-blue-50 rounded-xl p-4 mb-6">
//                 <p className="text-lg md:text-xl font-bold text-blue-800">
//                   Reach 80% CRC screening rate
//                 </p>
//               </div>
              
//               {/* Details list */}
//               <div>
//                 <p className="text-blue-800 font-medium mb-3">How we'll get there:</p>
//                 <ul className="space-y-3">
//                   <li className="flex items-start">
//                     <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-gray-700">Accelerated uptake through non-invasive, blood-based screening</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-gray-700">Overcomes barriers of stool-based tests — discomfort, stigma, and delay</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-gray-700">Targets younger, working-age adults and high-risk populations</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* 2035 Goal - Enhanced Card */}
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//             {/* Top color bar */}
//             <div className="h-2 w-full bg-blue-700"></div>
            
//             <div className="p-6 md:p-8">
//               {/* Header with large goal */}
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center space-x-3">
//                   <span className="text-2xl md:text-3xl">💪</span>
//                   <h3 className="text-xl md:text-2xl font-bold text-blue-800">2035 Goal</h3>
//                 </div>
//                 <div className="hidden md:block text-4xl font-bold text-blue-100">2035</div>
//               </div>
              
//               {/* Main goal text */}
//               <div className="bg-blue-50 rounded-xl p-4 mb-6">
//                 <p className="text-lg md:text-xl font-bold text-blue-800">
//                   Reduce CRC-related deaths by 80%
//                 </p>
//               </div>
              
//               {/* Details list */}
//               <div>
//                 <p className="text-blue-800 font-medium mb-3">How we'll achieve this:</p>
//                 <ul className="space-y-3">
//                   <li className="flex items-start">
//                     <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-gray-700">Earlier detection through more sensitive blood-based screening tools</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-gray-700">Timely colonoscopy ensures early-stage intervention</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                     <span className="text-gray-700">Outcomes aligned with 20-year U.S. data — with even more ambitious targets</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Visual timeline connector for desktop */}
//         <div className="hidden lg:flex justify-center mt-16">
//           <div className="relative">
//             <div className="absolute left-0 right-0 h-1 bg-blue-300 top-1/2 transform -translate-y-1/2"></div>
//             <div className="flex justify-between items-center relative w-80">
//               <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-blue-100"></div>
//               <div className="w-6 h-6 rounded-full bg-blue-700 border-4 border-blue-100"></div>
//             </div>
//             <div className="flex justify-between mt-2 text-sm font-medium text-blue-800">
//               <span>2030</span>
//               <span>2035</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Call to action */}
//         <div className="mt-12 md:mt-16 text-center">
//           <a
//             href="/join-us"
//             className="inline-flex items-center px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors duration-300"
//           >
//             Join Our Screening Initiative
//             <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NationalTargetsSection;




import React from 'react';
import { motion } from 'framer-motion';

const EvidenceSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden" id="national-targets">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="inline-flex items-center px-5 py-2 bg-blue-100 rounded-full mb-6 shadow-md border border-blue-200"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="h-3 w-3 rounded-full bg-blue-700 mr-3 animate-pulse"></span>
            <span className="text-blue-700 text-sm font-semibold tracking-wider">OUR TARGETS</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 tracking-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            10-YEAR NATIONAL TARGETS
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* 2030 Goal - Enhanced Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.3 } 
            }}
            className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_15px_35px_-15px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.5)]"
          >
            {/* Top color bar with gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
            
            <div className="p-7 md:p-8">
              {/* Header with large goal */}
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl md:text-3xl p-2 bg-blue-50 rounded-full border border-blue-100">🎯</div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-700">2030 Goal</h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="hidden md:flex items-center justify-center text-4xl font-bold text-blue-100"
                >
                  <span className="relative">
                    <span className="absolute -inset-2 bg-blue-50 rounded-full blur-sm"></span>
                    <span className="relative">2030</span>
                  </span>
                </motion.div>
              </div>
              
              {/* Main goal text */}
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 mb-7 border border-blue-100 shadow-inner" 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-lg md:text-xl font-bold text-blue-800 flex items-center">
                  <span className="bg-blue-700 h-6 w-1.5 rounded-full mr-3"></span>
                  Reach 80% CRC screening rate
                </p>
              </motion.div>
              
              {/* Details list */}
              <div>
                <p className="text-blue-800 font-medium mb-4">How we'll get there:</p>
                <ul className="space-y-4">
                  {["Accelerated uptake through non-invasive, blood-based screening", 
                    "Overcomes barriers of stool-based tests — discomfort, stigma, and delay", 
                    "Targets younger, working-age adults and high-risk populations"].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      <motion.svg 
                        className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </motion.svg>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2035 Goal - Enhanced Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              y: -8, 
              transition: { duration: 0.3 } 
            }}
            className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_15px_35px_-15px_rgba(29,78,216,0.3)] hover:shadow-[0_20px_40px_-15px_rgba(29,78,216,0.5)]"
          >
            {/* Top color bar with gradient */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-blue-800"></div>
            
            <div className="p-7 md:p-8">
              {/* Header with large goal */}
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl md:text-3xl p-2 bg-blue-50 rounded-full border border-blue-100">💪</div>
                  <h3 className="text-xl md:text-2xl font-bold text-blue-800">2035 Goal</h3>
                </div>
                <motion.div 
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="hidden md:flex items-center justify-center text-4xl font-bold text-blue-100"
                >
                  <span className="relative">
                    <span className="absolute -inset-2 bg-blue-50 rounded-full blur-sm"></span>
                    <span className="relative">2035</span>
                  </span>
                </motion.div>
              </div>
              
              {/* Main goal text */}
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 mb-7 border border-blue-100 shadow-inner" 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <p className="text-lg md:text-xl font-bold text-blue-800 flex items-center">
                  <span className="bg-blue-800 h-6 w-1.5 rounded-full mr-3"></span>
                  Reduce CRC-related deaths by 80%
                </p>
              </motion.div>
              
              {/* Details list */}
              <div>
                <p className="text-blue-800 font-medium mb-4">How we'll achieve this:</p>
                <ul className="space-y-4">
                  {["Earlier detection through more sensitive blood-based screening tools", 
                    "Timely colonoscopy ensures early-stage intervention", 
                    "Outcomes aligned with 20-year U.S. data — with even more ambitious targets"].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start" 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (0.1 * index), duration: 0.5 }}
                    >
                      <motion.svg 
                        className="w-5 h-5 text-blue-700 mt-1 mr-3 flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </motion.svg>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Visual timeline connector for desktop */}
        <div className="hidden lg:flex justify-center mt-16">
          <div className="relative">
            <motion.div 
              className="absolute left-0 right-0 h-1.5 bg-blue-200 top-1/2 transform -translate-y-1/2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            ></motion.div>
            <div className="flex justify-between items-center relative w-96">
              <motion.div 
                className="w-8 h-8 rounded-full bg-blue-600 border-4 border-blue-100 shadow-lg relative z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, boxShadow: "0 0 0 6px rgba(59, 130, 246, 0.3)" }}
              >
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </motion.div>
              <motion.div 
                className="w-8 h-8 rounded-full bg-blue-700 border-4 border-blue-100 shadow-lg relative z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, boxShadow: "0 0 0 6px rgba(30, 64, 175, 0.3)" }}
              >
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                />
              </motion.div>
            </div>
            <div className="flex justify-between mt-3 text-sm font-medium text-blue-800 w-96">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >2030</motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
              >2035</motion.span>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="/join-us"
            className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Join Our Screening Initiative</span>
            <motion.svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default EvidenceSection;

