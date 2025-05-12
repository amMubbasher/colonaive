import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import HeroSection from "../components/HeroSection";
import { Button } from '../components/ui/Button';
import EvidenceSection from "../components/EvidenceSection";
import PillarGrid from '../components/PillarGrid';
import PillarsSection from "../components/PillarsSection";
import NationalTargetsSection from "../components/NationalTargetsSection";
import CrisisSection from "../components/CrisisSection"; // adjust path if needed
import { UpcomingEventsPopup } from '../components/UpcomingEventsPopup';
import NationalStrategySectionPage from './NationalStrategySectionPage';

const HomePage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen relative max-w-[100%]">
      {/* Hero Section */}
      <HeroSection />

      {/* Current Crisis Section */}
      <CrisisSection />

      {/* Why Colonoscopy Matters */}

      {/* <section className="py-16 px-6 bg-yellow-50">
        <Container>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-8">
              WHY COLONOSCOPY MATTERS
            </h2>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Colonoscopy is the gold standard for diagnosis and treatment. Early detection and removal of polyps can prevent CRC.
            </p>
            <p className="text-2xl italic text-blue-700 font-medium max-w-3xl mx-auto">
              "Where Treatment Begins While Screening"
            </p>
          </div>
        </Container>
      
        <Container>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 tracking-tight">
              🎁 Our SG60 Gift: A Healthier Nation, Together.
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-6">
              By <strong>2030</strong>, we pledge to reach <strong>80% screening</strong> uptake — and reduce colorectal cancer deaths by <strong>80%</strong> by <strong>2035</strong>.
            </p>
            <p className="text-lg md:text-xl italic text-gray-700 max-w-3xl mx-auto">
              This is our national contribution — powered by doctors, supported by sponsors, embraced by citizens. 🇸🇬
            </p>
            <Link
              to="/join-the-movement"
              className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold shadow-md transition"
            >
              Be Part of This Gift
            </Link>
          </div>
        </Container>
      </section> */}
























<section className="py-16 md:py-24 lg:py-28 relative overflow-hidden">
  {/* Background elements with subtle animation */}
  <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
  <div 
    className="absolute inset-0 opacity-5"
    style={{
      backgroundImage: "radial-gradient(circle, #0b1e3b 1px, transparent 1px)",
      backgroundSize: "30px 30px"
    }}
  ></div>
  
  {/* Colonoscopy Section */}
  <Container className="relative z-10">
    <div className="max-w-6xl mx-auto text-center mb-20 md:mb-32">
      {/* Animated tag */}
      <div 
        className="inline-block mb-6 overflow-hidden"
        style={{
          animation: "fadeInDown 0.8s ease-out, pulse 5s ease-in-out infinite",
          animationDelay: "0s, 1s"
        }}
      >
        <span className="bg-[#25D0B1]/10 text-[#0b1e3b] px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
          CRITICAL INFORMATION
        </span>
      </div>
      
      {/* Animated heading */}
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1e3b] mb-6"
        style={{
          animation: "fadeIn 1s ease-out, headingColor 5s ease-in-out infinite",
          animationDelay: "0.3s, 2s"
        }}
      >
        WHY COLONOSCOPY MATTERS
      </h2>
      
      {/* Animated divider */}
      <div 
        className="h-1 w-24 bg-[#25D0B1] mx-auto mb-10 rounded-full"
        style={{
          animation: "scaleX 0.8s ease-out, widthPulse 5s ease-in-out infinite",
          animationDelay: "0.5s, 2s",
          transformOrigin: "center"
        }}
      ></div>
      
      {/* Animated paragraph */}
      <p 
        className="text-lg md:text-xl text-[#0b1e3b]/80 max-w-4xl mx-auto mb-12 leading-relaxed"
        style={{
          animation: "fadeIn 1s ease-out",
          animationDelay: "0.7s"
        }}
      >
        Colonoscopy is the <span className="font-semibold">gold standard</span> for diagnosis and treatment. 
        Early detection and removal of polyps can <span className="text-[#25D0B1] font-medium">prevent colorectal cancer</span> before it develops.
      </p>
      
      {/* Quote box with animation */}
      <div 
        className="relative py-10 px-6 md:px-10 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto border-l-4 border-[#25D0B1]"
        style={{
          animation: "fadeIn 1s ease-out, floatUpDown 5s ease-in-out infinite",
          animationDelay: "0.9s, 3s"
        }}
      >
        {/* Quote icon */}
        <svg className="absolute top-5 left-5 text-[#25D0B1]/20 w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        {/* Quote text */}
        <p className="text-xl md:text-2xl lg:text-3xl italic text-[#0b1e3b] font-medium">
          "Where Treatment Begins While Screening"
        </p>
      </div>
    </div>
  </Container>
  
  {/* SG60 Gift Section */}
  <div className="relative py-20 md:py-24">
    {/* Decorative top edge */}
    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white to-transparent z-10"></div>
    
    {/* Background with animation */}
    <div 
      className="absolute inset-0 bg-[#0b1e3b] z-0"
      style={{
        animation: "backgroundPulse 5s ease-in-out infinite",
        animationDelay: "2s"
      }}
    ></div>
    
    {/* Animated decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#25D0B1]/10 blur-3xl"
        style={{ animation: "moveAround 10s ease-in-out infinite" }}
      ></div>
      <div 
        className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[#25D0B1]/5 blur-3xl"
        style={{ animation: "moveAround 8s ease-in-out infinite reverse" }}
      ></div>
    </div>
    
    <Container className="relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated badge */}
        <div 
          className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-8"
          style={{
            animation: "fadeIn 1s ease-out, glowPulse 5s ease-in-out infinite",
            animationDelay: "0.2s, 1s"
          }}
        >
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D0B1] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D0B1]"></span>
          </span>
          <span className="text-[#25D0B1] font-medium tracking-wider text-sm">NATIONAL INITIATIVE</span>
        </div>
        
        {/* Animated heading */}
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
          style={{
            animation: "fadeIn 1s ease-out",
            animationDelay: "0.4s"
          }}
        >
          🎁 Our SG60 Gift: 
          <span 
            className="block text-[#25D0B1] mt-2"
            style={{
              animation: "pulseText 5s ease-in-out infinite",
              animationDelay: "1s"
            }}
          >
            A Healthier Nation, Together.
          </span>
        </h2>
        
        {/* Statistics cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto my-12">
          {/* 2030 Card */}
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 "
            style={{
              animation: "fadeIn 1s ease-out, cardPulse 5s ease-in-out infinite",
              animationDelay: "0.6s, 2s"
            }}
          >
            <p className="text-white/80 text-lg mb-2">By</p>
            <p 
              className="text-[#25D0B1] text-5xl font-bold mb-4"
              style={{
                animation: "scaleNumbers 5s ease-in-out infinite",
                animationDelay: "2.5s"
              }}
            >
              2030
            </p>
            <p className="text-white text-xl">Reach <strong>80%</strong> screening uptake</p>
          </div>
          
          {/* 2035 Card */}
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 "
            style={{
              animation: "fadeIn 1s ease-out, cardPulse 5s ease-in-out infinite",
              animationDelay: "0.8s, 2.5s"
            }}
          >
            <p className="text-white/80 text-lg mb-2">By</p>
            <p 
              className="text-[#25D0B1] text-5xl font-bold mb-4"
              style={{
                animation: "scaleNumbers 5s ease-in-out infinite",
                animationDelay: "3s"
              }}
            >
              2035
            </p>
            <p className="text-white text-xl">Reduce deaths by <strong>80%</strong></p>
          </div>
        </div>
        
        {/* Mission statement */}
        <div 
          className="max-w-3xl mx-auto mb-12 bg-white/5 p-6 rounded-xl border border-white/10"
          style={{
            animation: "fadeIn 1s ease-out, floatUpDown 5s ease-in-out infinite",
            animationDelay: "1s, 4s"
          }}
        >
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            This is our national contribution — powered by doctors, supported by sponsors, embraced by citizens.
            <span className="ml-2 text-white">🇸🇬</span>
          </p>
        </div>
        
        {/* CTA Button */}
        <Link
          to="/join-the-movement"
          className="group inline-flex items-center gap-2 bg-[#25D0B1] hover:bg-[#25D0B1]/90 text-[#0b1e3b] py-4 px-8 rounded-xl font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#25D0B1]/20"
          style={{
            animation: "fadeIn 1s ease-out, buttonGlow 5s ease-in-out infinite",
            animationDelay: "1.2s, 3s"
          }}
        >
          Be Part of This Gift
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transition-transform group-hover:translate-x-1" 
            style={{
              animation: "moveArrow 5s ease-in-out infinite",
              animationDelay: "3.5s"
            }}
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </Container>
  </div>
  
  {/* Animation keyframes */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes scaleX {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }
    
    @keyframes widthPulse {
      0%, 100% { width: 96px; }
      50% { width: 120px; }
    }
    
    @keyframes headingColor {
      0%, 100% { color: #0b1e3b; }
      50% { color: #25D0B1; }
    }
    
    @keyframes floatUpDown {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    
    @keyframes backgroundPulse {
      0%, 100% { background-color: #0b1e3b; }
      50% { background-color: #0a1729; }
    }
    
    @keyframes moveAround {
      0% { transform: translate(0, 0); }
      33% { transform: translate(40px, 20px); }
      66% { transform: translate(-20px, 40px); }
      100% { transform: translate(0, 0); }
    }
    
    @keyframes glowPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(37, 208, 177, 0); }
      50% { box-shadow: 0 0 15px 0 rgba(37, 208, 177, 0.3); }
    }
    
    @keyframes pulseText {
      0%, 100% { text-shadow: 0 0 0 rgba(37, 208, 177, 0); }
      50% { text-shadow: 0 0 10px rgba(37, 208, 177, 0.5); }
    }
    
    @keyframes cardPulse {
      0%, 100% { transform: scale(1); border-color: rgba(255, 255, 255, 0.2); }
      50% { transform: scale(1.02); border-color: rgba(37, 208, 177, 0.4); }
    }
    
    @keyframes scaleNumbers {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    @keyframes buttonGlow {
      0%, 100% { box-shadow: 0 4px 6px rgba(37, 208, 177, 0.2); }
      50% { box-shadow: 0 4px 20px rgba(37, 208, 177, 0.4); }
    }
    
    @keyframes moveArrow {
      0%, 100% { transform: translateX(0); }
      50% { transform: translateX(5px); }
    }
  `}</style>
</section>
      

      {/* The 5 Pillars */}
<PillarsSection />

      {/* National Strategy */}
      {/* <section className="py-16 px-6 bg-orange-50">
        <Container>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 mb-8">
              OUR NATIONAL STRATEGY
            </h2>
            <ul className="max-w-4xl mx-auto space-y-4 text-left">
              <li>• Empower GPs and labs with patient-friendly screening tools</li>
              <li>• Launch bold public education campaigns</li>
              <li>• Activate public-private partnerships</li>
              <li>• Enable timely referral and scheduling of colonoscopy</li>
              <li>• Adopt modern, non-invasive blood-based screening options</li>
            </ul>
          </div>
        </Container>
      </section> */}


      <NationalStrategySectionPage/>

      <EvidenceSection />

      {/* National Targets */}
      {/* <NationalTargetsSection /> */}

      {/* Join the Movement */}
      {/* <section className="py-16 px-6 bg-green-50">
        <Container>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
              JOIN THE MOVEMENT
            </h2>
            <p className="text-xl max-w-4xl mx-auto mb-12">
              Be part of the national effort to outsmart colorectal cancer.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <Link to="/register/clinic" className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold shadow-md">GP/Clinic Registration</Link>
              <Link to="/register/specialist" className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold shadow-md">Specialist Registration</Link>
              <Link to="/register/corporate" className="bg-yellow-600 hover:bg-yellow-700 text-white py-4 px-6 rounded-lg font-semibold shadow-md">CSR Sponsor Sign-up</Link>
              <Link to="/join-the-movement" className="bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-lg font-semibold shadow-md">Community Volunteer</Link>
            </div>
          </div>
        </Container>
      </section> */}








<section className="py-16 md:py-24 px-4 md:px-14  relative overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 w-full h-16 bg-gradient-to-b from-[#25D0B1]/10 to-transparent"></div>
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#25D0B1]/5 blur-3xl"></div>
  </div>

  <Container className='bg-[#004f8c] py-5'>
    <div className="max-w-6xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center px-4 py-1.5 bg-[#25D0B1]/10 rounded-full mb-6">
        <span className="h-2 w-2 rounded-full bg-[#25D0B1] mr-2"></span>
        <span className="text-[#25D0B1] text-sm font-medium">PARTICIPATE</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        JOIN THE <span className="text-[#25D0B1]">MOVEMENT</span>
      </h2>
      
      <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
        Be part of the national effort to outsmart colorectal cancer.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12">
        <Link 
          to="/register/clinic" 
          className="flex items-center justify-center h-14 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-[#25D0B1]/30 transition-all duration-300 font-medium"
        >
          GP/Clinic Registration
        </Link>
        
        <Link 
          to="/register/specialist" 
          className="flex items-center justify-center h-14 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-[#25D0B1]/30 transition-all duration-300 font-medium"
        >
          Specialist Registration
        </Link>
        
        <Link 
          to="/register/corporate" 
          className="flex items-center justify-center h-14 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-[#25D0B1]/30 transition-all duration-300 font-medium"
        >
          CSR Sponsor Sign-up
        </Link>
        
        <Link 
          to="/join-the-movement" 
          className="flex items-center justify-center h-14 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-[#25D0B1]/30 transition-all duration-300 font-medium"
        >
          Community Volunteer
        </Link>
      </div>
      
      <div className="inline-flex items-center px-6 py-3 bg-[#25D0B1] rounded-full transition-all duration-300 hover:bg-[#25D0B1]/90">
        <Link to="/learn-more" className="text-[#010D21] font-semibold flex items-center">
          Learn More
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  </Container>
</section>



























      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <Container>
          <div className="max-w-6xl mx-auto text-center text-sm">
            <p>© {currentYear} Project COLONAiVE™. A public health initiative. All rights reserved.</p>
            <p>Email: <a href="mailto:info@colonaive.ai" className="underline">info@colonaive.ai</a></p>
          </div>
        </Container>
      </footer>

      {/* Popup is outside footer but inside return wrapper */}
         <div className="hidden md:block">
        <UpcomingEventsPopup />
      </div>
    </div> // 👈 CLOSE this outermost wrapper div here
  );
};

export default HomePage;
