import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Add } from '@material-ui/icons';


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
        marginBottom: "1vh"
    },
    title:{
        marginBottom:"5vh"
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

}));



function SignUpForm() {
    const classes = useStyle();
    return (
        <Grid>
            <Paper elevation={5} className={classes.paperStyle} >
                <Grid align='center' direction='rtl'>
                    <Avatar className={classes.avatarStyle}><Add /></Avatar>
                    <h2 className={classes.title} >ساخت حساب جدید</h2>
                </Grid>
                <div className={classes.inputs}>
                    <TextField variant='outlined' label='نام و نام خانوادگی ' placeholder='' fullWidth required className={classes.input} />
                    <TextField variant='outlined' label='ایمیل ' placeholder='example@info.com' fullWidth required className={classes.input} />
                    <TextField variant='outlined' label='رمز عبور' placeholder='حداقل ۸ رقم' type='password' fullWidth required className={classes.input} />
                </div>
                <Button type='submit' color='primary' variant="contained" className={classes.btnstyle} fullWidth>ساخت حساب جدید</Button>
            </Paper>
        </Grid>
    )
}

export default SignUpForm