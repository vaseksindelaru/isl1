import React from 'react'
import {  useSelector } from 'react-redux'
//import {selectTask} from "@/redux/reducers/managerSelect"

function GamersSelect () {
//const gamersDispatch = useDispatch ()
  const titulares= useSelector (state => state.titularSelect)
  console.log(titulares)
  return (
    <div>
      <h2 className='text-gray-300 '>GamersSelect</h2>
     
    <div className='cancha'>
{titulares.map((t,index)=>(
  <artical key={index} className="titular">
    <div>
    <ul>
        <li>
        <a href='#' className='text-gray-300  flex gap-4 hover:bg-slate-600 py-3 px-4 rounded-xl transition-colors '>
    <img src={t.foto} alt={t.name} className = 'w-12 h-12 object-cover rounded-full'></img>
        {t.name}
        </a>
        <button className=' rounded-md text-gray-300 bg-blue-600'>XXX</button>
        </li>
    </ul>
    </div>

  </artical>
))}
    </div>

    </div>
  )
}

export default GamersSelect