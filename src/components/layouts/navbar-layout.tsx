import React from 'react'
import { NavLink, Outlet } from 'react-router'

const NavbarLayout = () => {
  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'flex flex-row gap-4 bg-blue-600 p-6 text-white'}>
        <div>Client side routing demo</div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/test/1'}>Route with id</NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default NavbarLayout
