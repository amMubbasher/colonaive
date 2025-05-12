// // src/components/HeroSection.tsx

// import React from "react";
// import { Button } from "../components/ui/Button"; // Confirm you have a named export, not default!
// import heroBg from "../assets/images/herosection/colorectal-surgeons-colonoscopy.jpg";

// const HeroSection = () => {
//   return (
//     <section
//   className="relative bg-cover bg-no-repeat text-white flex items-center justify-center pt-[180px] pb-12 px-4 md:pt-[220px] md:pb-[100px] text-center"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Dark overlay */}
//       <div
//   className="absolute inset-0 z-0"
//   style={{
//     backdropFilter: "blur(4px)",
//     WebkitBackdropFilter: "blur(4px)",
//     backgroundColor: "rgba(0, 0, 0, 0.3)"
//   }}
// />

//       {/* Main content */}
//       <div className="relative z-10 max-w-4xl mx-auto">
//         {/* Tagline */}
//         <h2 className="text-2xl md:text-4xl font-bold leading-tight drop-shadow-lg">
//           <span className="text-blue-400">SCOPED IN TIME</span>{" "}
//           <span className="text-red-400">SAVED IN TIME</span>
//         </h2>

//         {/* Headline */}
//         <h1 className="mt-4 text-3xl md:text-5xl font-extrabold drop-shadow-lg">
//           Outsmart Colorectal Cancer.{" "}
//           <span className="text-blue-300">Together.</span>
//         </h1>

//         {/* Subtext */}
//         <p className="mt-4 text-lg md:text-xl drop-shadow-sm px-4">
//           A clinician-led national movement to save lives through universal screening,
//           early detection, timely colonoscopy, removal of precancerous polyps.
//         </p>

//         {/* Button */}
//         <div className="mt-6">
//           <a href="/get-screened">
//   <Button label="Get Screened" />
// </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




// src/components/HeroSection.tsx
// import React, { useState, useEffect } from "react";
// import { Button } from "../components/ui/Button";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// // Import your background videos (replace these URLs with actual videos when implementing)
// const videoSources = [
//   "https://storage.googleapis.com/publichealth-videos/colorectal-awareness.mp4",
//   "https://storage.googleapis.com/publichealth-videos/screening-methods.mp4",
//   "https://storage.googleapis.com/publichealth-videos/early-detection.mp4",
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   // Timeline data for colorectal cancer awareness
//   const timelineData = [
//     {
//       title: "Awareness",
//       headline: "SCOPED IN TIME, SAVED IN TIME",
//       subheadline: "Outsmart Colorectal Cancer. Together.",
//       description: "A clinician-led national movement to save lives through universal screening and early detection.",
//       stats: "1 in 20 will develop colorectal cancer in their lifetime",
//     },
//     {
//       title: "Screening Options",
//       headline: "MULTIPLE PATHS, ONE GOAL",
//       subheadline: "Screening Saves Lives. Guaranteed.",
//       description: "From colonoscopy to non-invasive tests, find the screening option that works for you.",
//       stats: "Regular screening can reduce mortality by up to 60%",
//     },
//     {
//       title: "Early Detection",
//       headline: "FOUND EARLY, TREATED EFFECTIVELY",
//       subheadline: "Precancerous Polyps. Removed.",
//       description: "When detected early, colorectal cancer has a 90% 5-year survival rate.",
//       stats: "Polyp removal can prevent cancer from developing",
//     },
//   ];

//   // Auto-progress slides when not hovering
//   useEffect(() => {
//     if (isHovering) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % timelineData.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [isHovering, timelineData.length]);

//   return (
//     <section 
//       className="relative h-[80vh] max-h-[800px] min-h-[600px] w-full overflow-hidden bg-[#0B1E3B] mt-36"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Video Background with Transitions */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           className="absolute inset-0 z-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <video
//             className="absolute w-full h-full object-cover"
//             autoPlay
//             loop
//             muted
//             playsInline
//             src={videoSources[currentSlide % videoSources.length]}
//           />
//           <div 
//             className="absolute inset-0 z-0"
//             style={{
//               backdropFilter: "blur(4px)",
//               WebkitBackdropFilter: "blur(4px)",
//               backgroundColor: "rgba(0, 0, 30, 0.5)"
//             }}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Timeline Navigation */}
//       <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-20">
//         <div className="h-[200px] w-[2px] bg-white/30 relative">
//           <motion.div 
//             className="absolute left-0 w-full bg-teal-400"
//             style={{ 
//               top: 0, 
//               height: `${(currentSlide + 1) * (100 / timelineData.length)}%` 
//             }}
//             initial={{ height: 0 }}
//             animate={{ height: `${(currentSlide + 1) * (100 / timelineData.length)}%` }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           />
          
//           {timelineData.map((item, index) => (
//             <div 
//               key={index}
//               className={`absolute -left-[42px] flex items-center cursor-pointer transition-all duration-300 ${index === currentSlide ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
//               style={{ top: `${index * (100 / (timelineData.length - 1))}%` }}
//               onClick={() => setCurrentSlide(index)}
//             >
//               <div className={`h-5 w-5 rounded-full border-2 border-white flex items-center justify-center ${index === currentSlide ? 'bg-teal-400 border-teal-400' : 'bg-transparent'}`}>
//                 {index <= currentSlide && (
//                   <motion.div 
//                     className="h-2 w-2 rounded-full bg-white" 
//                     initial={{ scale: 0 }}
//                     animate={{ scale: index === currentSlide ? 1 : 0.5 }}
//                   />
//                 )}
//               </div>
//               <span className={`ml-3 text-sm font-medium whitespace-nowrap ${index === currentSlide ? 'text-teal-300' : 'text-white/80'}`}>
//                 {item.title}
//               </span>
//               {index === currentSlide && (
//                 <motion.div 
//                   className="h-[2px] w-10 bg-teal-400 ml-2"
//                   initial={{ width: 0, opacity: 0 }}
//                   animate={{ width: 40, opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content Container with Animations */}
//       <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             className="max-w-4xl mx-auto text-center relative"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Tagline with Animation */}
//             <motion.h2 
//               className="text-2xl md:text-4xl font-bold leading-tight drop-shadow-lg relative inline-block"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               {timelineData[currentSlide].headline.split(",")[0]}
//               {timelineData[currentSlide].headline.includes(",") && (
//                 <span className="text-red-400">, {timelineData[currentSlide].headline.split(",")[1]}</span>
//               )}
//               <motion.span 
//                 className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent"
//                 initial={{ scaleX: 0 }}
//                 animate={{ scaleX: 1 }}
//                 transition={{ delay: 0.8, duration: 0.6 }}
//               />
//             </motion.h2>

//             {/* Headline with Animation */}
//             <motion.h1 
//               className="mt-6 text-3xl md:text-5xl font-extrabold drop-shadow-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               {timelineData[currentSlide].subheadline.split(".")[0]}.{" "}
//               <span className="text-blue-300">
//                 {timelineData[currentSlide].subheadline.includes(".") && 
//                   timelineData[currentSlide].subheadline.split(".")[1]
//                 }
//               </span>
//             </motion.h1>

//             {/* Description with Animation */}
//             <motion.p 
//               className="mt-6 text-lg md:text-xl drop-shadow-sm px-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//             >
//               {timelineData[currentSlide].description}
//             </motion.p>

//             {/* Stats Highlight with Animation */}
//             <motion.div
//               className="mt-6 inline-block bg-black/30 backdrop-blur-sm px-6 py-3 rounded-lg"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.8, duration: 0.5 }}
//             >
//               <p className="text-teal-300 font-medium">{timelineData[currentSlide].stats}</p>
//             </motion.div>

//             {/* CTA Button with Animation */}
//             <motion.div 
//               className="mt-10"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.5 }}
//             >
//               <a href="/get-screened" className="group relative">
//                 <Button 
//                   className="bg-[#006BA6] hover:bg-[#005C8D] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group"
//                   label="Get Screened Now" 
//                 />
//                 <span className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/30 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center transition-all duration-300 group-hover:translate-x-1">
//                   <ChevronRight className="h-5 w-5 group-hover:text-teal-300 transition-colors duration-300" />
//                 </div>
//               </a>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// import React, { useState, useEffect } from "react";
// import { Button } from "../components/ui/Button";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   // Timeline data
//   const timelineData = [
//     {
//       title: "Awareness",
//       headline: "SCOPED IN TIME,",
//       headlineAccent: "SAVED IN TIME",
//       subheadline: "Outsmart Colorectal Cancer.",
//       subheadlineAccent: "Together",
//       description: "A clinician-led national movement to save lives through universal screening and early detection.",
//       stats: "1 in 20 will develop colorectal cancer in their lifetime",
//     },
//     {
//       title: "Screening",
//       headline: "MULTIPLE PATHS,",
//       headlineAccent: "ONE GOAL",
//       subheadline: "Screening Saves Lives.",
//       subheadlineAccent: "Guaranteed",
//       description: "From colonoscopy to non-invasive tests, find the screening option that works for you.",
//       stats: "Regular screening can reduce mortality by up to 60%",
//     },
//     {
//       title: "Early Detection",
//       headline: "FOUND EARLY,",
//       headlineAccent: "TREATED EFFECTIVELY",
//       subheadline: "Precancerous Polyps.",
//       subheadlineAccent: "Removed",
//       description: "When detected early, colorectal cancer has a 90% 5-year survival rate.",
//       stats: "Polyp removal can prevent cancer from developing",
//     },
//   ];

//   // Auto-progress slides
//   useEffect(() => {
//     if (isHovering) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % timelineData.length);
//     }, 6000);
    
//     return () => clearInterval(interval);
//   }, [isHovering, timelineData.length]);

//   return (
//     <section 
//       className="relative w-full bg-[#010621] text-white mt-36" 
//       style={{ minHeight: '90vh' }}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Fixed dark background instead of videos */}
//       <div className="absolute inset-0 bg-[#010621] z-0"></div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 flex flex-col items-center justify-center h-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             className="max-w-4xl mx-auto text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Headline with Animation */}
//             <motion.h2 
//               className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <span className="text-white">
//                 {timelineData[currentSlide].headline}
//               </span>{" "}
//               <span className="text-[#F45B69]">
//                 {timelineData[currentSlide].headlineAccent}
//               </span>
//               <motion.div 
//                 className="h-[2px] w-1/2 bg-white mx-auto mt-5"
//                 initial={{ width: 0 }}
//                 animate={{ width: "50%" }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//               />
//             </motion.h2>

//             {/* Subheadline */}
//             <motion.h1 
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-8 mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               {timelineData[currentSlide].subheadline}{" "}
//               <span className="text-[#7DB1E8]">
//                 {timelineData[currentSlide].subheadlineAccent}
//               </span>
//             </motion.h1>

//             {/* Description */}
//             <motion.p 
//               className="text-lg md:text-xl mx-auto mb-10"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//             >
//               {timelineData[currentSlide].description}
//             </motion.p>

//             {/* Stats Box */}
//             <motion.div
//               className="inline-block bg-black/30 px-8 py-3 rounded-md mb-12"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.8, duration: 0.5 }}
//             >
//               <p className="text-[#25D0B1] font-medium text-lg">
//                 {timelineData[currentSlide].stats}
//               </p>
//             </motion.div>

//             {/* CTA Button */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.5 }}
//             >
//               <Button 
//                 className="bg-[#0083C6] hover:bg-[#006BA6] text-white rounded-full px-12 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Get Screened Now
//                   <ChevronRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/20 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Timeline Navigation - Now absolutely positioned on right edge */}
//         <div className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center">
//           <div className="h-[200px] w-[2px] bg-white/20 relative">
//             <motion.div 
//               className="absolute left-0 w-full bg-[#25D0B1]"
//               style={{ 
//                 top: 0, 
//                 height: `${(currentSlide + 1) * (100 / timelineData.length)}%` 
//               }}
//               initial={{ height: 0 }}
//               animate={{ height: `${(currentSlide + 1) * (100 / timelineData.length)}%` }}
//               transition={{ duration: 0.5 }}
//             />
            
//             {timelineData.map((item, index) => (
//               <div 
//                 key={index}
//                 className="absolute -left-[42px] flex items-center cursor-pointer"
//                 style={{ top: `${index * (100 / (timelineData.length - 1))}%` }}
//                 onClick={() => setCurrentSlide(index)}
//               >
//                 <div className={`h-5 w-5 rounded-full border-2 ${index === currentSlide ? 'bg-[#25D0B1] border-[#25D0B1]' : 'bg-transparent border-white'} flex items-center justify-center`}>
//                   {index <= currentSlide && index === currentSlide && (
//                     <motion.div 
//                       className="h-2 w-2 rounded-full bg-white" 
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                     />
//                   )}
//                 </div>
//                 <span className={`ml-3 text-sm font-medium ${index === currentSlide ? 'text-[#25D0B1]' : 'text-white/70'}`}>
//                   {item.title}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



















// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "../components/ui/Button";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const videoRefs = useRef([]);

//   // Timeline data with online video sources
//   const timelineData = [
//     {
//       headline: "SCOPED IN TIME,",
//       headlineAccent: "SAVED IN TIME",
//       subheadline: "Outsmart Colorectal Cancer.",
//       subheadlineAccent: "Together",
//       description: "A clinician-led national movement to save lives through universal screening and early detection.",
//       stats: "1 in 20 will develop colorectal cancer in their lifetime",
//       videoSrc: "https://videos.pexels.com/video-files/3195444/3195444-uhd_2560_1440_25fps.mp4",
//     },
//     {
//       headline: "MULTIPLE PATHS,",
//       headlineAccent: "ONE GOAL",
//       subheadline: "Screening Saves Lives.",
//       subheadlineAccent: "Guaranteed",
//       description: "From colonoscopy to non-invasive tests, find the screening option that works for you.",
//       stats: "Regular screening can reduce mortality by up to 60%",
//       videoSrc: "https://videos.pexels.com/video-files/4487124/4487124-sd_640_360_25fps.mp4",
//     },
//     {
//       headline: "FOUND EARLY,",
//       headlineAccent: "TREATED EFFECTIVELY",
//       subheadline: "Precancerous Polyps.",
//       subheadlineAccent: "Removed",
//       description: "When detected early, colorectal cancer has a 90% 5-year survival rate.",
//       stats: "Polyp removal can prevent cancer from developing",
//       videoSrc: "https://videos.pexels.com/video-files/3195444/3195444-uhd_2560_1440_25fps.mp4",
//     },
//   ];

//   // Auto-progress slides
//   useEffect(() => {
//     if (isHovering) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % timelineData.length);
//     }, 4000);
    
//     return () => clearInterval(interval);
//   }, [isHovering, timelineData.length]);

//   // Handle videos
//   useEffect(() => {
//     // Pause all videos first
//     videoRefs.current.forEach((video) => {
//       if (video) video.pause();
//     });
    
//     // Play the current video
//     const currentVideo = videoRefs.current[currentSlide];
//     if (currentVideo) {
//       currentVideo.currentTime = 0;
//       currentVideo.play().catch(e => console.log("Video play prevented:", e));
//     }
//   }, [currentSlide]);

//   return (
//     <section 
//       className="relative w-full text-white mt-20 sm:mt-28 md:mt-36 min-h-[90vh] overflow-hidden" 
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       aria-label="Colorectal Cancer Awareness Hero Section"
//     >
//       {/* Background videos with overlay */}
//       <div className="absolute inset-0 z-0">
//         {timelineData.map((slide, index) => (
//           <div 
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               currentSlide === index ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <video
//               ref={el => videoRefs.current[index] = el}
//               src={slide.videoSrc}
//               className="object-cover w-full h-full"
//               muted
//               loop
//               playsInline
//               preload="auto"
//             >
//               Your browser does not support video.
//             </video>
//             {/* Semi-transparent overlay for better text readability */}
//             <div className="absolute inset-0 bg-[#010621] bg-opacity-70" />
//           </div>
//         ))}
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 lg:py-32 flex flex-col items-center justify-center h-full">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Headline with Animation */}
//             <motion.h2 
//               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <span className="text-white">
//                 {timelineData[currentSlide].headline}
//               </span>{" "}
//               <span className="text-[#F45B69]">
//                 {timelineData[currentSlide].headlineAccent}
//               </span>
//               <motion.div 
//                 className="h-[2px] w-1/2 bg-white mx-auto mt-3 md:mt-5"
//                 initial={{ width: 0 }}
//                 animate={{ width: "50%" }}
//                 transition={{ delay: 0.4, duration: 0.6 }}
//               />
//             </motion.h2>

//             {/* Subheadline */}
//             <motion.h1 
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               {timelineData[currentSlide].subheadline}{" "}
//               <span className="text-[#7DB1E8]">
//                 {timelineData[currentSlide].subheadlineAccent}
//               </span>
//             </motion.h1>

//             {/* Description */}
//             <motion.p 
//               className="text-base sm:text-lg md:text-xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//             >
//               {timelineData[currentSlide].description}
//             </motion.p>

//             {/* Stats Box */}
//             <motion.div
//               className="inline-block bg-black/50 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md mb-6 sm:mb-8 md:mb-12"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.8, duration: 0.5 }}
//             >
//               <p className="text-[#25D0B1] font-medium text-sm sm:text-base md:text-lg">
//                 {timelineData[currentSlide].stats}
//               </p>
//             </motion.div>

//             {/* CTA Button with Accessibility */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.5 }}
//             >
//               <Button 
//                 className="bg-[#0083C6] hover:bg-[#006BA6] text-white rounded-full px-6 sm:px-8 md:px-12 py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
//                 aria-label="Get Screened Now for Colorectal Cancer"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Get Screened Now
//                   <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/20 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Dots (for all screen sizes now) */}
//         <div className="flex justify-center space-x-4 mt-8">
//           {timelineData.map((_, index) => (
//             <button
//               key={index}
//               className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-[#25D0B1]' : 'bg-white/50'} transition-colors duration-300`}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Navigate to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;










































// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "../components/ui/Button";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const videoRefs = useRef([]);

//   // Timeline data with online video sources
//   const timelineData = [
//     {
//       headline: "SCOPED IN TIME,",
//       headlineAccent: "SAVED IN TIME",
//       subheadline: "Outsmart Colorectal Cancer.",
//       subheadlineAccent: "Together",
//       description: "A clinician-led national movement to save lives through universal screening and early detection.",
//       stats: "1 in 20 will develop colorectal cancer in their lifetime",
//       videoSrc: "https://videos.pexels.com/video-files/3195444/3195444-uhd_2560_1440_25fps.mp4",
//     },
//     {
//       headline: "MULTIPLE PATHS,",
//       headlineAccent: "ONE GOAL",
//       subheadline: "Screening Saves Lives.",
//       subheadlineAccent: "Guaranteed",
//       description: "From colonoscopy to non-invasive tests, find the screening option that works for you.",
//       stats: "Regular screening can reduce mortality by up to 60%",
//       videoSrc: "https://videos.pexels.com/video-files/4487124/4487124-sd_640_360_25fps.mp4",
//     },
//     {
//       headline: "FOUND EARLY,",
//       headlineAccent: "TREATED EFFECTIVELY",
//       subheadline: "Precancerous Polyps.",
//       subheadlineAccent: "Removed",
//       description: "When detected early, colorectal cancer has a 90% 5-year survival rate.",
//       stats: "Polyp removal can prevent cancer from developing",
//       videoSrc: "https://videos.pexels.com/video-files/3195444/3195444-uhd_2560_1440_25fps.mp4",
//     },
//   ];

//   // Auto-progress slides
//   useEffect(() => {
//     if (isHovering) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % timelineData.length);
//     }, 2500); // Reduced from 4000ms to 2500ms
    
//     return () => clearInterval(interval);
//   }, [isHovering, timelineData.length]);

//   // Handle videos
//   useEffect(() => {
//     // Pause all videos first
//     videoRefs.current.forEach((video) => {
//       if (video) video.pause();
//     });
    
//     // Play the current video
//     const currentVideo = videoRefs.current[currentSlide];
//     if (currentVideo) {
//       currentVideo.currentTime = 0;
//       currentVideo.play().catch(e => console.log("Video play prevented:", e));
//     }
//   }, [currentSlide]);

//   return (
//     <section 
//       className="relative w-full text-white min-h-[90vh] overflow-hidden" 
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//       aria-label="Colorectal Cancer Awareness Hero Section"
//     >
//       {/* Background videos with overlay */}
//       <div className="absolute inset-0 z-0">
//         {timelineData.map((slide, index) => (
//           <div 
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-700 ${
//               currentSlide === index ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <video
//               ref={el => videoRefs.current[index] = el}
//               src={slide.videoSrc}
//               className="object-cover w-full h-full"
//               muted
//               loop
//               playsInline
//               preload="auto"
//             >
//               Your browser does not support video.
//             </video>
//             {/* Semi-transparent overlay for better text readability */}
//             <div className="absolute inset-0 bg-[#010621] bg-opacity-70" />
//           </div>
//         ))}
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 lg:py-32 flex flex-col items-center justify-center h-full">
//         {/* Timeline Navigation - MODIFIED - dots only */}
//         <div className="absolute left-4 sm:left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden md:block">
//           <div className="h-[200px] w-[2px] bg-white/20 relative">
//             <motion.div 
//               className="absolute left-0 w-full bg-[#25D0B1]"
//               style={{ 
//                 top: 0, 
//                 height: `${(currentSlide + 1) * (100 / timelineData.length)}%` 
//               }}
//               initial={{ height: 0 }}
//               animate={{ height: `${(currentSlide + 1) * (100 / timelineData.length)}%` }}
//               transition={{ duration: 0.3 }}
//             />
            
//             {/*  */}
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto text-center"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//           >
//             {/* Headline */}
//             <motion.h2 
//               className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1, duration: 0.3 }}
//             >
//               <span className="text-white">
//                 {timelineData[currentSlide].headline}
//               </span>{" "}
//               <span className="text-[#F45B69]">
//                 {timelineData[currentSlide].headlineAccent}
//               </span>
//               {/* Border removed as requested */}
//             </motion.h2>

//             {/* Subheadline */}
//             <motion.h1 
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.3 }}
//             >
//               {timelineData[currentSlide].subheadline}{" "}
//               <span className="text-[#7DB1E8]">
//                 {timelineData[currentSlide].subheadlineAccent}
//               </span>
//             </motion.h1>

//             {/* Description */}
//             <motion.p 
//               className="text-base sm:text-lg md:text-xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.3 }}
//             >
//               {timelineData[currentSlide].description}
//             </motion.p>

//             {/* Stats Box */}
//             <motion.div
//               className="inline-block bg-black/50 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md mb-6 sm:mb-8 md:mb-12"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.4, duration: 0.3 }}
//             >
//               <p className="text-[#25D0B1] font-medium text-sm sm:text-base md:text-lg">
//                 {timelineData[currentSlide].stats}
//               </p>
//             </motion.div>

//             {/* CTA Button with Accessibility */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.3 }}
//             >
//               <Button 
//                 className="bg-[#0083C6] hover:bg-[#006BA6] text-white rounded-full px-6 sm:px-8 md:px-12 py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
//                 aria-label="Get Screened Now for Colorectal Cancer"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Get Screened Now
//                   <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                 </span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/20 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//               </Button>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Dots */}
//         <div className="flex justify-center space-x-4 mt-8">
//           {timelineData.map((_, index) => (
//             <button
//               key={index}
//               className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-[#25D0B1]' : 'bg-white/50'} transition-colors duration-300`}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Navigate to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



















import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [index, setIndex] = useState(0);

  // Timeline data with online video sources
  const timelineData = [
    {
      headline: "SCOPED IN TIME,",
      headlineAccent: "SAVED IN TIME",
      subheadline: "Outsmart Colorectal Cancer.",
      subheadlineAccent: "Together",
      description: "A clinician-led national movement to save lives through universal screening and early detection.",
      stats: "1 in 20 will develop colorectal cancer in their lifetime",
      videoSrc: "https://videos.pexels.com/video-files/4352120/4352120-sd_640_360_25fps.mp4",
      time: "8:00 AM",
    },
    {
      headline: "MULTIPLE PATHS,",
      headlineAccent: "ONE GOAL",
      subheadline: "Screening Saves Lives.",
      subheadlineAccent: "Guaranteed",
      description: "From colonoscopy to non-invasive tests, find the screening option that works for you.",
      stats: "Regular screening can reduce mortality by up to 60%",
      videoSrc: "https://videos.pexels.com/video-files/5453368/5453368-sd_640_360_25fps.mp4",
      time: "9:30 AM",
    },
    {
      headline: "FOUND EARLY,",
      headlineAccent: "TREATED EFFECTIVELY",
      subheadline: "Precancerous Polyps.",
      subheadlineAccent: "Removed",
      description: "When detected early, colorectal cancer has a 90% 5-year survival rate.",
      stats: "Polyp removal can prevent cancer from developing",
      videoSrc: "https://videos.pexels.com/video-files/3197687/3197687-sd_640_360_25fps.mp4",
      time: "11:00 AM",
    },
    {
      headline: "EARLY DETECTION,",
      headlineAccent: "BETTER OUTCOMES",
      subheadline: "Know Your Risk.",
      subheadlineAccent: "Act Now",
      description: "Understanding your risk factors can help you make informed decisions about when to start screening.",
      stats: "Family history can increase your risk by up to 3x",
      videoSrc: "https://videos.pexels.com/video-files/5453701/5453701-sd_640_360_25fps.mp4",
      time: "1:30 PM",
    },
    {
      headline: "PREVENTION,",
      headlineAccent: "THE BEST MEDICINE",
      subheadline: "Lifestyle Matters.",
      subheadlineAccent: "Choose Health",
      description: "Diet, exercise, and lifestyle choices can significantly reduce your colorectal cancer risk.",
      stats: "Regular physical activity can reduce risk by up to 25%",
      videoSrc: "https://videos.pexels.com/video-files/3195444/3195444-uhd_2560_1440_25fps.mp4",
      time: "3:00 PM",
    },
    {
      headline: "TOGETHER,",
      headlineAccent: "WE CAN BEAT CRC",
      subheadline: "Join The Movement.",
      subheadlineAccent: "Save Lives",
      description: "Be part of the effort to reduce colorectal cancer rates through awareness, education, and action.",
      stats: "Community programs can increase screening rates by 15%",
      videoSrc: "https://videos.pexels.com/video-files/4487124/4487124-sd_640_360_25fps.mp4",
      time: "5:00 PM",
    },
  ];

  // Auto-progress slides for both state variables
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % timelineData.length);
      setIndex((prev) => (prev + 1) % timelineData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [timelineData.length]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slides */}
        {timelineData.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out transform ${
              currentSlide === idx ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <video
              className="absolute w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={slide.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-[#010621] bg-opacity-70" />

            <div className="h-full text-white">
              {/* Time indicator */}
              {/* <div className="absolute top-16 left-8 md:left-28 bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow-lg">
                {slide.time}
              </div> */}

              {/* Headline */}
              <div className="absolute top-28 left-8 md:left-28 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">
                  {slide.headline}
                </span>{" "}
                <span className="text-[#F45B69]">
                  {slide.headlineAccent}
                </span>
              </div>

              {/* Stats Box and Description */}
              <div className="absolute left-8 md:left-28 bottom-12">
                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg w-64 sm:w-72 md:w-80">
                  <p className="text-[#25D0B1] font-medium text-sm sm:text-base md:text-lg">
                    {slide.stats}
                  </p>
                </div>
                <p className="text-white mt-4 text-sm sm:text-base md:text-xl max-w-xs sm:max-w-sm md:max-w-md">
                  {slide.description}
                </p>
              </div>

              {/* CTA Button or Info Box */}
              <div className="absolute bottom-12 right-8 sm:right-16 md:right-32 lg:right-64 rounded-tr-3xl rounded-bl-3xl bg-gray-500/80 text-white p-4 rounded-lg shadow-lg flex items-center w-64 sm:w-80 md:w-96">
                <div className="flex-1">
                  <p className="text-sm sm:text-base md:text-lg">
                    {slide.subheadline} <span className="text-[#7DB1E8]">{slide.subheadlineAccent}</span>. 
                    Take action today for a healthier tomorrow.
                  </p>
                  
                  <Button 
                    className="mt-3 bg-[#0083C6] hover:bg-[#006BA6] text-white rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                    aria-label="Get Screened Now for Colorectal Cancer"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Screened Now
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Right Timeline */}
        <div className="flex justify-end items-center">
          <div className="relative w-32 h-96 flex flex-col items-center overflow-hidden p-4 rounded-lg bg-transparent top-[25vh]">
            <motion.div
              className="absolute flex flex-col items-center top-1/2 transform -translate-y-1/2"
              initial={{ y: 0 }}
              animate={{ y: -index * 110 }}
              transition={{ duration: 0.5 }}
            >
              {timelineData.map((slide, idx) => (
                <div key={idx} className="flex flex-col items-center mb-4 relative">
                  <div className={`text-xl font-bold transition-all duration-500 ${
                    index === idx ? "text-white px-2 py-1" : "text-gray-100"
                  }`}>{slide.time}</div>
                  <div className="w-3/4 border-t border-gray-200 my-2"></div>
                  <div className="w-3/4 border-t border-gray-200 my-2"></div>
                  <div className="w-3/4 border-t border-gray-200 my-2"></div>
                  <div className="w-3/4 border-t border-gray-200 my-2"></div>
                  {index === idx && <div className='absolute right-[-20px] top-[1rem] h-0.5 w-6 bg-white'></div>}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

