import { alpha, AppBar, Badge, Button, Divider, IconButton, InputBase, makeStyles, MenuItem, Toolbar, Typography } from "@material-ui/core"
import { CastConnectedOutlined, ExitToApp, ExpandMore, HttpsOutlined, MoreVert, Person, Search, ShoppingCart } from "@material-ui/icons"
import Menu from '@material-ui/core/Menu';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from './logo.png'
const useStyle = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "transparent",
        //backgroundColor: "#f5f5dc",
        backgroundColor: 'rgb(193, 192, 143)',
        boxShadow: "none",
        fontFamily: "Vazir-Medium",
        height: "10vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "right",
        position: "fixed",
        top: "0",
        paddingLeft:'0'
    },
    navbarContainer: {

    },
    navbarLogo: {
        marginLeft: "5vw",
        display: "flex",
        alignItems: "center",
    },
    navbarItem: {
        marginLeft: "20px",
        fontSize: "17px",
        color: "#454545",
        textDecoration: "none",
        display: "flex",
        marginLeft: "3%"
    },

    navbarButton: {
        marginRight: "10px",
        fontFamily: "Vazir-Medium",
    },
    navbarIcons: {
        marginRight: "610px",
        display: "flex",
        alignItems: "center",

    },

}));



function Navbar2() {
    const classes = useStyle();
    const [cart, setCart] = useState([]);
    const [cartsNumber, setCartsNumber] = useState(0);
    const [loggedin, setLoggedin] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        if (localStorage.getItem('cart') === null) {
            setCart([]);
        } else {
            setCart(JSON.parse(localStorage.getItem('cart')))
        }

        if (Date.now() < localStorage.getItem('token-expiration-date')) {
            console.log('logged in........')
            setLoggedin(true);
        }


    }, [])


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };




    const onExit = () => {
        setAnchorEl(null);
        localStorage.removeItem('token');
        localStorage.removeItem('token-expiration-date');
        navigate("/");
        window.location.reload();


    }

    return (
        <div>
            <AppBar position="static" dir="rtl" className={classes.appbar}>
                <Toolbar className={classes.navbarContainer}>
                    <Link to='/' className={classes.navbarLogo}>
                        <img src={logo} style={{ height: "50px" }} alt='logo' />
                    </Link>
                    <Link className={classes.navbarItem} to='/products'>
                        <p>محصولات ما </p>
                    </Link>
                    <Link className={classes.navbarItem} to='/prices'>
                        <p > قیمت روز طلا</p>
                    </Link>
                    <Link to='/SizeGuidance' className={classes.navbarItem}>
                        <p > راهنمای سایز</p>
                    </Link>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to='user/panel' style={{ textDecoration: 'none', color: 'inherit' }}> <MenuItem onClick={handleClose} >پروفایل کاربری</MenuItem></Link>
                        <MenuItem onClick={onExit}>خروج <ExitToApp style={{ marginRight: '10px' }} /></MenuItem>
                    </Menu>


                    <div className={classes.navbarIcons}>
                        {
                            loggedin &&
                            <Person onClick={handleClick} style={{ color: '#454545', marginLeft: "1vw", marginTop: '0px', cursor: 'pointer' }} />
                        }

                        <Link to='/order'>
                            <Badge color="error" badgeContent={cart.length}>
                                <ShoppingCart style={{ color: '#454545' }} />
                            </Badge>
                        </Link>
                    </div>
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        {!loggedin && <Button variant='outlined' color='#454545' className={classes.navbarButton} >
                            <p>ورود یا عضویت</p>
                        </Button>}
                    </Link>
                </Toolbar>
            </AppBar>

        </div>

    );
}

export default Navbar2;













