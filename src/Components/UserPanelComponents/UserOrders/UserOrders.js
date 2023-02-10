import React, { useEffect, useState } from 'react'
import './UserOrders.css'
import useFetch from '../../../hooks/useFetch'
import { Button } from '@material-ui/core';
import moment from 'jalali-moment'


function UserOrders({ user }) {
    const [getReq] = useFetch();
    const [imageReq] = useFetch();
    const [orders, setOrders] = useState([]);
    const [productsImages, setproductsImages] = useState([]);



    useEffect(() => {
        getReq({
            url: `/api/order/user/` + user._id,
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
        })


    }, [])



    const click = () => {
        console.log(orders)
    }



    return (
        <div className='user-order-container'>
            <div className='user-order-paper'>
                {orders && orders.map((item, index) => (
                    <div className='user-order-card'>
                        <h4>سفارش {index + 1}</h4>
                        <p style={{ fontWeight: 'bold',color:"#454545" }}> {moment(item.createdAt.substring(0,10)).format('jYYYY/jMM/jDD')}  </p>
                        <div>
                            <img src='http://localhost:4000/static/order.png'/>
                        </div>
                        <Button variant='contained' color='primary' onClick={click}>مشاهده جزیات</Button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default UserOrders