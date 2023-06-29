import React from 'react'

const Nav = () => {
  return (
   <nav className='fixed bg-white opacity-90 h-14 w-full z-50'>
    <a href='/' className='h-full w-full '>
        <img src='./logo.svg' className='h-full pl-6' alt="Zinacor" />
    </a>
   </nav>
  )
}

export default Nav