// // src/components/CrisisSection.tsx

// import React from "react";
// import TopCancerImg from "../assets/images/crisis/crc-top-cancer.jpg";
// import LowScreeningImg from "../assets/images/crisis/low-screening-rates.jpg";
// import LateDiagnosisImg from "../assets/images/crisis/late-stage-diagnosis.jpg";

// const CrisisSection = () => {
//   return (
//     <section className="bg-gray-100 py-20 px-6" id="crisis">
//       <h2 className="text-center text-3xl md:text-4xl font-extrabold text-red-700 mb-12">
//         THE CURRENT CRISIS WE MUST REVERSE
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {/* Card 1 */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <img src={TopCancerImg} alt="CRC is #1 cancer" className="w-full h-56 object-cover" />
//           <div className="p-6 text-center font-semibold">
//             CRC is Singapore’s <span className="font-bold">#1 cancer</span>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <img src={LowScreeningImg} alt="Low screening rate" className="w-full h-56 object-cover" />
//           <div className="p-6 text-center font-semibold">
//             Sub-optimal screening rate: only <span className="font-bold">38%</span> of eligible adults participate
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <img src={LateDiagnosisImg} alt="Late diagnosis" className="w-full h-56 object-cover" />
//           <div className="p-6 text-center font-semibold">
//             Nearly <span className="font-bold">60%</span> diagnosed late — survival chances drastically reduced
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CrisisSection;















// src/components/CrisisSection.tsx

// import React from "react";
// import { motion } from "framer-motion";
// import TopCancerImg from "../assets/images/crisis/crc-top-cancer.jpg";
// import LowScreeningImg from "../assets/images/crisis/low-screening-rates.jpg";
// import LateDiagnosisImg from "../assets/images/crisis/late-stage-diagnosis.jpg";

// const CrisisSection = () => {
//   const crisisData = [
//     {
//       id: 1,
//       image: TopCancerImg,
//       alt: "CRC is #1 cancer",
//       stat: "#1",
//       description: "CRC is Singapore's top-ranking cancer with increasing prevalence",
//     },
//     {
//       id: 2,
//       image: LowScreeningImg,
//       alt: "Low screening rate",
//       stat: "38%",
//       description: "Only 38% of eligible adults participate in life-saving screening programs",
//     },
//     {
//       id: 3,
//       image: LateDiagnosisImg,
//       alt: "Late diagnosis",
//       stat: "60%",
//       description: "Nearly 60% diagnosed at late stages when treatment options are limited",
//     },
//   ];

//   return (
//     <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white" id="crisis">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div 
//           className="text-center mb-12 md:mb-16"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1e3b]">
//             <span className="block">THE CURRENT CRISIS</span>
//             <span className="block text-[#25D0B1] mt-2">WE MUST REVERSE</span>
//           </h2>
//           <motion.div 
//             className="h-1 w-24 bg-[#25D0B1] mx-auto mt-6"
//             initial={{ width: 0 }}
//             whileInView={{ width: 96 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           />
//         </motion.div>

//         {/* Modern Image Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//           {crisisData.map((item, index) => (
//             <motion.div 
//               key={item.id}
//               className="group relative rounded-xl overflow-hidden shadow-lg h-[420px]"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ y: -5 }}
//             >
//               {/* Full-height background image with overlay */}
//               <div className="absolute inset-0 w-full h-full">
//                 <img 
//                   src={item.image} 
//                   alt={item.alt} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3b]/90 via-[#0b1e3b]/50 to-transparent" />
//               </div>
              
//               {/* Content positioned at bottom of card */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
//                 {/* Statistic Circle */}
//                 <motion.div 
//                   className="w-20 h-20 rounded-full bg-[#25D0B1] flex items-center justify-center shadow-lg mb-4 mx-auto md:mx-0"
//                   initial={{ scale: 0 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ 
//                     type: "spring",
//                     stiffness: 260,
//                     delay: 0.4 + index * 0.2
//                   }}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <span className="text-[#0b1e3b] text-2xl md:text-3xl font-bold">
//                     {item.stat}
//                   </span>
//                 </motion.div>
                
//                 {/* Description text */}
//                 <p className="text-white text-lg md:text-xl font-medium leading-snug mt-4">
//                   {item.description}
//                 </p>
                
//                 {/* Animated underline */}
//                 <motion.div
//                   className="h-0.5 bg-[#25D0B1] mt-4 w-0"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: "100%" }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* Call to Action */}
//         <motion.div 
//           className="mt-16 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8 }}
//         >
//           <p className="text-xl md:text-2xl font-bold text-[#0b1e3b] mb-6">
//             These statistics aren't just numbers—they represent lives that can be saved.
//           </p>
//           <motion.button
//             className="bg-[#25D0B1] hover:bg-[#25D0B1]/90 text-[#0b1e3b] font-medium px-8 py-3 rounded-full shadow-lg flex items-center mx-auto"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Learn How To Get Screened
//             <motion.svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               width="20" 
//               height="20" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               className="ml-2"
//               animate={{ x: [0, 5, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity }}
//             >
//               <path d="M5 12h14"></path>
//               <path d="m12 5 7 7-7 7"></path>
//             </motion.svg>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CrisisSection;




























// src/components/CrisisSection.tsx

// import React from "react";
// import { motion } from "framer-motion";
// import TopCancerImg from "../assets/images/crisis/crc-top-cancer.jpg";
// import LowScreeningImg from "../assets/images/crisis/low-screening-rates.jpg";
// import LateDiagnosisImg from "../assets/images/crisis/late-stage-diagnosis.jpg";

// const CrisisSection = () => {
//   const crisisData = [
//     {
//       id: 1,
//       image: TopCancerImg,
//       alt: "CRC is #1 cancer",
//       stat: "#1",
//       title: "Top-Ranking Cancer",
//       description: "Colorectal cancer is Singapore's most prevalent cancer.",
//     },
//     {
//       id: 2,
//       image: LowScreeningImg,
//       alt: "Low screening rate",
//       stat: "38%",
//       title: "Low Screening Rate",
//       description: "Only 38% of eligible adults participate in life-saving screening programs.",
//     },
//     {
//       id: 3,
//       image: LateDiagnosisImg,
//       alt: "Late diagnosis",
//       stat: "60%",
//       title: "Late-Stage Diagnosis",
//       description: "Nearly 60% diagnosed at late stages when treatment outcomes are significantly worse.",
//     },
//   ];
  
//   // 5-second text animation config
//   const textAnimationConfig = {
//     animate: {
//       color: ["#0b1e3b", "#25D0B1", "#0b1e3b"],
//     },
//     transition: {
//       duration: 5,
//       repeat: Infinity,
//       repeatType: "loop",
//       ease: "easeInOut"
//     }
//   };
  
//   // Staggered text character animation
//   const characterAnimation = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//         repeatType: "loop",
//         repeat: Infinity,
//         duration: 5
//       }
//     }
//   };
  
//   const letterAnimation = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 5
//       }
//     }
//   };
  
//   // Split text into individual characters for animation
//   const splitText = (text) => {
//     return [...text].map((char, i) => (
//       <motion.span 
//         key={i}
//         variants={letterAnimation}
//         style={{ display: "inline-block" }}
//       >
//         {char === " " ? "\u00A0" : char}
//       </motion.span>
//     ));
//   };

//   return (
//     <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white" id="crisis">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header with Text Animation */}
//         <div className="text-center mb-16 md:mb-20">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
//             <motion.span
//               className="text-[#0b1e3b] inline-block"
//               animate={{ 
//                 color: ["#0b1e3b", "#25D0B1", "#0b1e3b"],
//                 textShadow: [
//                   "0 0 0px rgba(37, 208, 177, 0)",
//                   "0 0 10px rgba(37, 208, 177, 0.5)",
//                   "0 0 0px rgba(37, 208, 177, 0)"
//                 ]
//               }}
//               transition={{ 
//                 duration: 5,
//                 repeat: Infinity,
//                 repeatType: "loop"
//               }}
//             >
//               THE CURRENT CRISIS
//             </motion.span>
//             <motion.span 
//               className="block text-[#25D0B1] mt-2"
//               animate={{ 
//                 scale: [1, 1.03, 1],
//                 opacity: [1, 0.8, 1]
//               }}
//               transition={{ 
//                 duration: 5,
//                 repeat: Infinity,
//                 repeatType: "loop"
//               }}
//             >
//               WE MUST REVERSE
//             </motion.span>
//           </h2>
//           <motion.div 
//             className="h-1 w-24 bg-[#0b1e3b] mx-auto mt-6"
//             animate={{ 
//               width: ["0%", "50%", "100%", "50%", "0%"],
//               opacity: [0.6, 1, 0.6]
//             }}
//             transition={{ 
//               duration: 5,
//               repeat: Infinity,
//               repeatType: "loop"
//             }}
//           />
//         </div>

//         {/* Crisis Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
//           {crisisData.map((item, index) => (
//             <motion.div 
//               key={item.id}
//               className="relative overflow-hidden rounded-xl bg-white shadow-lg"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
//             >
//               {/* Card Container */}
//               <div className="flex flex-col h-full rounded-xl overflow-hidden">
//                 {/* Image Container */}
//                 <div className="relative h-60 overflow-hidden">
//                   <img 
//                     src={item.image} 
//                     alt={item.alt} 
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
                  
//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-b from-[#0b1e3b]/20 to-[#0b1e3b]/80">
//                     {/* Stat Circle - With 5-second text animation */}
//                     <div className="absolute bottom-6 right-6 bg-[#25D0B1] rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
//                       <motion.span 
//                         className="text-[#0b1e3b] text-2xl font-bold"
//                         animate={{ 
//                           scale: [1, 1.2, 1],
//                           textShadow: [
//                             "0 0 0px rgba(11, 30, 59, 0)",
//                             "0 0 8px rgba(11, 30, 59, 0.5)",
//                             "0 0 0px rgba(11, 30, 59, 0)"
//                           ]
//                         }}
//                         transition={{ 
//                           duration: 5,
//                           repeat: Infinity,
//                           repeatType: "loop"
//                         }}
//                       >
//                         {item.stat}
//                       </motion.span>
//                     </div>
                    
//                     {/* Title Overlay - With animated text */}
//                     <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-[#0b1e3b] to-transparent">
//                       <motion.h3 
//                         className="text-white font-bold text-xl"
//                         variants={characterAnimation}
//                         initial="hidden"
//                         animate="visible"
//                       >
//                         {splitText(item.title)}
//                       </motion.h3>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Content Area with Animated Text */}
//                 <div className="p-6 bg-white flex-grow">
//                   <motion.p 
//                     className="text-[#0b1e3b] text-base leading-relaxed"
//                     animate={{ 
//                       opacity: [0.8, 1, 0.8]
//                     }}
//                     transition={{ 
//                       duration: 5,
//                       repeat: Infinity,
//                       repeatType: "loop" 
//                     }}
//                   >
//                     {item.description}
//                   </motion.p>
                  
//                   {/* Learn More Link with text animation */}
//                   <motion.div className="mt-4">
//                     <motion.a 
//                       href="#learn-more" 
//                       className="text-[#25D0B1] font-medium inline-flex items-center"
//                       animate={{ 
//                         x: [0, 5, 0],
//                         color: ["#25D0B1", "#0b1e3b", "#25D0B1"]
//                       }}
//                       transition={{ 
//                         duration: 5,
//                         repeat: Infinity,
//                         repeatType: "loop"
//                       }}
//                     >
//                       Learn more
//                       <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M5 12h14"></path>
//                         <path d="m12 5 7 7-7 7"></path>
//                       </svg>
//                     </motion.a>
//                   </motion.div>
//                 </div>
                
//                 {/* Animated bottom line */}
//                 <div className="h-1 bg-[#25D0B1]" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* Call to Action Box with Text Animation */}
//         <motion.div 
//           className="mt-16 md:mt-20 p-8 md:p-10 rounded-xl bg-gradient-to-r from-[#0b1e3b]/5 via-[#0b1e3b]/10 to-[#0b1e3b]/5 text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//         >
//           <motion.h3 
//             className="text-xl md:text-2xl font-bold text-[#0b1e3b] mb-4"
//             animate={{ 
//               color: ["#0b1e3b", "#25D0B1", "#0b1e3b"]
//             }}
//             transition={{ 
//               duration: 5,
//               repeat: Infinity,
//               repeatType: "loop"
//             }}
//           >
//             Statistics are more than numbers—they represent lives we can save.
//           </motion.h3>
          
//           <motion.p 
//             className="text-[#0b1e3b]/80 max-w-2xl mx-auto mb-6"
//             animate={{ 
//               opacity: [0.8, 1, 0.8]
//             }}
//             transition={{ 
//               duration: 5,
//               repeat: Infinity,
//               repeatType: "loop"
//             }}
//           >
//             Early screening can reduce colorectal cancer mortality by up to 60%. Together, we can change these statistics.
//           </motion.p>
          
//           <motion.button
//             className="bg-[#25D0B1] hover:bg-[#20b89c] text-[#0b1e3b] font-medium px-8 py-3 rounded-full shadow-md inline-flex items-center"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             <motion.span
//               animate={{ 
//                 fontWeight: ["500", "700", "500"]
//               }}
//               transition={{ 
//                 duration: 5,
//                 repeat: Infinity,
//                 repeatType: "loop"
//               }}
//             >
//               Learn How To Get Screened
//             </motion.span>
//             <motion.svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               width="18" 
//               height="18" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               className="ml-2"
//               animate={{ x: [0, 4, 0] }}
//               transition={{ 
//                 duration: 5,
//                 repeat: Infinity,
//                 repeatType: "loop" 
//               }}
//             >
//               <path d="M5 12h14"></path>
//               <path d="m12 5 7 7-7 7"></path>
//             </motion.svg>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CrisisSection;






























// import React from "react";
// import { motion } from "framer-motion";
// import TopCancerImg from "../assets/images/crisis/crc-top-cancer.jpg";
// import LowScreeningImg from "../assets/images/crisis/low-screening-rates.jpg";
// import LateDiagnosisImg from "../assets/images/crisis/late-stage-diagnosis.jpg";

// const CrisisSection = () => {
//   const crisisData = [
//     {
//       id: 1,
//       image: TopCancerImg,
//       alt: "CRC is #1 cancer",
//       stat: "#1",
//       title: "Top-Ranking Cancer",
//       description: "Colorectal cancer is Singapore's most prevalent cancer.",
//     },
//     {
//       id: 2,
//       image: LowScreeningImg,
//       alt: "Low screening rate",
//       stat: "38%",
//       title: "Low Screening Rate",
//       description: "Only 38% of eligible adults participate in life-saving screening programs.",
//     },
//     {
//       id: 3,
//       image: LateDiagnosisImg,
//       alt: "Late diagnosis",
//       stat: "60%",
//       title: "Late-Stage Diagnosis",
//       description: "Nearly 60% diagnosed at late stages when treatment outcomes are significantly worse.",
//     },
//   ];

//   return (
//     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafb]" id="crisis">
//       <div className="max-w-7xl mx-auto">
//         {/* Modern Section Header with minimal animation */}
//         <div className="text-center mb-20">
//           <motion.h2 
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="text-[#0b1e3b] block">THE CURRENT CRISIS</span>
//             <span className="text-[#006ba6] block mt-3">WE MUST REVERSE</span>
//           </motion.h2>
//           <div className="h-1 w-24 bg-[#0b1e3b] mx-auto mt-8 mb-6" />
//           <p className="text-[#475569] max-w-2xl mx-auto text-lg">
//             Understanding the facts is the first step toward making meaningful change.
//           </p>
//         </div>

//         {/* Crisis Cards - Modern Layout with Subtle Animation */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {crisisData.map((item, index) => (
//             <motion.div 
//               key={item.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.7, delay: index * 0.2 }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//             >
//               {/* Image with Gradient Overlay */}
//               <div className="relative h-[220px] overflow-hidden">
//                 <img 
//                   src={item.image} 
//                   alt={item.alt} 
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3b] via-[#0b1e3b]/60 to-transparent">
//                   {/* Stat Badge - Modern Style */}
//                   <div className="absolute bottom-4 right-4 bg-[#006ba6] rounded-lg px-4 py-2 shadow-lg">
//                     <span className="text-white text-xl font-bold">
//                       {item.stat}
//                     </span>
//                   </div>
//                 </div>
                
//                 {/* Title with better positioning */}
//                 <h3 className="absolute bottom-4 left-4 text-white font-bold text-2xl max-w-[70%] leading-tight">
//                   {item.title}
//                 </h3>
//               </div>
              
//               {/* Content Area with Improved Spacing */}
//               <div className="p-6 md:p-8">
//                 <p className="text-[#334155] text-base leading-relaxed mb-6">
//                   {item.description}
//                 </p>
                
//                 {/* Learn More Link - Subtle Animation */}
//                 <a 
//                   href="#learn-more" 
//                   className="text-[#006ba6] font-semibold inline-flex items-center group transition-all"
//                 >
//                   Learn more
//                   <svg 
//                     className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" 
//                     viewBox="0 0 24 24" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     strokeWidth="2" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round"
//                   >
//                     <path d="M5 12h14"></path>
//                     <path d="m12 5 7 7-7 7"></path>
//                   </svg>
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         {/* Call to Action Box - Modern Design */}
//         <motion.div 
//           className="mt-20 p-12 rounded-2xl bg-gradient-to-br from-[#0b1e3b] to-[#102a4c] text-center shadow-xl"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
//             Statistics are more than numbers—they represent lives we can save.
//           </h3>
          
//           <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
//             Early screening can reduce colorectal cancer mortality by up to 60%. Together, we can change these statistics.
//           </p>
          
//           <motion.button
//             className="bg-[#006ba6] hover:bg-[#005d91] text-white font-medium px-10 py-4 rounded-xl shadow-md inline-flex items-center"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             Learn How To Get Screened
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               width="20" 
//               height="20" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               className="ml-2"
//             >
//               <path d="M5 12h14"></path>
//               <path d="m12 5 7 7-7 7"></path>
//             </svg>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CrisisSection;























import React from "react";
import { motion } from "framer-motion";
import TopCancerImg from "../assets/images/crisis/crc-top-cancer.jpg";
import LowScreeningImg from "../assets/images/crisis/low-screening-rates.jpg";
import LateDiagnosisImg from "../assets/images/crisis/late-stage-diagnosis.jpg";

const CrisisSection = () => {
  const crisisData = [
    {
      id: 1,
      image: TopCancerImg,
      alt: "CRC is #1 cancer",
      stat: "#1",
      title: "Top-Ranking Cancer",
      description: "Colorectal cancer is Singapore's most prevalent cancer.",
    },
    {
      id: 2,
      image: LowScreeningImg,
      alt: "Low screening rate",
      stat: "38%",
      title: "Low Screening Rate",
      description: "Only 38% of eligible adults participate in life-saving screening programs.",
    },
    {
      id: 3,
      image: LateDiagnosisImg,
      alt: "Late diagnosis",
      stat: "60%",
      title: "Late-Stage Diagnosis",
      description: "Nearly 60% diagnosed at late stages when treatment outcomes are significantly worse.",
    },
  ];

  return (
    <section className="py-28 px-6 sm:px-8 lg:px-12 bg-[#f8fafb]" id="crisis">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced header with better visual hierarchy */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.span
            className="uppercase tracking-widest text-sm font-bold text-[#006ba6] mb-5 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Understanding the facts
          </motion.span>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#0b1e3b] block mb-4">THE CURRENT CRISIS</span>
            <span className="text-[#006ba6] block">WE MUST REVERSE</span>
          </motion.h2>
          
          <div className="flex items-center justify-center mt-10 mb-8">
            <div className="h-[3px] w-12 bg-[#0b1e3b]"></div>
            <div className="h-[3px] w-24 bg-[#006ba6] mx-3"></div>
            <div className="h-[3px] w-12 bg-[#0b1e3b]"></div>
          </div>
          
          <p className="text-[#475569] text-lg max-w-2xl mx-auto leading-relaxed">
            Awareness is the first step toward action. These statistics represent real lives that can be saved with proper screening and early intervention.
          </p>
        </div>

        {/* Crisis Cards - Improved grid layout using rule of thirds */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {crisisData.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`md:col-span-4 overflow-hidden ${
                index === 1 ? "md:translate-y-12" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Improved card design with better proportions */}
              <div className="bg-white h-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col">
                {/* Image with better gradient overlay */}
                <div className="relative h-[240px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1e3b] via-[#0b1e3b]/70 to-transparent">
                    {/* Enhanced stat badge */}
                    <div className="absolute bottom-5 right-5 bg-[#006ba6] rounded-lg px-5 py-3 shadow-lg">
                      <span className="text-white text-2xl font-bold">
                        {item.stat}
                      </span>
                    </div>
                  </div>
                  
                  {/* Improved title positioning with better contrast */}
                  <h3 className="absolute bottom-5 left-5 text-white font-bold text-2xl max-w-[65%] leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                {/* Content with improved spacing and typography */}
                <div className="p-7 md:p-8 flex-grow flex flex-col justify-between">
                  <p className="text-[#334155] text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  {/* Better positioned link with enhanced hover effect */}
                  <div>
                    <a 
                      href="#learn-more" 
                      className="text-[#006ba6] font-semibold inline-flex items-center group transition-all"
                    >
                      Learn more
                      <svg 
                        className="w-5 h-5 ml-1.5 transition-transform group-hover:translate-x-2" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Added visual element for cohesion */}
                <div className="h-1.5 bg-[#006ba6]" />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced CTA with improved visual balance */}
        <motion.div 
          className="mt-28 p-12 md:p-16 rounded-2xl bg-gradient-to-br from-[#0b1e3b] to-[#102a4c] text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Visual element for design interest */}
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[#006ba6]/10 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#006ba6]/10 translate-x-1/3 translate-y-1/3" />
          
          {/* Content with improved hierarchy and spacing */}
          <div className="relative">
            <span className="inline-block px-4 py-1.5 bg-[#006ba6] text-white text-sm font-medium rounded-full mb-6">
              Take Action Now
            </span>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
              Statistics are more than numbers—they represent lives we can save.
            </h3>
            
            <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Early screening can reduce colorectal cancer mortality by up to 60%. Together, we can change these statistics and save lives.
            </p>
            
            <motion.button
              className="bg-[#006ba6] hover:bg-[#005d91] text-white font-medium px-10 py-4 rounded-xl shadow-lg inline-flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn How To Get Screened
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-3"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CrisisSection;












