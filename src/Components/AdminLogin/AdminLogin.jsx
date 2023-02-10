import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Navigate, useNavigate } from 'react-router-dom';
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
        marginBottom: "30px",
        marginTop: '40px'
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
    const [showError, setShowError] = useState(false);
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
            setShowError(false)
            toast.success('باموفقیت وارد شدید', {
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
                localStorage.setItem("admin-token", res)
                navigate('/adminpanel')
            }, 2000)
        }).catch(exp => {
            console.log(JSON.stringify(exp));

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
            <Paper elevation={5} className={classes.paperStyle} >
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
                    onClick={(event) => onLogin(event)}>ورود
                </Button>
            </Paper>
        </Grid>
    )
}

export default AdminLoginForm