import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import {
  getIsAuthSelector,
  getUsernameSelector,
} from '../../redux/auth/selectors'
import { logoutAction } from '../../redux/auth/action'

const links = [
  // { href: '/login', title: 'Login' },
  // { href: '/signup', title: 'Sign Up' },
  { href: '/design', title: 'Design' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isAuth = useSelector(getIsAuthSelector)
  const username = useSelector(getUsernameSelector)
  const dispatch = useDispatch()

  const onLogoutClick = () => {
    dispatch(logoutAction())
  }
  const closeMenu = () => {
    setIsOpen(false)
  }
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="sticky top-0 z-[20]">
      <nav className="flex flex-row justify-between bg-slate-200 p-3">
        <NavLink to="/" className="font-oleo text-xl">
          TravelChat
        </NavLink>
        <div className="hidden w-1/3 items-center justify-between md:flex">
          {links.map((link, index) => (
            <NavLink key={index} to={link.href}>
              {link.title}
            </NavLink>
          ))}
        </div>
        {/*  mobile */}
        {!isAuth ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/profile">Hi {username}</NavLink>
            <NavLink onClick={onLogoutClick} to="/">
              Logout
            </NavLink>
          </>
        )}

        <div
          className="cursor-pointer text-2xl md:hidden"
          onClick={toggleNavbar}
        >
          <GiHamburgerMenu />
        </div>
      </nav>

      {/* ------------------------------------------- */}
      {isOpen && (
        <nav className="fixed z-[21] flex w-full flex-col items-stretch border-t-2 border-slate-600 bg-slate-200 md:hidden">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              onClick={closeMenu}
              className="border-b border-b-black p-2 text-center hover:bg-gray-300"
            >
              {link.title}
            </NavLink>
          ))}
          {!isAuth ? (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile">Hi{username}</NavLink>
              <NavLink onClick={onLogoutClick} to="/">
                Logout
              </NavLink>
            </>
          )}
        </nav>
      )}
      {/*----------- clickable shadow area -----------*/}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed h-screen w-full bg-slate-950 bg-opacity-50"
        ></div>
      )}
    </section>
  )
}

export default Navbar
