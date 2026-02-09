import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutApproach from './pages/AboutApproach';
import TeamPage from './pages/TeamPage';
import OccupationalTherapy from './pages/services/OccupationalTherapy';
import GamingInformedTherapy from './pages/services/GamingInformedTherapy';
import MinecraftProgram from './pages/services/MinecraftProgram';
import AssessmentsReports from './pages/services/AssessmentsReports';
import SleepProgram from './pages/services/SleepProgram';
import ForReferrers from './pages/ForReferrers';
import ContactPage from './pages/ContactPage';
import LearnPDA from './pages/learn/LearnPDA';
import LearnLateDiagnosis from './pages/learn/LearnLateDiagnosis';
import LearnExecutiveFunction from './pages/learn/LearnExecutiveFunction';
// 1. Import the new component
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      {/* 2. Add it here, inside Router but outside Routes */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about">
            <Route path="approach" element={<AboutApproach />} />
            <Route path="team" element={<TeamPage />} />
          </Route>
          <Route path="services">
            <Route path="occupational-therapy" element={<OccupationalTherapy />} />
            <Route path="gaming-informed-therapy" element={<GamingInformedTherapy />} />
            <Route path="minecraft-program" element={<MinecraftProgram />} />
            <Route path="assessments-reports" element={<AssessmentsReports />} />
            <Route path="sleep-program" element={<SleepProgram />} />
          </Route>
          <Route path="for-referrers" element={<ForReferrers />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="learn">
            <Route path="understanding-pda" element={<LearnPDA />} />
            <Route path="late-autism-diagnosis" element={<LearnLateDiagnosis />} />
            <Route path="executive-function-complex-health" element={<LearnExecutiveFunction />} />
          </Route>
        </Route>
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
