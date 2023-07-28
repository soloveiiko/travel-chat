import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { GiHamburgerMenu } from 'react-icons/gi'
import { GrMenu, GrClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import {
  getIsAuthSelector,
  // getUsernameSelector,
} from '../../redux/auth/selectors'
import { logoutAction } from '../../redux/auth/action'
import { auth } from '../../firebase/firebase'
const logo = require('../../assets/logo.png')

const links = [
  { href: '/', title: 'Advantages' },
  { href: '/about', title: 'About us' },
  { href: '/design', title: 'Contacts' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isAuth = useSelector(getIsAuthSelector)
  // const username = useSelector(getUsernameSelector)
  const dispatch = useDispatch()

  const onLogoutClick = () => {
    dispatch(logoutAction())
    auth.signOut()
  }
  const closeMenu = () => {
    setIsOpen(false)
  }
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="sticky top-0 z-[20]">
      <nav className="border-b-2 border-red-400 bg-white">
        <div className="mx-auto flex flex-row items-center gap-3 md:w-[80%] md:justify-between ">
          {/*  mobile */}
          {!isOpen && (
            <div
              className="cursor-pointer pl-5 text-2xl md:hidden"
              onClick={toggleNavbar}
            >
              <GrMenu />
            </div>
          )}
          {!isOpen && (
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          )}
          <div className="hidden w-1/2 items-center justify-between md:flex">
            {links.map((link, index) => (
              <NavLink key={index} to={link.href}>
                {link.title}
              </NavLink>
            ))}
            {isAuth ? (
              <NavLink
                onClick={onLogoutClick}
                to="/"
                className="btn btn-white text-blue-800"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/signup"
                className="btn btn-white px-8 text-blue-800"
              >
                Sign up
              </NavLink>
            )}
          </div>
          {/* CORRECT HEIGHT 70px */}
          {isOpen && <div className="h-[70px]"></div>}
          {/* CLOSE ICON ON THE RIGHT */}
          {isOpen && (
            <div
              className="ml-auto cursor-pointer pr-5 text-2xl md:hidden"
              onClick={toggleNavbar}
            >
              <GrClose />
            </div>
          )}
        </div>
      </nav>

      {/* ------------------------------------------- */}
      {isOpen && (
        <div className="fixed z-[21] h-screen w-full bg-white">
          <nav className="flex flex-col items-start gap-2 pl-3 pt-10">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="p-2 text-2xl hover:bg-gray-300"
            >
              Home
            </NavLink>
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.href}
                onClick={closeMenu}
                className="p-2 text-2xl hover:bg-gray-300"
              >
                {link.title}
              </NavLink>
            ))}
            {isAuth ? (
              <NavLink
                onClick={onLogoutClick}
                to="/"
                className="btn btn-white text-2xl"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-primary w-[150px] px-8 text-xl"
                onClick={toggleNavbar}
              >
                Sign in
              </NavLink>
            )}
            {isAuth ? (
              <NavLink
                onClick={onLogoutClick}
                to="/"
                className="btn btn-white text-2xl"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/signup"
                className="btn btn-secondary w-[150px] px-8 text-xl"
                onClick={toggleNavbar}
              >
                Sign up
              </NavLink>
            )}
          </nav>
        </div>
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
