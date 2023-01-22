import { alpha, AppBar, Button, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { ExpandMore, Menu, Person, Search, ShoppingCart } from "@material-ui/icons"
import { Link } from "react-router-dom";
import logo from './logo.png'
const useStyle = makeStyles((theme) => ({
    appbar: {
        backgroundColor: "transparent",
        backgroundColor: "#f5f5dc",
        boxShadow: "none",
        fontFamily: "Vazir-Medium",
        height: "10vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "right",
        position: "fixed",
        top: "0"
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
    navbarIcons: {
        marginRight: "36vw",
        display: "flex",
        alignItems: "center",

    },
    navbarButton: {
        marginRight: "3vw",
        fontFamily: "Vazir-Medium",
    },

}));

function Navbar2() {
    const classes = useStyle();
    return (
        <div>
            <AppBar position="static" dir="rtl" className={classes.appbar}>
                <Toolbar className={classes.navbarContainer}>
                    <Link to='/' className={classes.navbarLogo}>
                        <img src={logo} style={{ height: "50px" }} alt='logo' />
                    </Link>
                    <Link className={classes.navbarItem} to='/'>
                        <p>محصولات ما </p>
                        <ExpandMore style={{ color: '#454545', marginRight: "5px" }} />
                    </Link>
                    <Link className={classes.navbarItem}>
                        <p > قیمت روز طلا</p>
                    </Link>
                    <Link className={classes.navbarItem}>
                        <p > راهنمای سایز</p>
                    </Link>
                    <div className={classes.navbarIcons}>
                        <Link>
                            <Person style={{ color: '#454545', marginLeft: "1vw" }} />
                        </Link>
                        <Link>
                            <ShoppingCart style={{ color: '#454545' }} />
                        </Link>
                    </div>
                    <Link to='/login' style={{textDecoration:"none"}}>
                        <Button variant='outlined' color='#454545' className={classes.navbarButton} >
                        <p>ورود یا عضویت</p>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>

        </div>

    );
}

export default Navbar2;













