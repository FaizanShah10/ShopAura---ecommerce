import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const {user} = useSelector((state) => state.auth)
  //console.log(user)

  return (
    <div>
      <h2 className='font-[Gilroy-Bold] text-2xl'>Hello <span className=''>{user?.fullName}</span></h2>
      <p className='text-lg'>Welcome to your dashboard</p>
    </div>
  )
}

export default Dashboard