import React, { useEffect, useState } from 'react'
import './UserOrders.css'
import useFetch from '../../../hooks/useFetch'
import { Button } from '@material-ui/core';

function UserOrders({ user }) {
    const [getReq] = useFetch();
    const [orders, setOrders] = useState([]);


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
                        <div>




                            <img src={'http://localhost:4000/sgtatic/'  } />
                            <img src={'http://localhost:4000/sgtatic/' } />

                        </div>
                        <Button variant='contained' color='primary' onClick={click}>مشاهده جزیات</Button>
                        <p>{item.createdAt}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default UserOrders