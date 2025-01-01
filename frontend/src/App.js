import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/book/:id'];

  const shouldHideNavbar = hideNavbarRoutes.some((path) =>
    new RegExp(`^${path.replace(':id', '[^/]+')}$`).test(location.pathname)
  );

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideNavbar && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Libro Esfera. All rights reserved.</p>
      </footer>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;