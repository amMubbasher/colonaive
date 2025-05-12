// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
// import { Container } from './ui/Container';

// export const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8">
//       <Container>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">COLON<span className="text-teal-400">AiVE</span>™</h3>
//             <p className="text-gray-300 mb-4">
//               A National Movement to Outsmart Colorectal Cancer.
//             </p>
//             <p className="text-sm text-gray-400 mb-4">
//               For Lives, Not for Profits.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Twitter className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Youtube className="h-5 w-5" />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4 text-gray-100">Patient Resources</h3>
//             <ul className="space-y-2">
//               <li><Link to="/education/patients" className="text-gray-300 hover:text-white transition-colors">Understand CRC</Link></li>
//               <li><Link to="/get-screened" className="text-gray-300 hover:text-white transition-colors">Screening Options</Link></li>
//               <li><Link to="/clinics" className="text-gray-300 hover:text-white transition-colors">Find a Clinic</Link></li>
//               <li><Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">Track Your Screening</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4 text-gray-100">Professional Portals</h3>
//             <ul className="space-y-2">
//               <li><Link to="/register/clinic" className="text-gray-300 hover:text-white transition-colors">GP Portal</Link></li>
//               <li><Link to="/register/specialist" className="text-gray-300 hover:text-white transition-colors">Specialist Portal</Link></li>
//               <li><Link to="/register/corporate" className="text-gray-300 hover:text-white transition-colors">Corporate CSR</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-bold text-lg mb-4 text-gray-100">About the Movement</h3>
//             <ul className="space-y-2">
//               <li><Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">Our Story</Link></li>
//               <li><Link to="/movement-pillars" className="text-gray-300 hover:text-white transition-colors">Movement Pillars</Link></li>
//               <li><Link to="/vision2035" className="text-gray-300 hover:text-white transition-colors">Vision 2035</Link></li>
//               <li><Link to="/join-the-movement" className="text-gray-300 hover:text-white transition-colors">Join Us</Link></li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-gray-800">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               © {currentYear} COLONAiVE Movement. All rights reserved.
//             </p>
//             <div className="flex mt-4 md:mt-0 space-x-6">
//              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
//   Privacy Policy
// </Link>
// <Link to="/terms-of-use" className="text-gray-400 hover:text-white text-sm transition-colors">
//   Terms of Use
// </Link>
// <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
//   Cookie Policy
// </Link>

//             </div>
//           </div>
//           <div className="mt-6 flex justify-center">
//             <a href="mailto:info@colonaive.ai" className="flex items-center text-gray-400 hover:text-white text-sm transition-colors">
//               <Mail className="h-4 w-4 mr-2" />
//               info@colonaive.ai
//             </a>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };




import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Container } from './ui/Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Social Icons with Animations */}
          <div className="group">
            <h3 className="text-2xl font-bold mb-4 relative inline-block group-hover:scale-105 transition-transform duration-300">
              COLON<span className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300">AiVE</span>™
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
            </h3>
            <p className="text-gray-300 mb-4 group-hover:text-white transition-all duration-300">
              A National Movement to Outsmart Colorectal Cancer.
            </p>
            <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-all duration-300">
              For Lives, Not for Profits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-300 transition-all duration-300 hover:scale-125 transform-gpu">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-300 transition-all duration-300 hover:scale-125 transform-gpu">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-300 transition-all duration-300 hover:scale-125 transform-gpu">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-300 transition-all duration-300 hover:scale-125 transform-gpu">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Patient Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-100 relative inline-block group-hover:text-teal-300 group-hover:scale-105 transition-all duration-300 group">
              Patient Resources
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </h3>
            <ul className="space-y-2">
              {['Understand CRC', 'Screening Options', 'Find a Clinic', 'Track Your Screening'].map((label, index) => (
                <li key={index} className="relative overflow-hidden group">
                  <Link 
                    to={['/education/patients', '/get-screened', '/clinics', '/dashboard'][index]} 
                    className="text-gray-300 hover:text-teal-300 transition-colors duration-300 relative inline-block"
                  >
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Portals Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-100 relative inline-block group-hover:text-teal-300 group-hover:scale-105 transition-all duration-300 group">
              Professional Portals
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </h3>
            <ul className="space-y-2">
              {['GP Portal', 'Specialist Portal', 'Corporate CSR'].map((label, index) => (
                <li key={index} className="relative overflow-hidden group">
                  <Link 
                    to={['/register/clinic', '/register/specialist', '/register/corporate'][index]} 
                    className="text-gray-300 hover:text-teal-300 transition-colors duration-300 relative inline-block"
                  >
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About the Movement Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-100 relative inline-block group-hover:text-teal-300 group-hover:scale-105 transition-all duration-300 group">
              About the Movement
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </h3>
            <ul className="space-y-2">
              {['Our Story', 'Movement Pillars', 'Vision 2035', 'Join Us'].map((label, index) => (
                <li key={index} className="relative overflow-hidden group">
                  <Link 
                    to={['/about-us', '/movement-pillars', '/vision2035', '/join-the-movement'][index]} 
                    className="text-gray-300 hover:text-teal-300 transition-colors duration-300 relative inline-block"
                  >
                    {label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} COLONAiVE Movement. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((label, index) => (
                <Link 
                  key={index}
                  to={['/privacy-policy', '/terms-of-use', '/cookie-policy'][index]} 
                  className="text-gray-400 hover:text-teal-300 text-sm transition-all duration-300 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <a 
              href="mailto:info@colonaive.ai" 
              className="flex items-center text-gray-400 hover:text-teal-300 text-sm transition-all duration-300 group hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
              info@colonaive.ai
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
