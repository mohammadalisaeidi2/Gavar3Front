import { Button, Container } from '@material-ui/core'
import React, { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import './AdminPanel.css'
import AdminManageProducts from '../../Components/AdminPanelComponents/AdminManageProducts/AdminManageProducts'
import AddProduct from '../../Components/AdminPanelComponents/AddProduct/AddProduct'
import { Add, Dashboard, Edit, Person, VerifiedUser } from '@material-ui/icons'
function AdminPanel() {
  const [showAddproduct, setShowAddProduct] = useState(false);
  const [showManageProduct, setShowManageProduct] = useState(false);

  const handleAdd = () => {
    setShowAddProduct(true)
    setShowManageProduct(false)
  }
  const handleManage = () => {
    setShowManageProduct(true)
    setShowAddProduct(false)
  }

  return (
    <div className='container'>
      <div className='sidebar-container'>
        <div className='menu-items'>
          <div className='menu-item'>
            <Dashboard className='menu-icon' />
            <a className='menu-title'>
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
        </div>
      </div>
      <div className='component-container'>
        {showAddproduct && <AddProduct />}
        {showManageProduct && <AdminManageProducts />}
      </div>
    </div>
  )
}

export default AdminPanel