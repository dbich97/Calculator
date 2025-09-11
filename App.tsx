import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageCode } from './types';
import AgeCalculatorPage from './pages/AgeCalculatorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';
import Layout from './components/Layout';
import PregnancyCalculatorPage from './pages/PregnancyCalculatorPage';
import OvulationCalculatorPage from './pages/OvulationCalculatorPage';
import MenstrualCycleCalculatorPage from './pages/MenstrualCycleCalculatorPage';
import CalorieCalculatorPage from './pages/CalorieCalculatorPage';

const App: React.FC = () => {
  return (
    <div className="font-sans">
       <BrowserRouter>
        <Routes>
          <Route path="/:lang" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="calculator" element={<AgeCalculatorPage />} />
            <Route path="pregnancy-calculator" element={<PregnancyCalculatorPage />} />
            <Route path="ovulation-calculator" element={<OvulationCalculatorPage />} />
            <Route path="menstrual-cycle-calculator" element={<MenstrualCycleCalculatorPage />} />
            <Route path="calorie-calculator" element={<CalorieCalculatorPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to={`/${LanguageCode.AR}`} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
