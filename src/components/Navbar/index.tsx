import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const links = [
  { href: '/login', title: 'Login' },
  { href: '/signup', title: 'Signup' },
  { href: '/design', title: 'Design' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
