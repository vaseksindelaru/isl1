import React from 'react'
import styles from '../styles/Home.module.css'
import { HeaderLayout } from './headerLayout'


const GameLayout = ({children}) => {
  return (
    <div className=''>

<header className='text-gray-300 fixed  pl-[80px]  flex items-start justify-between p-8' >
      <div className='pt-[230px]'>
      <div className={styles.bordes}>  
      </div> 
      </div>
     </header>
       
        <HeaderLayout>
        
        {children}
        </HeaderLayout>
      
        
        
    </div>
  )
}

export default GameLayout