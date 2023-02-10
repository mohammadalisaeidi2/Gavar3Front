import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, makeStyles } from '@material-ui/core'
import useFetch from '../../../hooks/useFetch';
import axios from 'axios';
import { Delete, Edit } from '@material-ui/icons';
import './AdminManageOrders.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'jalali-moment'







function AdminManageOrders() {
    const [allProducts, setAllProducts] = useState([]);
    const [getReq] = useFetch();
    const [orders, setOrders] = useState([]);



    useEffect(() => {
        getReq({
            url: `/api/order/all/`,
            method: "GET",
        }).then(res => {
            console.log('get response')
            let arr = [];
            for (var i in res) {
                arr.push(res[i])
            }
            setOrders(orders.concat(arr));
        }).catch(exp => {
            console.log("could not fetch p")
            toast.error('دریافت سفارشات با خطا مواجه شد', {
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

    const click = () => {
        console.log(orders)
    }

    return (
        <div className='admin-order-container'>
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
            <div className='admin-order-paper'>
                {orders && orders.map((item, index) => (
                    <div className='admin-order-card'>
                        <h4>سفارش {index + 1}</h4>
                        <div>
                            <img src='http://localhost:4000/static/order.png' />
                        </div>
                        <p style={{ fontWeight: 'bold' }}> {item.orderProducts.length}  محصول </p>
                        <p style={{ fontWeight: 'bold' }}> {moment(item.createdAt.substring(0,10)).format('jYYYY/jMM/jDD')}  </p>
                        <p style={{ fontWeight: 'bold' }}>آدرس:</p>
                        <p> {item.orderAddress}  </p>
                        <Button variant='contained' color='primary' onClick={click}>مشاهده جزیات</Button>
                    </div>
                ))
                }
            </div>
        </div>

    )
}


export default AdminManageOrders