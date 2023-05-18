import React from 'react'
import PerfilUser from '@/pages/components/PerfilUser'

const MainLayout = ({children}) => {
  return (
    <div>
        <PerfilUser/>
        {children}
    </div>
  )
}

export default MainLayout