import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
