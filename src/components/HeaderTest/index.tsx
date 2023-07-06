import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutAction } from '../../redux/auth/action'
import { getIsAuthSelector } from '../../redux/auth/selectors'

const Header: React.FC = () => {
  const isAuth = useSelector(getIsAuthSelector)
  const dispatch = useDispatch()
  const onLogoutClick = () => {
    dispatch(logoutAction())
  }
  // const username = useSelector(getUsernameSelector)
  // console.log(username)
  return (
    <div>
      {isAuth ? (
        <>
          <NavLink className="mr-4" to="/profile">
            {/*hi {username}*/}
            Profile
          </NavLink>
          <NavLink onClick={onLogoutClick} to="/">
            logout
          </NavLink>
        </>
      ) : (
        <NavLink to="/signuptest">Sign Up</NavLink>
      )}
    </div>
  )
}

export default Header
