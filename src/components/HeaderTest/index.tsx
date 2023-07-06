import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutAction } from '../../redux/auth/action'
import {
  getIsAuthSelector,
  getUsernameSelector,
} from '../../redux/auth/selectors'
import { RootState } from '../../redux/rootReducer'

const Header: React.FC = () => {
  const isAuth = useSelector(getIsAuthSelector)
  const login = useSelector((state: RootState) => state.auth)
  console.log(login)
  const dispatch = useDispatch()
  const onLogoutClick = () => {
    dispatch(logoutAction())
  }
  const username = useSelector(getUsernameSelector)
  console.log(username)
  return (
    <div>
      {isAuth ? (
        <>
          <NavLink className="mr-4" to="/profile">
            hi {username}
          </NavLink>
          <NavLink onClick={onLogoutClick} to="/">
            logout
          </NavLink>
        </>
      ) : (
        <NavLink to="/logintest">login</NavLink>
      )}
    </div>
  )
}

export default Header
