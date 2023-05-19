import React from 'react'

import { HeaderLayout } from './headerLayout'


const MainLayout = ({children}) => {
  return (
    <div className=''>
        MainLayout
        {children}
        <HeaderLayout />
      
        
        
    </div>
  )
}

export default MainLayout