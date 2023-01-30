import { Container } from '@material-ui/core'
import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import AdminSidebar from '../../Components/AdminPanelComponents/AdminSidebar/AdminSidebar'
import './AdminPanel.css'
import AddProduct from '../../Components/AdminPanelComponents/AddProduct/AddProduct'
function AdminPanel() {
  return (
    <div className='container'>
      <AdminSidebar />
      <AddProduct />
    </div>
  )
}

export default AdminPanel