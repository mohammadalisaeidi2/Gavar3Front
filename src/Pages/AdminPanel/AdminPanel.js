import React, { useState } from 'react'
import './AdminPanel.css'

import AdminManageProducts from '../../Components/AdminPanelComponents/AdminManageProducts/AdminManageProducts'
import AddProduct from '../../Components/AdminPanelComponents/AddProduct/AddProduct'
import AdminDashboard from '../../Components/AdminPanelComponents/AdminDashboard/AdminDashboard'
import AdminManageOrders from '../../Components/AdminPanelComponents/AdminManageOrders/AdminManageOrders'
import { Add, Dashboard, Edit, Person, PhotoCamera, VerifiedUser } from '@material-ui/icons'
function AdminPanel() {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showAddproduct, setShowAddProduct] = useState(false);
  const [showManageProduct, setShowManageProduct] = useState(false);
  const [showorders, setShowOrders] = useState(false);


  const handleDashboard = () =>{
    setShowDashboard(true)
    setShowAddProduct(false)
    setShowManageProduct(false)
    setShowOrders(false)
  }
  const handleAdd = () => {
    setShowAddProduct(true)
    setShowManageProduct(false)
    setShowDashboard(false)
    setShowOrders(false)
  }
  const handleManage = () => {
    setShowManageProduct(true)
    setShowAddProduct(false)
    setShowDashboard(false)
    setShowOrders(false)
  }
  const handleOrders = () => {
    setShowOrders(true)
    setShowManageProduct(false)
    setShowAddProduct(false)
    setShowDashboard(false)
  }


  return (
    <div className='container'>
      <div className='sidebar-container'>
        <div className='menu-items'>
          <div className='menu-item'>
            <Dashboard className='menu-icon' />
            <a className='menu-title' onClick={handleDashboard}>
              داشبورد
            </a>
          </div>
          <a className='menu-item' onClick={handleAdd}>
            <Add className='menu-icon' />
            <a className='menu-title'>
              افزون محصول
            </a>
          </a>
          <a className='menu-item' onClick={handleManage}>
            <Edit className='menu-icon' />
            <a className='menu-title'>
              مشاهده محصولات
            </a>
          </a>
          <a className='menu-item'>
            <Person className='menu-icon' />
            <a className='menu-title'>
              مشاهده کاربران
            </a>
          </a>
          <a className='menu-item' onClick={handleOrders}>
            <PhotoCamera className='menu-icon' />
            <a className='menu-title'>
               مشاهده سفارش ها 
            </a>
          </a>
          <a className='menu-item'>
            <PhotoCamera className='menu-icon' />
            <a className='menu-title'>
              مدیریت محتوا 
            </a>
          </a>
        </div>
      </div>
      <div className='component-container'>
        {showAddproduct && <AddProduct />}
        {showManageProduct && <AdminManageProducts />}
        {showDashboard && <AdminDashboard />}
        {showorders && <AdminManageOrders />}
      </div>
    </div>
  )
}

export default AdminPanel