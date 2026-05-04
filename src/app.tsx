import { lazy, Suspense, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import SiteLayout from './layouts/SiteLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const IdeasPage = lazy(() => import('./pages/IdeasPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteScene({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <SiteLayout>
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RouteScene><HomePage /></RouteScene>} />
            <Route path="/projects" element={<RouteScene><ProjectsPage /></RouteScene>} />
            <Route path="/projects/:slug" element={<RouteScene><ProjectDetailPage /></RouteScene>} />
            <Route path="/ideas" element={<RouteScene><IdeasPage /></RouteScene>} />
            <Route path="/about" element={<RouteScene><AboutPage /></RouteScene>} />
            <Route path="/contact" element={<RouteScene><ContactPage /></RouteScene>} />
            <Route path="*" element={<RouteScene><NotFoundPage /></RouteScene>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </SiteLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}
