import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar2 from './Components/Navbar/Navbar2';
import Footer from './Components/Footer/Footer';
import LoginForm from './Components/Login/Login';
import Home from './Pages/Home';
import SignUpForm from './Components/SignUp/SignUp';
import { createTheme, ThemeProvider } from '@material-ui/core';
import AdminLoginForm from './Components/AdminLogin/AdminLogin';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import AddProduct from './Components/AdminPanelComponents/AddProduct/AddProduct';
import AdminManageProducts from './Components/AdminPanelComponents/AdminManageProducts/AdminManageProducts';
import Prices from './Pages/Prices/Prices';
import Explore from './Pages/Explore/Explore';
import Product from './Pages/Product/Product';
import Order from './Pages/Order/Order';
import UserPanel from './Pages/UserPanel/UserPanel';
function App() {
  const theme = createTheme({
    direction: "rtl",
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
            <Route path='/adminlogin' exact element={<AdminLoginForm />} />
            <Route path='/signup' exact element={<SignUpForm />} />
            <Route path='/adminpanel' exact element={<AdminPanel />} />
            <Route path='/adminpanel/addproduct' exact element={<AddProduct />} />
            <Route path='/adminpanel/manageproducts' exact element={<AdminManageProducts />} />
            <Route path='/prices' exact element={<Prices />} />
            <Route path='/products' exact element={<Explore />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/order' element={<Order />} />
            <Route path='/user/panel' element={<UserPanel />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
