import React from 'react'
import { CiMenuFries } from "react-icons/ci" 
//dropdown
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

function Layout({children}) {
  return (
    <div>
       <div className='bg-[#141414] min-h-screen'>
    <sidebar className= 'fixed left-0 top-0 w-54 h-full border-r border-gray-600 p-6'>
    <div className='flex items-center gap-5'>
    </div>
    <a href='http://localhost:3000' className='bg-blue-600 rounded-xl p-5 mx-6  '>logo</a>
    </sidebar>
    <header>
      <header className='text-gray-300 fixed pl-[200px] w-full flex items-start justify-between p-8'>
        <nav className='flex items-center gap-5'>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>gamers</a>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>managers</a>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>followers</a>
         
        </nav>
        <div className='flex gap-x-5'>
        <a href='#' className='bg-red-600 px-4 py-2 rounded-xl'>login</a>
          <Menu menuButton={<MenuButton><CiMenuFries /></MenuButton>} transition> 
          <MenuItem href='http://localhost:3000/perfil'>Perfil</MenuItem>
          <MenuItem>Copy</MenuItem>
           <MenuItem>Paste</MenuItem>
           <MenuItem>Paste</MenuItem>
          
          </Menu>

        
        </div>
        </header>
        <main className='lg:pl-[200px] bg-[#141414] p-8 pt-28'>
          {children}
        </main>
    </header>

    </div>
  
    </div>
  )
}

export default Layout