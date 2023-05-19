import React from 'react'
import { CiMenuFries } from "react-icons/ci" 
import styles from '../styles/Home.module.css'
//dropdown
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
/*
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
        <div >
        <nav className='flex items-center gap-5'>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>gamers</a>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>managers</a>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>followers</a>
          
        </nav>
       </div>
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
        <main>
          {children}
        </main>
    </header>

    </div>
  
    </div>
  )
}





export default Layout
*/
export const HeaderLayout = ({children}) => {
  return (
    <div>
       <div><div className='bg-[#162238] min-h-screen'>
  {/*left barr*/} 
    <sidebar className= 'fixed left-0 top-16 w-20 bg-[#0E121B] h-full p-6'>

    <div className=''></div>
    </sidebar>
  {/*right barr*/}
    <sidebar className= 'fixed right-0 top-16 w-[240px] bg-[#0E121B] h-full p-6'>

    <div className=''></div>
    </sidebar>

    <header className='bg-[#171C26] text-[#2F384C] fixed pl-[120px] w-full flex items-start justify-between p-6'>
 <nav className='flex items-center gap-5'>
 <a href='http://localhost:3000/components' className='bg-blue-600 px-4 py-2 rounded-xl'>games</a>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>managers</a>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>followers</a>
 </nav>
 <div className=''>buscador</div>
 <div className='flex gap-x-6 px-8'> 
  <a href='#' className='bg-red-600 px-4 py-2 rounded-xl'>login</a>
          <Menu menuButton={<MenuButton><CiMenuFries /></MenuButton>} transition> 
          <MenuItem href='http://localhost:3000/perfil'>Perfil</MenuItem>
          <MenuItem>Copy</MenuItem>
           <MenuItem>Paste</MenuItem>
           <MenuItem>Paste</MenuItem>
           </Menu>
  </div>
</header>
   
   

     
        <main className='lg:pl-[150px] lg:pr-[300px] p-8 pt-20 bg-grey-300'>
        
        {children} 
        </main>
 

    </div></div></div>
  )
}

 