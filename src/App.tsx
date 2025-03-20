import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import QualityPage from './pages/QualityPage';
import ContactPage from './pages/ContactPage';
import WhatsAppButton from './generalComponents/WhatsAppButton'; // Import the WhatsApp button
import BottlesPage from './pages/Bottles';
import PreformsPage from './pages/preforms';
import JarsPage from './pages/Jars';

export function App() {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/quality' element={<QualityPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/bottles' element={<BottlesPage />} />
            <Route path='/preforms' element={< PreformsPage/>} />
            <Route path='/jars' element={< JarsPage/>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton /> {/* Ensures button is always available */}
      </div>
    </Router>
  );
}
