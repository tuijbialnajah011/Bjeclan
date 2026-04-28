/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import { Navbar } from './components/layout/Navbar';

// Lazy loading pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Members = lazy(() => import('./pages/Members'));
const MemberDetail = lazy(() => import('./pages/MemberDetail'));
const Terms = lazy(() => import('./pages/Terms'));

// Loading fallback
const PageLoader = () => (
  <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#050505]">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin mb-4" />
      <span className="text-slate-500 font-mono text-sm tracking-widest uppercase">Loading System...</span>
    </div>
  </div>
);

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#050505] text-slate-200 font-mono selection:bg-red-500/30">
          <Navbar />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/members" element={<Members />} />
              <Route path="/members/:id" element={<MemberDetail />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}


