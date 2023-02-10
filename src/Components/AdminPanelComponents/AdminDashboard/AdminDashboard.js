import { ListItem, Typography } from '@material-ui/core'
import { LibraryAdd, Money, Person, Shop } from '@material-ui/icons'
import React from 'react'
import './AdminDashboard.css'

function AdminDashboard() {
    return (
        <div className='dashboard-container'>
            <div className='website-info'>
                <div className='orders'>
                    <span>
                        <Shop />
                    </span>
                    <p>2397</p>
                    <h5>سفارش ماهانه</h5>
                </div>
                <div className='products'>
                    <span>
                        <LibraryAdd />
                    </span>
                    <p>26346</p>
                    <h5>محصول</h5>
                </div>
                <div className='users'>
                    <span>
                        <Person />
                    </span>
                    <p>36347</p>
                    <h5>کاربر</h5>
                </div>
                <div className='income'>
                    <span>
                        <Money />
                    </span>
                    <p>78.2m</p>
                    <h5>فروش ماهانه</h5>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard