import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatBot } from './components/chat/ChatBot';
import { ScrollToTop } from './components/ScrollToTop';

// --- Existing Page Imports ---
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AboutUsPage from './pages/AboutUsPage';
import AdvisorsPage from './pages/about/AdvisorsPage';
import ClinicsPage from './pages/ClinicsPage';
import EarlySymptomsPage from './pages/EarlySymptomsPage';
import ScreeningPage from './pages/ScreeningPage';
import PillarsPage from './pages/PillarsPage';
import JoinMovementPage from './pages/JoinMovementPage';
import Vision2035Page from './pages/Vision2035Page';
import StrategyPage from './pages/StrategyPage';
import FindGPPage from './pages/FindGPPage';
import CSRShowcasePage from './pages/CSRShowcasePage';
import ClinicalTrialsPage from './pages/ClinicalTrialsPage';
import ComingSoonPage from './pages/ComingSoonPage';
import UpcomingEventsPage from './pages/UpcomingEventsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import CookiePolicyPage from './pages/CookiePolicyPage';

// Education - Patients
import PatientEducationHub from './pages/education/patients';
import ColorectalCancerPage from './pages/education/patients/colorectal-cancer';
import EarlySymptomsOfCRC from './pages/education/patients/early-symptoms-of-crc';
import ColonoscopyGoldStandard from './pages/education/patients/colonoscopy-gold-standard';
import HowCRCDevelopsFromPolyps from './pages/education/patients/how-crc-develops-from-polyps';

// Education - Clinicians
import ClinicianEducationHub from './pages/education/clinicians';
import KaiserCRCStudyPage from './pages/education/clinicians/kaiser-crc-study';

// Education - Common
import FAQsPage from './pages/education/FAQsPage';
import NewsroomPage from './pages/education/NewsroomPage';
import ResourcesPage from './pages/education/ResourcesPage';

// Registration
import ClinicianSignupPage from './pages/ClinicianSignupPage';
import ClinicRegistrationPage from './pages/ClinicRegistrationPage';
import SpecialistRegistrationPage from './pages/SpecialistRegistrationPage';
import CorporateInterestForm from './pages/CorporateInterestForm';
import ClinicianThankYouPage from './pages/ClinicianThankYouPage';

// Dashboard
import DashboardPage from './pages/DashboardPage';
import PatientDashboard from './pages/PatientDashboard';
import ChampionDashboard from './pages/ChampionDashboard';
import ClinicProfilePage from './pages/ClinicProfilePage';

// Pillars
import RIDCRCPUBPage from './pages/pillars/RIDCRCPUBPage';
import RIDCRCSGPPage from './pages/pillars/RIDCRCSGPPage';
import RIDCRCGOVPage from './pages/pillars/RIDCRCGOVPage';
import RIDCRCCSRPage from './pages/pillars/RIDCRCCSRPage';
import RIDCRCEDUPage from './pages/pillars/RIDCRCEDUPage';

// --- NEW SIGN-UP PAGE IMPORTS ---
import MemberSignUpPage from './pages/member-sign-up'; // Assumes index.tsx in folder
import ClinicSignUpPage from './pages/clinic-sign-up';   // Assumes index.tsx in folder
import SpecialistSignUpPage from './pages/specialist-sign-up'; // Assumes index.tsx in folder
import SponsorSignUpPage from './pages/sponsor-sign-up';   // Assumes index.tsx in folder

const MainRoutes = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/about/advisors" element={<AdvisorsPage />} />
          <Route path="/clinics" element={<ClinicsPage />} />
          <Route path="/early-symptoms" element={<EarlySymptomsPage />} />
          <Route path="/get-screened" element={<ScreeningPage />} />
          <Route path="/movement-pillars" element={<PillarsPage />} />
          <Route path="/join-the-movement" element={<JoinMovementPage />} />
          <Route path="/vision2035" element={<Vision2035Page />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/find-a-gp" element={<FindGPPage />} />
          <Route path="/csr-showcase" element={<CSRShowcasePage />} />
          <Route path="/clinical-trials" element={<ClinicalTrialsPage />} />
          <Route path="/track-screening" element={<ComingSoonPage />} />
          <Route path="/lab-portal" element={<ComingSoonPage />} />
          <Route path="/gp-portal" element={<ComingSoonPage />} />
          <Route path="/specialist-portal" element={<ComingSoonPage />} />
          <Route path="/corporate-portal" element={<ComingSoonPage />} />
          <Route path="/tracking" element={<ComingSoonPage />} />
          <Route path="/upcoming-events" element={<UpcomingEventsPage />} />

          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />

          {/* Education - Patients */}
          <Route path="/education/patients" element={<PatientEducationHub />} />
          <Route path="/education/patients/colorectal-cancer" element={<ColorectalCancerPage />} />
          <Route path="/education/patients/early-symptoms-of-crc" element={<EarlySymptomsOfCRC />} />
          <Route path="/education/patients/colonoscopy-gold-standard" element={<ColonoscopyGoldStandard />} />
          <Route path="/education/patients/how-crc-develops-from-polyps" element={<HowCRCDevelopsFromPolyps />} />

          {/* Education - Clinicians */}
          <Route path="/education/clinicians" element={<ClinicianEducationHub />} />
          <Route path="/education/clinicians/kaiser-crc-study" element={<KaiserCRCStudyPage />} />

          {/* Education - Common */}
          <Route path="/education/faqs" element={<FAQsPage />} />
          <Route path="/education/newsroom" element={<NewsroomPage />} />
          <Route path="/education/resources" element={<ResourcesPage />} />
          <Route path="/education/upcoming-events" element={<UpcomingEventsPage />} />

          {/* --- NEW SIGN-UP ROUTES --- */}
          <Route path="/signup">
            <Route path="member" element={<MemberSignUpPage />} />
            <Route path="clinic" element={<ClinicSignUpPage />} />
            <Route path="specialist" element={<SpecialistSignUpPage />} />
            <Route path="sponsor" element={<SponsorSignUpPage />} />
          </Route>

          {/* Existing Registration (Consider if these should merge or stay separate from /signup) */}
          <Route path="/register">
            <Route index element={<ClinicianSignupPage />} /> {/* Note: This is the old one, not the new SpecialistSignUpPage */}
            <Route path="clinic" element={<ClinicRegistrationPage />} /> {/* Note: This is the old one, not the new ClinicSignUpPage */}
            <Route path="specialist" element={<SpecialistRegistrationPage />} /> {/* Note: This is the old one, not the new SpecialistSignUpPage */}
            <Route path="corporate" element={<CorporateInterestForm />} /> {/* Note: This is the old one, not the new SponsorSignUpPage */}
            <Route path="thank-you" element={<ClinicianThankYouPage />} />
          </Route>
          {/*
            NOTE: You now have two sets of registration/sign-up pages:
            1. The new ones under `/signup/*` (Member, Clinic, Specialist, Sponsor)
            2. Your existing ones under `/register/*` (Clinician, Clinic, Specialist, Corporate)

            You might want to:
            - Decide which set to use moving forward.
            - Rename or redirect old routes if the new ones replace them.
            - Ensure clarity for users on which sign-up/registration path to take.
            For example, if the new `/signup/clinic` replaces `/register/clinic`,
            you might remove the old `/register/clinic` route or redirect it.
          */}


          {/* Dashboard */}
          <Route path="/dashboard">
            <Route index element={<DashboardPage />} />
            <Route path="patient" element={<PatientDashboard />} />
            <Route path="champion" element={<ChampionDashboard />} />
            <Route path="clinician" element={<ComingSoonPage />} />
          </Route>

          {/* Profile */}
          <Route path="/profile">
            <Route path="clinic" element={<ClinicProfilePage />} />
            <Route path="specialist" element={<ComingSoonPage />} />
          </Route>

          {/* Pillars */}
          <Route path="/pillars">
            <Route path="rid-crc-pub" element={<RIDCRCPUBPage />} />
            <Route path="rid-crc-sgp" element={<RIDCRCSGPPage />} />
            <Route path="rid-crc-gov" element={<RIDCRCGOVPage />} />
            <Route path="rid-crc-csr" element={<RIDCRCCSRPage />} />
            <Route path="rid-crc-edu" element={<RIDCRCEDUPage />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default MainRoutes;