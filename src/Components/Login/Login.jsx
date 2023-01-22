import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyle = makeStyles((theme) => ({
    paperStyle: {
        padding: '30px',
        height: '70vh',
        width: '30vw',
        margin: "20px auto",
        marginTop: "20vh",
        marginBottom:"10vh",
        borderRadius: "10px",
        fontFamily: "Vazir-Medium"
    },
    avatarStyle: {
        backgroundColor: '#1bbd7e',
        marginBottom: "30px"
    },
    btnstyle: {
        margin: '8px 0'
    },
    inputs: {
        margin: "10px auto"
    },
    input: {
        fontFamily: "Vazir-Medium",
        marginBottom: "5px"
    },
    options:{
        marginTop:"40px",
    },

}));



function LoginForm() {
    const classes = useStyle();
    return (
        <Grid>
            <Paper elevation={5} className={classes.paperStyle} >
                <Grid align='center' direction='rtl'>
                    <Avatar className={classes.avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>ورود به حساب کاربری</h2>
                </Grid>
                <div className={classes.inputs}>
                    <TextField variant='outlined' label='نام کاربری' placeholder='نام کاربری را وارد کنید' fullWidth required className={classes.input} />
                    <TextField variant='outlined' label='رمز عبور' placeholder='رمزعبور را وارد کنید' type='password' fullWidth required className={classes.input} />
                </div>
                <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>ورود</Button>
                <div className={classes.options}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="مرا به خاطر بسپار"
                    />
                    <p >
                        <Link href="#" >
                            رمز خود را فراموش کرده اید؟
                        </Link>
                    </p>
                    <p > حساب کاربری ندارید؟
                        <Link href="/signup" >
                            ساخت حساب کاربری
                        </Link>
                    </p>
                </div>
            </Paper>
        </Grid>
    )
}

export default LoginForm