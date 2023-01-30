import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Alert } from '@material-ui/lab'


const useStyle = makeStyles((theme) => ({
    paperStyle: {
        padding: '30px',
        height: '70vh',
        width: '30vw',
        margin: "20px auto",
        borderRadius: "10px",
        fontFamily: "Vazir-Medium"
    },
    succesAlert:{
        marginTop:'10vh',
        margin:'auto',
        maxWidth:'40vw',
    },
    errorAlert:{
        margin:'auto',
        maxWidth:'40vw',
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
    options: {
        marginTop: "40px",
    },

}));



function AdminLoginForm() {
    const classes = useStyle();
    const [adminUsername, setAdminUsername] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [loginReq] = useFetch();
    const navigate = useNavigate();
    const onLogin = (event) => {
        console.log("onLogin function")
        event.preventDefault();
        loginReq({
            url: `/api/admin/login`,
            method: "POST",
            data: {
                adminUsername,
                adminPassword
            }
        }).then(res => {

            localStorage.setItem("auth-token", res)
            console.log(res);
            //navigate("/");


            window.location.reload();
        }).catch(exp => {
            console.log(JSON.stringify(exp));
            // Todo: use toast

            alert("incorrect username or password.")
        })
    }




    return (
        <Grid>
            <Alert Alert variant="filled" severity="success" className={classes.succesAlert}>
                      با موفقیت وارد شدید    
            </Alert >
            <Alert variant="filled" severity="error" className={classes.errorAlert}>
                نام کاربری یا رمزعبور اشتباه است
            </Alert>
            <Paper elevation={5} className={classes.paperStyle} >
                <Grid align='center' direction='rtl'>
                    <Avatar className={classes.avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>ورود ادمین</h2>
                </Grid>
                <div className={classes.inputs}>
                    <TextField
                        variant='outlined'
                        label='نام کاربری'
                        placeholder='نام کاربری را وارد کنید'
                        fullWidth required className={classes.input}
                        onInput={e => { setAdminUsername(e.target.value) }}
                    />
                    <TextField
                        variant='outlined'
                        label='رمز عبور'
                        placeholder='رمزعبور را وارد کنید'
                        type='password'
                        fullWidth required className={classes.input}
                        onInput={e => { setAdminPassword(e.target.value) }}
                    />
                </div>
                <Button
                    type='submit'
                    color='primary'
                    variant="contained"
                    className={classes.btnstyle}
                    fullWidth
                    onClick={onLogin}>ورود
                </Button>
            </Paper>
        </Grid>
    )
}

export default AdminLoginForm