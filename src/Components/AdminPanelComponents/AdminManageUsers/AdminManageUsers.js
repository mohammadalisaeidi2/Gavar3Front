import { Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './AdminManageUsers.css'

function AdminManageUsers() {
    const [users, setUsers] = useState([]);
    const [getReq] = useFetch();




    useEffect(() => {
        getReq({
            url: `/api/user/getall/`,
            method: "GET",
        }).then(res => {
            console.log('get response users')
            let arr = [];
            for (var i in res) {
                arr.push(res[i])
            }
            setUsers(users.concat(arr));

        }).catch(exp => {
            console.log("could not fetch users")
            toast.error('دریافت کاربران با خطا مواجه شد', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });


        })
    }, [])


    const onEdit = (userId) => {

    }




    return (
        <div className='admin-manageuser-container'>
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
                theme="light"
            />
            <div className='admin-manageuser-stat'>
                <p>تعداد کل: {users.length}</p>
            </div>
            {users && users.map((user) => (
                <div className='admin-manageuser-item'>
                    <div className='admin-manageuser-item-wrapper'>
                        <div className='admin-manageuser-item-info'>
                            <h3>{user.userName}</h3>
                            <h3>{user.userFamily}</h3>
                            <p>{user.userEmail}</p>
                        </div>
                        <div className='admin-manageuser-item-edit'>
                            <Button
                                variant='outlined'
                                onClick={() => { onEdit(user._id) }}>
                                <Edit />
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default AdminManageUsers