// src/components/NationalStrategySection.tsx
// import React from "react";
// import { motion } from "framer-motion";

// interface StrategyItem {
//     id: number;
//     icon: string;
//     title: string;
//     text: string;
// }

// const strategies: StrategyItem[] = [
//     {
//         id: 1,
//         icon: "🩺",
//         title: "Patient-Friendly Tools",
//         text: "Empower GPs and labs with patient-friendly screening tools"
//     },
//     {
//         id: 2,
//         icon: "📢",
//         title: "Public Education",
//         text: "Launch bold public education campaigns"
//     },
//     {
//         id: 3,
//         icon: "🤝",
//         title: "Strategic Partnerships",
//         text: "Activate public-private partnerships"
//     },
//     {
//         id: 4,
//         icon: "🗓️",
//         title: "Streamlined Referrals",
//         text: "Enable timely referral and scheduling of colonoscopy"
//     },
//     {
//         id: 5,
//         icon: "🔬",
//         title: "Modern Screening",
//         text: "Adopt modern, non-invasive blood-based screening options"
//     }
// ];

// const NationalStrategySection: React.FC = () => {
//     return (
//         <section className="relative py-20 px-4 md:px-8 overflow-hidden">
//             {/* Decorative background elements */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#25D0B1]/10 to-transparent"></div>
//                 <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#25D0B1]/5 blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#25D0B1]/10 to-transparent"></div>
//             </div>

//             <div className="max-w-7xl mx-auto relative z-10">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <div
//                         className="inline-flex items-center px-4 py-1.5 bg-[#25D0B1]/10 rounded-full mb-6"
//                         style={{ animation: "pulse 5s infinite" }}
//                     >
//                         <span className="h-2 w-2 rounded-full bg-[#25D0B1] mr-2"></span>
//                         <span className="text-[#004f8c] text-sm font-medium">NATIONAL APPROACH</span>
//                     </div>

//                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004f8c] mb-6">
//                         OUR NATIONAL
//                         <span
//                             className="ml-3 text-[#25D0B1]"
//                             style={{ animation: "glow 5s infinite" }}
//                         >
//                             STRATEGY
//                         </span>
//                     </h2>

//                     <div className="h-1 w-24 bg-[#25D0B1] mx-auto mb-8"></div>

//                     <p className="text-[#004f8c] max-w-3xl mx-auto text-lg mb-12">
//                         Our comprehensive approach combines innovative methods and partnerships to drive meaningful change in colorectal cancer prevention nationwide.
//                     </p>
//                 </div>

//                 {/* Strategy Cards - WIDER CONTAINERS FOR FOUR SPECIFIC CARDS */}
//                 <div className="grid grid-cols-1 gap-8 mb-16">
//                     {/* Public Education - FIRST WIDE CONTAINER */}
//                     <div
//                         className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden w-full"
//                         style={{ animation: "slideFromRight 5s infinite" }}
//                     >
//                         <div className="h-2 w-full bg-[#25D0B1]"></div>
//                         <div className="p-8 flex flex-col md:flex-row items-center gap-6">
//                             <div className="md:w-1/4 flex justify-center">
//                                 <div
//                                     className="w-24 h-24 rounded-full bg-[#25D0B1]/20 flex items-center justify-center text-4xl"
//                                     style={{ animation: "rotate360 5s infinite" }}
//                                 >
//                                     {strategies[1].icon}
//                                 </div>
//                             </div>
//                             <div className="md:w-3/4">
//                                 <h3 className="text-2xl font-bold text-white mb-4">{strategies[1].title}</h3>
//                                 <p className="text-white/90 text-lg mb-6">{strategies[1].text}</p>
//                                 <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-[#25D0B1]"
//                                         style={{ animation: "progressBar 5s infinite" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Strategic Partnerships - SECOND WIDE CONTAINER */}
//                     <div
//                         className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden w-full"
//                         style={{ animation: "slideFromLeft 5s infinite" }}
//                     >
//                         <div className="h-2 w-full bg-[#25D0B1]"></div>
//                         <div className="p-8 flex flex-col md:flex-row items-center gap-6">
//                             <div className="md:w-1/4 flex justify-center">
//                                 <div
//                                     className="w-24 h-24 rounded-full bg-[#25D0B1]/20 flex items-center justify-center text-4xl"
//                                     style={{ animation: "bounce 5s infinite" }}
//                                 >
//                                     {strategies[2].icon}
//                                 </div>
//                             </div>
//                             <div className="md:w-3/4">
//                                 <h3 className="text-2xl font-bold text-white mb-4">{strategies[2].title}</h3>
//                                 <p className="text-white/90 text-lg mb-6">{strategies[2].text}</p>
//                                 <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-[#25D0B1]"
//                                         style={{ animation: "progressBarReverse 5s infinite" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Two-column layout for remaining strategies */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {/* Patient-Friendly Tools - THIRD WIDE CONTAINER (in its column) */}
//                         <div
//                             className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden h-full"
//                             style={{ animation: "scaleUpDown 5s infinite" }}
//                         >
//                             <div className="h-2 w-full bg-[#25D0B1]"></div>
//                             <div className="p-6">
//                                 <div className="mb-4">
//                                     <div
//                                         className="w-16 h-16 rounded-full bg-[#25D0B1]/20 flex items-center justify-center text-3xl mx-auto"
//                                         style={{ animation: "pulse 5s infinite" }}
//                                     >
//                                         {strategies[0].icon}
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-white text-center mb-3">{strategies[0].title}</h3>
//                                 <p className="text-white/80 text-center mb-4">{strategies[0].text}</p>
                                
//                                 <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-[#25D0B1]"
//                                         style={{ animation: "widthPulse 5s infinite" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Streamlined Referrals - FOURTH WIDE CONTAINER (in its column) */}
//                         <div
//                             className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden h-full"
//                             style={{ animation: "flipCard 5s infinite" }}
//                         >
//                             <div className="h-2 w-full bg-[#25D0B1]"></div>
//                             <div className="p-6">
//                                 <div className="mb-4">
//                                     <div
//                                         className="w-16 h-16 rounded-full bg-[#25D0B1]/20 flex items-center justify-center text-3xl mx-auto"
//                                         style={{ animation: "pulse 5s infinite" }}
//                                     >
//                                         {strategies[3].icon}
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-white text-center mb-3">{strategies[3].title}</h3>
//                                 <p className="text-white/80 text-center mb-4">{strategies[3].text}</p>
                                
//                                 <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-[#25D0B1]"
//                                         style={{ animation: "widthPulse 5s infinite" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         {/* Modern Screening - Regular card */}
//                         <div
//                             className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden col-span-2 md:col-span-1 md:col-start-2"
//                             style={{ animation: "float 5s infinite" }}
//                         >
//                             <div className="h-1.5 w-full bg-[#25D0B1]/50"></div>

//                             <div className="p-6">
//                                 <div className="flex items-center mb-4">
//                                     <div
//                                         className="w-12 h-12 rounded-full bg-[#25D0B1]/10 flex items-center justify-center text-2xl mr-4"
//                                         style={{ animation: "pulse 5s infinite" }}
//                                     >
//                                         {strategies[4].icon}
//                                     </div>
//                                     <h3 className="text-xl font-bold text-white">{strategies[4].title}</h3>
//                                 </div>

//                                 <p className="text-white/80 mb-4">{strategies[4].text}</p>
                                
//                                 <div
//                                     className="h-0.5 bg-[#25D0B1]/40 mt-4 rounded-full"
//                                     style={{
//                                         width: "40%",
//                                         animation: "lineWidth 5s infinite"
//                                     }}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Stats Section */}
//                 <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-black">
//                     <div className="backdrop-blur-sm border border-white/10 p-6 md:p-8 text-center"
//                         style={{ animation: "float 5s infinite 0.2s" }}>
//                         <p className="text-white/60 uppercase text-sm tracking-wider mb-2">By</p>
//                         <p className="text-[#25D0B1] text-4xl md:text-5xl font-bold mb-4"
//                             style={{ animation: "pulse 5s infinite" }}>
//                             2030
//                         </p>
//                         <p className="text-white text-xl">Reach <span className="font-bold">80%</span> screening uptake</p>
//                     </div>

//                     <div className="backdrop-blur-sm border border-white/10 p-6 md:p-8 text-center"
//                         style={{ animation: "float 5s infinite 0.6s" }}>
//                         <p className="text-white/60 uppercase text-sm tracking-wider mb-2">By</p>
//                         <p className="text-[#25D0B1] text-4xl md:text-5xl font-bold mb-4"
//                             style={{ animation: "pulse 5s infinite 0.5s" }}>
//                             2035
//                         </p>
//                         <p className="text-white text-xl">Reduce deaths by <span className="font-bold">80%</span></p>
//                     </div>
//                 </div>

//                 {/* CTA and Mission Statement */}
//                 <div className="mt-10 flex flex-col gap-10">
//                     <div className="text-center">
//                         <a
//                             href="/strategy-details"
//                             className="inline-flex items-center px-8 py-3.5 bg-[#004f8c] text-white hover:bg-[#006ba6] font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//                             style={{ animation: "shadowPulse 5s infinite" }}
//                         >
//                             Explore Full Strategy
//                             <svg
//                                 className="ml-2 w-5 h-5"
//                                 style={{ animation: "moveArrow 5s infinite" }}
//                                 viewBox="0 0 20 20"
//                                 fill="currentColor"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                         </a>
//                     </div>

//                     <div className="bg-[#006ba6] backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 text-center"
//                         style={{ animation: "shadowPulse 5s infinite 1s" }}>
//                         <p className="text-white/90 text-lg">
//                             This is our national contribution — powered by doctors, supported by sponsors, embraced by citizens.
//                             <span className="ml-2 text-white">🇸🇬</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Animation keyframes */}
//             <style jsx>{`
//                 @keyframes pulse {
//                     0%, 100% { opacity: 1; }
//                     50% { opacity: 0.7; }
//                 }
                
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-8px); }
//                 }
                
//                 @keyframes lineWidth {
//                     0%, 100% { width: 30%; opacity: 0.5; }
//                     50% { width: 70%; opacity: 0.8; }
//                 }
                
//                 @keyframes shadowPulse {
//                     0%, 100% { box-shadow: 0 4px 6px rgba(37, 208, 177, 0.2); }
//                     50% { box-shadow: 0 4px 15px rgba(37, 208, 177, 0.4); }
//                 }
                
//                 @keyframes moveArrow {
//                     0%, 100% { transform: translateX(0); }
//                     50% { transform: translateX(5px); }
//                 }
                
//                 @keyframes glow {
//                     0%, 100% { text-shadow: 0 0 0 rgba(37, 208, 177, 0); }
//                     50% { text-shadow: 0 0 10px rgba(37, 208, 177, 0.3); }
//                 }
                
//                 /* NEW ANIMATIONS */
//                 @keyframes slideFromRight {
//                     0%, 100% { transform: translateX(0); }
//                     50% { transform: translateX(-10px); }
//                 }
                
//                 @keyframes slideFromLeft {
//                     0%, 100% { transform: translateX(0); }
//                     50% { transform: translateX(10px); }
//                 }
                
//                 @keyframes progressBar {
//                     0%, 100% { width: 0%; }
//                     50% { width: 100%; }
//                 }
                
//                 @keyframes progressBarReverse {
//                     0%, 100% { width: 100%; }
//                     50% { width: 0%; }
//                 }
                
//                 @keyframes rotate360 {
//                     0% { transform: rotate(0deg); }
//                     25% { transform: rotate(10deg); }
//                     50% { transform: rotate(0deg); }
//                     75% { transform: rotate(-10deg); }
//                     100% { transform: rotate(0deg); }
//                 }
                
//                 @keyframes bounce {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-12px); }
//                 }
                
//                 @keyframes scaleUpDown {
//                     0%, 100% { transform: scale(1); }
//                     50% { transform: scale(1.03); }
//                 }
                
//                 @keyframes flipCard {
//                     0%, 100% { transform: perspective(1000px) rotateY(0deg); }
//                     50% { transform: perspective(1000px) rotateY(5deg); }
//                 }
                
//                 @keyframes widthPulse {
//                     0%, 100% { width: 20%; }
//                     50% { width: 80%; }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default NationalStrategySection;











































// src/components/NationalStrategySection.tsx
// import React from "react";
// import { motion } from "framer-motion";

// interface StrategyItem {
//     id: number;
//     icon: string;
//     title: string;
//     text: string;
// }

// const strategies: StrategyItem[] = [
//     {
//         id: 1,
//         icon: "🩺",
//         title: "Patient-Friendly Tools",
//         text: "Empower GPs and labs with patient-friendly screening tools"
//     },
//     {
//         id: 2,
//         icon: "📢",
//         title: "Public Education",
//         text: "Launch bold public education campaigns"
//     },
//     {
//         id: 3,
//         icon: "🤝",
//         title: "Strategic Partnerships",
//         text: "Activate public-private partnerships"
//     },
//     {
//         id: 4,
//         icon: "🗓️",
//         title: "Streamlined Referrals",
//         text: "Enable timely referral and scheduling of colonoscopy"
//     },
//     {
//         id: 5,
//         icon: "🔬",
//         title: "Modern Screening",
//         text: "Adopt modern, non-invasive blood-based screening options"
//     }
// ];

// const NationalStrategySection: React.FC = () => {
//     return (
//         <section className="relative py-20 px-4 md:px-8 overflow-hidden">
//             {/* Decorative background elements */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#25d0b1]/10 to-transparent"></div>
//                 <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#006ba6]/5 blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#006ba6]/10 to-transparent"></div>
//             </div>

//             <div className="max-w-7xl mx-auto relative z-10">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <div
//                         className="inline-flex items-center px-4 py-1.5 bg-[#006ba6]/10 rounded-full mb-6"
//                         style={{ animation: "pulse 5s infinite" }}
//                     >
//                         <span className="h-2 w-2 rounded-full bg-[#25d0b1] mr-2"></span>
//                         <span className="text-[#006ba6] text-sm font-medium">NATIONAL APPROACH</span>
//                     </div>

//                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#006ba6] mb-6">
//                         OUR NATIONAL
//                         <span
//                             className="ml-3 text-[#25d0b1]"
//                             style={{ animation: "glow 5s infinite" }}
//                         >
//                             STRATEGY
//                         </span>
//                     </h2>

//                     <div className="h-1 w-24 bg-[#25d0b1] mx-auto mb-8"></div>

//                     <p className="text-[#006ba6] max-w-3xl mx-auto text-lg mb-12">
//                         Our comprehensive approach combines innovative methods and partnerships to drive meaningful change in colorectal cancer prevention nationwide.
//                     </p>
//                 </div>

//                 {/* Strategy Cards - WIDER CONTAINERS WITH ALTERNATING COLORS */}
//                 <div className="grid grid-cols-1 gap-8 mb-16">
//                     {/* Public Education - FIRST WIDE CONTAINER */}
//                     <div
//                         className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden w-full"
//                         style={{ animation: "slideFromRight 5s infinite" }}
//                     >
//                         <div className="h-2 w-full bg-gradient-to-r from-[#25d0b1] to-[#006ba6]"></div>
//                         <div className="p-8 flex flex-col md:flex-row items-center gap-6">
//                             <div className="md:w-1/4 flex justify-center">
//                                 <div
//                                     className="w-24 h-24 rounded-full bg-[#25d0b1]/20 flex items-center justify-center text-4xl"
//                                     style={{ animation: "rotate360 5s infinite" }}
//                                 >
//                                     {strategies[1].icon}
//                                 </div>
//                             </div>
//                             <div className="md:w-3/4">
//                                 <h3 className="text-2xl font-bold text-white mb-4">{strategies[1].title}</h3>
//                                 <p className="text-white/90 text-lg mb-6">{strategies[1].text}</p>
//                                 <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-gradient-to-r from-[#25d0b1] to-[#006ba6]"
//                                         style={{ animation: "progressBar 5s infinite" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Strategic Partnerships - SECOND WIDE CONTAINER */}
//                     <div
//                         className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden w-full"
//                         style={{ animation: "slideFromLeft 5s infinite" }}
//                     >
//                         <div className="h-2 w-full bg-gradient-to-r from-[#006ba6] to-[#25d0b1]"></div>
//                         <div className="p-8 flex flex-col md:flex-row items-center gap-6">
//                             <div className="md:w-1/4 flex justify-center">
//                                 <div
//                                     className="w-24 h-24 rounded-full bg-[#006ba6]/20 flex items-center justify-center text-4xl"
//                                     style={{ animation: "bounce 5s infinite" }}
//                                 >
//                                     {strategies[2].icon}
//                                 </div>
//                             </div>
//                             <div className="md:w-3/4">
//                                 <h3 className="text-2xl font-bold text-white mb-4">{strategies[2].title}</h3>
//                                 <p className="text-white/90 text-lg mb-6">{strategies[2].text}</p>
//                                 <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-gradient-to-r from-[#006ba6] to-[#25d0b1]"
//                                         style={{ animation: "progressBarReverse 5s infinite" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Two-column layout for remaining strategies */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {/* Patient-Friendly Tools - THIRD WIDE CONTAINER (in its column) */}
//                         <div
//                             className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden h-full"
//                             style={{ animation: "scaleUpDown 5s infinite" }}
//                         >
//                             <div className="h-2 w-full bg-[#25d0b1]"></div>
//                             <div className="p-6">
//                                 <div className="mb-4">
//                                     <div
//                                         className="w-16 h-16 rounded-full bg-[#25d0b1]/20 flex items-center justify-center text-3xl mx-auto"
//                                         style={{ animation: "pulse 5s infinite" }}
//                                     >
//                                         {strategies[0].icon}
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-white text-center mb-3">{strategies[0].title}</h3>
//                                 <p className="text-white/80 text-center mb-4">{strategies[0].text}</p>
                                
//                                 <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-[#25d0b1]"
//                                         style={{ animation: "widthPulse 5s infinite" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Streamlined Referrals - FOURTH WIDE CONTAINER (in its column) */}
//                         <div
//                             className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden h-full"
//                             style={{ animation: "flipCard 5s infinite" }}
//                         >
//                             <div className="h-2 w-full bg-[#006ba6]"></div>
//                             <div className="p-6">
//                                 <div className="mb-4">
//                                     <div
//                                         className="w-16 h-16 rounded-full bg-[#006ba6]/20 flex items-center justify-center text-3xl mx-auto"
//                                         style={{ animation: "pulse 5s infinite" }}
//                                     >
//                                         {strategies[3].icon}
//                                     </div>
//                                 </div>
//                                 <h3 className="text-xl font-bold text-white text-center mb-3">{strategies[3].title}</h3>
//                                 <p className="text-white/80 text-center mb-4">{strategies[3].text}</p>
                                
//                                 <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-[#006ba6]"
//                                         style={{ animation: "widthPulse 5s infinite" }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         {/* Modern Screening - Regular card */}
//                         <div
//                             className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden col-span-2 md:col-span-1 md:col-start-2"
//                             style={{ animation: "float 5s infinite" }}
//                         >
//                             <div className="h-1.5 w-full bg-gradient-to-r from-[#25d0b1] to-[#006ba6]"></div>

//                             <div className="p-6">
//                                 <div className="flex items-center mb-4">
//                                     <div
//                                         className="w-12 h-12 rounded-full bg-[#25d0b1]/10 flex items-center justify-center text-2xl mr-4"
//                                         style={{ animation: "pulse 5s infinite" }}
//                                     >
//                                         {strategies[4].icon}
//                                     </div>
//                                     <h3 className="text-xl font-bold text-white">{strategies[4].title}</h3>
//                                 </div>

//                                 <p className="text-white/80 mb-4">{strategies[4].text}</p>
                                
//                                 <div
//                                     className="h-0.5 bg-[#006ba6]/40 mt-4 rounded-full"
//                                     style={{
//                                         width: "40%",
//                                         animation: "lineWidth 5s infinite"
//                                     }}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Stats Section */}
//                 <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-black">
//                     <div className="backdrop-blur-sm border border-white/10 p-6 md:p-8 text-center"
//                         style={{ animation: "float 5s infinite 0.2s" }}>
//                         <p className="text-white/60 uppercase text-sm tracking-wider mb-2">By</p>
//                         <p className="text-[#25d0b1] text-4xl md:text-5xl font-bold mb-4"
//                             style={{ animation: "pulse 5s infinite" }}>
//                             2030
//                         </p>
//                         <p className="text-white text-xl">Reach <span className="font-bold">80%</span> screening uptake</p>
//                     </div>

//                     <div className="backdrop-blur-sm border border-white/10 p-6 md:p-8 text-center"
//                         style={{ animation: "float 5s infinite 0.6s" }}>
//                         <p className="text-white/60 uppercase text-sm tracking-wider mb-2">By</p>
//                         <p className="text-[#006ba6] text-4xl md:text-5xl font-bold mb-4"
//                             style={{ animation: "pulse 5s infinite 0.5s" }}>
//                             2035
//                         </p>
//                         <p className="text-white text-xl">Reduce deaths by <span className="font-bold">80%</span></p>
//                     </div>
//                 </div>

//                 {/* CTA and Mission Statement */}
//                 <div className="mt-10 flex flex-col gap-10">
//                     <div className="text-center">
//                         <a
//                             href="/strategy-details"
//                             className="inline-flex items-center px-8 py-3.5 bg-[#006ba6] text-white hover:bg-[#006ba6]/80 font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//                             style={{ animation: "shadowPulse 5s infinite" }}
//                         >
//                             Explore Full Strategy
//                             <svg
//                                 className="ml-2 w-5 h-5"
//                                 style={{ animation: "moveArrow 5s infinite" }}
//                                 viewBox="0 0 20 20"
//                                 fill="currentColor"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                         </a>
//                     </div>

//                     <div className="bg-[#006ba6] backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 text-center"
//                         style={{ animation: "shadowPulse 5s infinite 1s" }}>
//                         <p className="text-white/90 text-lg">
//                             This is our national contribution — powered by doctors, supported by sponsors, embraced by citizens.
//                             <span className="ml-2 text-white">🇸🇬</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Animation keyframes */}
//             <style jsx>{`
//                 @keyframes pulse {
//                     0%, 100% { opacity: 1; }
//                     50% { opacity: 0.7; }
//                 }
                
//                 @keyframes float {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-8px); }
//                 }
                
//                 @keyframes lineWidth {
//                     0%, 100% { width: 30%; opacity: 0.5; }
//                     50% { width: 70%; opacity: 0.8; }
//                 }
                
//                 @keyframes shadowPulse {
//                     0%, 100% { box-shadow: 0 4px 6px rgba(0, 107, 166, 0.2); }
//                     50% { box-shadow: 0 4px 15px rgba(0, 107, 166, 0.4); }
//                 }
                
//                 @keyframes moveArrow {
//                     0%, 100% { transform: translateX(0); }
//                     50% { transform: translateX(5px); }
//                 }
                
//                 @keyframes glow {
//                     0%, 100% { text-shadow: 0 0 0 rgba(37, 208, 177, 0); }
//                     50% { text-shadow: 0 0 10px rgba(37, 208, 177, 0.3); }
//                 }
                
//                 @keyframes slideFromRight {
//                     0%, 100% { transform: translateX(0); }
//                     50% { transform: translateX(-10px); }
//                 }
                
//                 @keyframes slideFromLeft {
//                     0%, 100% { transform: translateX(0); }
//                     50% { transform: translateX(10px); }
//                 }
                
//                 @keyframes progressBar {
//                     0%, 100% { width: 0%; }
//                     50% { width: 100%; }
//                 }
                
//                 @keyframes progressBarReverse {
//                     0%, 100% { width: 100%; }
//                     50% { width: 0%; }
//                 }
                
//                 @keyframes rotate360 {
//                     0% { transform: rotate(0deg); }
//                     25% { transform: rotate(10deg); }
//                     50% { transform: rotate(0deg); }
//                     75% { transform: rotate(-10deg); }
//                     100% { transform: rotate(0deg); }
//                 }
                
//                 @keyframes bounce {
//                     0%, 100% { transform: translateY(0); }
//                     50% { transform: translateY(-12px); }
//                 }
                
//                 @keyframes scaleUpDown {
//                     0%, 100% { transform: scale(1); }
//                     50% { transform: scale(1.03); }
//                 }
                
//                 @keyframes flipCard {
//                     0%, 100% { transform: perspective(1000px) rotateY(0deg); }
//                     50% { transform: perspective(1000px) rotateY(5deg); }
//                 }
                
//                 @keyframes widthPulse {
//                     0%, 100% { width: 20%; }
//                     50% { width: 80%; }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default NationalStrategySection;


























// src/components/NationalStrategySection.tsx
import React from "react";
import { motion } from "framer-motion";

interface StrategyItem {
    id: number;
    icon: string;
    title: string;
    text: string;
}

const strategies: StrategyItem[] = [
    {
        id: 1,
        icon: "🩺",
        title: "Patient-Friendly Tools",
        text: "Empower GPs and labs with patient-friendly screening tools"
    },
    {
        id: 2,
        icon: "📢",
        title: "Public Education",
        text: "Launch bold public education campaigns"
    },
    {
        id: 3,
        icon: "🤝",
        title: "Strategic Partnerships",
        text: "Activate public-private partnerships"
    },
    {
        id: 4,
        icon: "🗓️",
        title: "Streamlined Referrals",
        text: "Enable timely referral and scheduling of colonoscopy"
    },
    {
        id: 5,
        icon: "🔬",
        title: "Modern Screening",
        text: "Adopt modern, non-invasive blood-based screening options"
    }
];

const NationalStrategySection: React.FC = () => {
    return (
        <section className="relative py-20 px-4 md:px-8 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#006ba6]/10 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#006ba6]/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#006ba6]/10 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-flex items-center px-4 py-1.5 bg-[#006ba6]/10 rounded-full mb-6"
                        style={{ animation: "pulse 5s infinite" }}
                    >
                        <span className="h-2 w-2 rounded-full bg-[#006ba6] mr-2"></span>
                        <span className="text-[#004f8c] text-sm font-medium">NATIONAL APPROACH</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004f8c] mb-6">
                        OUR NATIONAL
                        <span
                            className="ml-3 text-[#006ba6]"
                            style={{ animation: "glow 5s infinite" }}
                        >
                            STRATEGY
                        </span>
                    </h2>

                    <div className="h-1 w-24 bg-[#006ba6] mx-auto mb-8"></div>

                    <p className="text-[#004f8c] max-w-3xl mx-auto text-lg mb-12">
                        Our comprehensive approach combines innovative methods and partnerships to drive meaningful change in colorectal cancer prevention nationwide.
                    </p>
                </div>

                {/* Strategy Cards - WIDER CONTAINERS */}
                <div className="grid grid-cols-1 gap-8 mb-16">
                    {/* Public Education - FIRST WIDE CONTAINER */}
                    <div
                        className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden w-full"
                        style={{ animation: "slideFromRight 5s infinite" }}
                    >
                        <div className="h-2 w-full bg-[#006ba6]"></div>
                        <div className="p-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="md:w-1/4 flex justify-center">
                                <div
                                    className="w-24 h-24 rounded-full bg-[#006ba6]/20 flex items-center justify-center text-4xl"
                                    style={{ animation: "rotate360 5s infinite" }}
                                >
                                    {strategies[1].icon}
                                </div>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-2xl font-bold text-white mb-4">{strategies[1].title}</h3>
                                <p className="text-white/90 text-lg mb-6">{strategies[1].text}</p>
                                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#006ba6]"
                                        style={{ animation: "progressBar 5s infinite" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Strategic Partnerships - SECOND WIDE CONTAINER */}
                    <div
                        className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden w-full"
                        style={{ animation: "slideFromLeft 5s infinite" }}
                    >
                        <div className="h-2 w-full bg-[#006ba6]/80"></div>
                        <div className="p-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="md:w-1/4 flex justify-center">
                                <div
                                    className="w-24 h-24 rounded-full bg-[#006ba6]/20 flex items-center justify-center text-4xl"
                                    style={{ animation: "bounce 5s infinite" }}
                                >
                                    {strategies[2].icon}
                                </div>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-2xl font-bold text-white mb-4">{strategies[2].title}</h3>
                                <p className="text-white/90 text-lg mb-6">{strategies[2].text}</p>
                                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#006ba6]/80"
                                        style={{ animation: "progressBarReverse 5s infinite" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Two-column layout for remaining strategies */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Patient-Friendly Tools - THIRD WIDE CONTAINER (in its column) */}
                        <div
                            className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden h-full"
                            style={{ animation: "scaleUpDown 5s infinite" }}
                        >
                            <div className="h-2 w-full bg-[#006ba6]/60"></div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <div
                                        className="w-16 h-16 rounded-full bg-[#006ba6]/20 flex items-center justify-center text-3xl mx-auto"
                                        style={{ animation: "pulse 5s infinite" }}
                                    >
                                        {strategies[0].icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-3">{strategies[0].title}</h3>
                                <p className="text-white/80 text-center mb-4">{strategies[0].text}</p>
                                
                                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#006ba6]/60"
                                        style={{ animation: "widthPulse 5s infinite" }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* Streamlined Referrals - FOURTH WIDE CONTAINER (in its column) */}
                        <div
                            className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden h-full"
                            style={{ animation: "flipCard 5s infinite" }}
                        >
                            <div className="h-2 w-full bg-[#006ba6]/40"></div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <div
                                        className="w-16 h-16 rounded-full bg-[#006ba6]/20 flex items-center justify-center text-3xl mx-auto"
                                        style={{ animation: "pulse 5s infinite" }}
                                    >
                                        {strategies[3].icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white text-center mb-3">{strategies[3].title}</h3>
                                <p className="text-white/80 text-center mb-4">{strategies[3].text}</p>
                                
                                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#006ba6]/40"
                                        style={{ animation: "widthPulse 5s infinite" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Modern Screening - Regular card */}
                        <div
                            className="bg-zinc-400 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden col-span-2 md:col-span-1 md:col-start-2"
                            style={{ animation: "float 5s infinite" }}
                        >
                            <div className="h-1.5 w-full bg-[#006ba6]/50"></div>

                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div
                                        className="w-12 h-12 rounded-full bg-[#006ba6]/10 flex items-center justify-center text-2xl mr-4"
                                        style={{ animation: "pulse 5s infinite" }}
                                    >
                                        {strategies[4].icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{strategies[4].title}</h3>
                                </div>

                                <p className="text-white/80 mb-4">{strategies[4].text}</p>
                                
                                <div
                                    className="h-0.5 bg-[#006ba6]/40 mt-4 rounded-full"
                                    style={{
                                        width: "40%",
                                        animation: "lineWidth 5s infinite"
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-black">
                    <div className="backdrop-blur-sm border border-white/10 p-6 md:p-8 text-center"
                        style={{ animation: "float 5s infinite 0.2s" }}>
                        <p className="text-white/60 uppercase text-sm tracking-wider mb-2">By</p>
                        <p className="text-[#006ba6] text-4xl md:text-5xl font-bold mb-4"
                            style={{ animation: "pulse 5s infinite" }}>
                            2030
                        </p>
                        <p className="text-white text-xl">Reach <span className="font-bold">80%</span> screening uptake</p>
                    </div>

                    <div className="backdrop-blur-sm border border-white/10 p-6 md:p-8 text-center"
                        style={{ animation: "float 5s infinite 0.6s" }}>
                        <p className="text-white/60 uppercase text-sm tracking-wider mb-2">By</p>
                        <p className="text-[#006ba6] text-4xl md:text-5xl font-bold mb-4"
                            style={{ animation: "pulse 5s infinite 0.5s" }}>
                            2035
                        </p>
                        <p className="text-white text-xl">Reduce deaths by <span className="font-bold">80%</span></p>
                    </div>
                </div>

                {/* CTA and Mission Statement */}
                <div className="mt-10 flex flex-col gap-10">
                    <div className="text-center">
                        <a
                            href="/strategy-details"
                            className="inline-flex items-center px-8 py-3.5 bg-[#006ba6] text-white hover:bg-[#006ba6]/80 font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            style={{ animation: "shadowPulse 5s infinite" }}
                        >
                            Explore Full Strategy
                            <svg
                                className="ml-2 w-5 h-5"
                                style={{ animation: "moveArrow 5s infinite" }}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="bg-[#006ba6] backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 text-center"
                        style={{ animation: "shadowPulse 5s infinite 1s" }}>
                        <p className="text-white/90 text-lg">
                            This is our national contribution — powered by doctors, supported by sponsors, embraced by citizens.
                            <span className="ml-2 text-white">🇸🇬</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Animation keyframes */}
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
                    0%, 100% { width: 30%; opacity: 0.5; }
                    50% { width: 70%; opacity: 0.8; }
                }
                
                @keyframes shadowPulse {
                    0%, 100% { box-shadow: 0 4px 6px rgba(0, 107, 166, 0.2); }
                    50% { box-shadow: 0 4px 15px rgba(0, 107, 166, 0.4); }
                }
                
                @keyframes moveArrow {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(5px); }
                }
                
                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 0 rgba(0, 107, 166, 0); }
                    50% { text-shadow: 0 0 10px rgba(0, 107, 166, 0.3); }
                }
                
                @keyframes slideFromRight {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(-10px); }
                }
                
                @keyframes slideFromLeft {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(10px); }
                }
                
                @keyframes progressBar {
                    0%, 100% { width: 0%; }
                    50% { width: 100%; }
                }
                
                @keyframes progressBarReverse {
                    0%, 100% { width: 100%; }
                    50% { width: 0%; }
                }
                
                @keyframes rotate360 {
                    0% { transform: rotate(0deg); }
                    25% { transform: rotate(10deg); }
                    50% { transform: rotate(0deg); }
                    75% { transform: rotate(-10deg); }
                    100% { transform: rotate(0deg); }
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                }
                
                @keyframes scaleUpDown {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.03); }
                }
                
                @keyframes flipCard {
                    0%, 100% { transform: perspective(1000px) rotateY(0deg); }
                    50% { transform: perspective(1000px) rotateY(5deg); }
                }
                
                @keyframes widthPulse {
                    0%, 100% { width: 20%; }
                    50% { width: 80%; }
                }
            `}</style>
        </section>
    );
};

export default NationalStrategySection;
