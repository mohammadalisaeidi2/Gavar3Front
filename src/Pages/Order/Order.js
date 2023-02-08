import { Button, TextField } from '@material-ui/core';
import { ShopOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './Order.css'
import jwt_decode from "jwt-decode";

function Order() {

    const [data, setData] = useState();
    const [getReq] = useFetch();
    const [orderReq] = useFetch();
    const [orderPhone, setOrderPhone] = useState();
    const [orderAddress, setOrderAddress] = useState();
    const [orderProducts, setOrderProducts] = useState([]);
    const [orderUserId, setOrderUserId] = useState();

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
    const [order, setOrder] = useState([]);



    const onRemove = (index) => {
        var newcart = cart
        var neworder = order
        setCart(newcart.splice(index, 1))
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload();

    }

    const onOrder = () => {
        order.map((item) => (
            setOrderProducts(orderProducts => [...orderProducts, item._id])
        ))
        var decoded = jwt_decode(localStorage.getItem('token'));
        setOrderUserId(decoded._id)

        console.log(decoded._id)
        console.log(orderUserId)

        orderReq({
            url: `/api/order/add/`,
            method: "POST",
            data: {
                orderUserId,
                orderProducts,
                orderPhone,
                orderAddress
            }
        }).then(res => {
            console.log('get response')
            localStorage.setItem('cart',JSON.stringify([]));
        }).catch(exp => {
            console.log("could not fetch p")
        })

    }



    useEffect(() => {
            console.log(orderProducts)

            cart.map((item) => (
                getReq({
                    url: `/api/product/find/` + item.id,
                    method: "GET",
                }).then(res => {
                    console.log('get response')
                    setOrder(order => [...order, res])
                }).catch(exp => {
                    console.log("could not fetch p")
                })
            ))

        

    }, [])


    return (
        <div className='order-container'>
            <div className='order-preview'>
                <h3>سبد خرید </h3>
                {order.map((data, index) => (
                    <div className='cart-item'>
                        {data?.productImages && <img src={'http://localhost:4000/static/' + data.productImages[0]}></img>}
                        <div className='cart-item-info'>
                            <p>{data?.productTitle && data.productTitle}</p>
                            <p>سایز:{data?.productAvailability && data.productAvailability[0].size}- وزن: {data?.productAvailability && data.productAvailability[0].weight}</p>
                            <p>رنگ: {data?.productColor && data.productColor}</p>
                        </div>
                        <Button variant="contained" color="secondary" onClick={() => { onRemove(index) }}>حذف محصول</Button>
                    </div>
                ))}
            </div>
            <div className='order-paper'>
                <h3>تکمیل اطلاعات خرید</h3>

                <div className='order-address'>
                    <h4>آدرس دریافت محصول</h4>
                    <textarea
                        onInput={e => { setOrderAddress(e.target.value) }}
                    />
                </div>

                <div className='order-phone'>
                    <h4>شماره همراه</h4>
                    <TextField
                        variant='outlined'
                        label='همراه'
                        placeholder=''
                        required className=''
                        onInput={e => { setOrderPhone(e.target.value) }}
                    />
                </div>
                <Button variant='contained' color='primary' onClick={onOrder}>ثبت نهایی سفارش</Button>

            </div>
        </div>
    )
}

export default Order