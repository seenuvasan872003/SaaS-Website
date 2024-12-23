import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Streamlined from './components/Streamlined';
import TrackProgress from './components/TrackProgress';
import UsersSay from './components/UsersSay';
import SignUpfree from './components/SignUp';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero/>
        <TrackProgress/>
        <Streamlined/>
        <Pricing/>
        <UsersSay/>
        <SignUpfree/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

