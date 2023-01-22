import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Navbar2 from './Components/Navbar/Navbar2';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/Login/Login';
import Home from './Pages/Home'
import { createTheme, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = createTheme({
    direction:"rtl",
    typography: {
      fontFamily: ['Vazir-Medium']
    }

  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar2 />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' exact element={<LoginForm />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
