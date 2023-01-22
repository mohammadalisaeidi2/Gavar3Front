import { alpha, AppBar, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { AttachMoney, Check, Home, Menu, Search,Send,SettingsBackupRestore,Shop } from "@material-ui/icons"

const useStyle = makeStyles((theme) => ({
    title:{
        fontFamily:"Vazir-Medium",
        textAlign:"center",
        marginTop:"100px",
        color:"#333",
    },
    container:{
        width:"70%",
        height:"150px",
        backgroundColor:"#f5f5dc",
        margin:"40px auto",
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily:"Vazir-Medium",
        borderRadius:"10px",
        boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)"
    },
    feature:{
        width:"15%",
        margin:"10px auto",
        padding:"5px",
        textAlign:"center",
    },
    featureIcon:{
        margin:"0 auto",
        fontSize:"40px",
        color:"#454545"

    },
    featureTitle:{
        color:"#454545"
    }

}));

function Features() {
    const classes = useStyle();
    return (
        <div>
            <h2 className={classes.title}>چرا گوارسه ؟</h2>
            <div className={classes.container}>
                <div className={classes.feature}>
                    <Home className={classes.featureIcon}/>
                    <p className={classes.featureTitle}>پرداخت در منزل</p>
                </div>
                <div className={classes.feature}>
                    <AttachMoney className={classes.featureIcon}/>
                    <p className={classes.featureTitle}>تضمین قیمت</p>
                </div>
                <div className={classes.feature}>
                    <Check className={classes.featureIcon}/>
                    <p className={classes.featureTitle}>تضمین اصالت کالا</p>
                </div>
                <div className={classes.feature}>
                    <SettingsBackupRestore className={classes.featureIcon}/>
                    <p className={classes.featureTitle}> عودت کالا تا ۷روز</p>
                </div>
                <div className={classes.feature}>
                    <Send className={classes.featureIcon}/>
                    <p className={classes.featureTitle}>ارسال رایگان </p>
                </div>
            </div>
        </div>
    );
}

export default Features;













