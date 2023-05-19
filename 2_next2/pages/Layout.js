import React from 'react'
import { CiMenuFries } from "react-icons/ci" 
import styles from '../styles/Home.module.css'
import MainLayout from '@/layouts/mainLayout';
//dropdown
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';


function Layout({children}) {
  return (
    <div className='text-green'>
     <l1>layout</l1> 
  <MainLayout>
    <div>
    
      
    <div className={styles.bordes}> 
        
        
          {children}
        
        </div>
  
  </div>
  </MainLayout>
   
    </div>
  )
}





export default Layout