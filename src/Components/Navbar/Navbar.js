import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'
import {Search, Person, ShoppingCart,ExpandMore} from '@material-ui/icons'
import {Button} from '@material-ui/core'


function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                <img className='navbar-logo' src={logo} style={{height:"50px"}} alt='logo' />
            </Link>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link className='nav-links'>
                            محصولات ما
                            <ExpandMore style={{color:'#454545'}} />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links'>
                        راهنمای سایز
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links'>
                            قیمت روز طلا
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Person  style={{color:'#454545'}}/>
                    </li>
                    <li className='nav-item'>
                        <ShoppingCart  style={{color:'#454545'}}/>
                    </li>
                </ul>
                <Button variant='outlined' color='#454545' >
                    ورود یا عضویت
                </Button>
           
        </div>
    </nav>
  )
}

export default Navbar