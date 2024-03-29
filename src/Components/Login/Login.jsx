import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Alert } from '@material-ui/lab'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useStyle = makeStyles((theme) => ({
    paperStyle: {
        padding: '30px',
        height: '70vh',
        width: '30vw',
        margin: "15vh auto",
        borderRadius: "10px",
        fontFamily: "Vazir-Medium"
    },
    succesAlert: {
        marginTop: '10px',
        margin: 'auto',
        maxWidth: '40vw',
        justifyContent: 'center'
    },
    errorAlert: {
        marginBottom: '20px',
        textAlign: 'center',
        justifyContent: 'center'
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



function LoginForm() {
    const classes = useStyle();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loginReq] = useFetch();
    const navigate = useNavigate();
    const onLogin = (event) => {
        console.log("onLogin function")

        event.preventDefault();
        loginReq({
            url: `/api/user/login`,
            method: "POST",
            data: {
                userEmail,
                userPassword
            }
        }).then(res => {
            toast.success('با موفقیت وارد شدید', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => {
                localStorage.setItem("token", res)
                localStorage.setItem('token-expiration-date', Date.now() + 12000000)
                console.log(res)
                navigate("/user/panel");
                window.location.reload();
            }, 1000)
        }).catch(exp => {
            console.log(JSON.stringify(exp))
            toast.error('نام کاربری یا رمزعبور اشتباه است', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
    }




    return (
        <Grid>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Paper elevation={5} className={classes.paperStyle} >

                <Grid align='center' direction='rtl'>
                    <Avatar className={classes.avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>ورود به حساب کاربری</h2>
                </Grid>
                <div className={classes.inputs}>
                    <TextField
                        variant='outlined'
                        label='ایمیل '
                        placeholder='example@info.com'
                        fullWidth required className={classes.input}
                        onInput={e => { setUserEmail(e.target.value) }}
                    />
                    <TextField
                        variant='outlined'
                        label='رمز عبور'
                        placeholder=''
                        type='password'
                        fullWidth required className={classes.input}
                        onInput={e => { setUserPassword(e.target.value) }}
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