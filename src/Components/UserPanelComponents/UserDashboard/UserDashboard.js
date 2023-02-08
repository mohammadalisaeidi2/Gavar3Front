import { colors, ListItem, Typography } from '@material-ui/core'
import { LibraryAdd, Money, Person, Shop } from '@material-ui/icons'
import React from 'react'
import './UserDashboard.css'



function UserDashboard({ user }) {
    return (
        <div className='user-dashboard-container'>
            <div className='website-info'>
                <h2 style={{marginBottom:'40px',
                textAlign:'right',
                marginRight:"15%",
                color:'#303030',
                backgroundColor:"#eee",
                padding:'10px',
                borderRadius:'5px'}}>سلام{'  '}{user?.userName && user.userName} </h2>

                <div className='products'>
                    <span>
                        <LibraryAdd />
                    </span>
                    <p>18</p>
                    <h5>سفارش ها</h5>
                </div>
                <div className='orders'>
                    <span>
                        <Shop />
                    </span>
                    <p>1</p>
                    <h5>سفارش درحال پردازش</h5>
                </div>

                <div className='income'>
                    <span>
                        <Money />
                    </span>
                    <p>5</p>
                    <h5> سفارش مرجوع شده</h5>
                </div>
            </div>

        </div>
    )
}

export default UserDashboard