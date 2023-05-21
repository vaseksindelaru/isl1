import React from 'react'
import styles from '../styles/Home.module.css'
import { HeaderLayout } from './headerLayout'


const GameLayout = ({children}) => {
  return (
    <div className=''>

<header className='text-gray-300 fixed  pl-[80px]  flex items-start justify-between p-8' >
     
      <div className='pt-[100px]'>
      <p className="text-4xl font-bold m-3 p-5 text-red-500"> texyo superpuesto</p>
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