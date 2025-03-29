import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import SignupForm from './components/signup-form-demo';
// import SignupForm from '@/components/signup-form-demo';

// import HomePage from '@/pages/HomePage';
// import AboutPage from '@/pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* Add more routes as needed */}
          <Route path="/signup" element={<SignupForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
