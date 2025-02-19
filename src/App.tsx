
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Members from './components/Members';
import MatrixBackground from './components/MatrixBackground';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text font-mono relative">
        <MatrixBackground />
        <Navbar />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;