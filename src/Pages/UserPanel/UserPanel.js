import React, { useEffect, useState } from 'react'
import './UserPanel.css'
import UserDashboard from '../../Components/UserPanelComponents/UserDashboard/UserDashboard'
import AdminManageOrders from '../../Components/AdminPanelComponents/AdminManageOrders/AdminManageOrders'
import { Add, Dashboard, Edit, ExitToAppOutlined, Person, PhotoCamera, VerifiedUser } from '@material-ui/icons'
import useFetch from '../../hooks/useFetch'
import jwt_decode from "jwt-decode";
import UserOrders from '../../Components/UserPanelComponents/UserOrders/UserOrders'
import { Avatar } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'





function UserPanel() {
  const [showDashboard, setShowDashboard] = useState(true);
  const [showorders, setShowOrders] = useState(false);
  const [user, setUser] = useState();
  const [getReq] = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    var decoded = jwt_decode(localStorage.getItem('token'));

    getReq({
      url: `/api/user/find/` + decoded._id,
      method: "GET",

    }).then(res => {
      console.log('get response')
      setUser(res)


    }).catch(exp => {
      console.log("could not fetch p")
    })


  }, [])

  const onExit = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('token-expiration-date');
    navigate("/");
    window.location.reload();
    

  }



  const handleDashboard = () => {
    setShowDashboard(true)
    setShowOrders(false)
  }


  const handleOrders = () => {
    setShowOrders(true)
    setShowDashboard(false)
  }




  return (
    <div className='user-panel-container'>
      <div className='user-sidebar-container'>

        <div className='user-sidebar-info'>
          <p style={{ marginTop: '100px' }}>{user?.userName && user.userName} </p>
         <button onClick={onExit}> <ExitToAppOutlined className='user-sidebar-info-exit'/>خروج</button>
        </div>



        <div className='user-menu-items'>
          <div className='user-menu-item'>
            <Dashboard className='user-menu-icon' />
            <a className='user-menu-title' onClick={handleDashboard}>
              داشبورد
            </a>
          </div>
          <a className='user-menu-item' onClick={handleOrders}>
            <PhotoCamera className='user-menu-icon' />
            <a className='user-menu-title'>
              مشاهده سفارش ها
            </a>
          </a>
        </div>
      </div>
      <div className='user-component-container'>
        {showDashboard && <UserDashboard user={user} />}
        {showorders && <UserOrders user={user} />}
      </div>
    </div>
  )
}


export default UserPanel