import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ProfileLayout = () => {
  return (
    <div>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/profile/public">Public</NavLink>
      <NavLink to="/profile/settings">Settings</NavLink>
      <NavLink to="/profile/settings/chat">Personal Chat Settings</NavLink>
      <Outlet />
    </div>
  )
}

export default ProfileLayout
