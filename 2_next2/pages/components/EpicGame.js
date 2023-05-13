import React from 'react'
import GamersList from './GamersList'
import GamersSelect from './GamersSelect'


function EpicGame() {
  return (
    <div className='bg-[#141414] min-h-screen'>
    <sidebar className='fixed left-0 top-0 w-54 h-full border-r border-gray-600 p-6'>
<div>
    <h1 className='text-gray-300 font-bold text-3xl tracking-wide p-5'>logo</h1>
    <GamersList />
    </div>
    </sidebar>
    <header>
      <header className='text-gray-300 fixed pl-[220px] w-full flex items-start justify-between p-8'>
        <nav className='flex items-center gap-5'>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>gamers</a>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>managers</a>
          <a href='#' className='bg-blue-600 px-4 py-2 rounded-xl'>followers</a>
        </nav>
        <div>
        <a href='#' className='bg-red-600 px-4 py-2 rounded-xl'>login</a>
        </div>
        </header>
        <main className='lg:pl-[220px] bg-[#141414] p-8 pt-28'>
          <div className=' grid lg:grid-cols-5'>
          <div className='col-span-1 '> 
          <GamersSelect />
            </div>
          <div className='col-span-4'>
          <img src='https://rapchieuphim.com/photos/2/guardians-of-the-galaxy/nguon-goc-cua-nhan-vat-rocket-se-duoc-marvel-tiet-lo-chi-tiet-trong-mot-tua-phim-sap-toi-2.jpg' className='w-full h-[500] object-cover'></img>
          </div>
          </div>
         
          <div></div>
        </main>
    </header>

    </div>
  )
}

export default EpicGame