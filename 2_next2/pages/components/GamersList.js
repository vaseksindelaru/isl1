import React from 'react'
import {useSelector, useDispatch } from 'react-redux'
import {selectTask} from '@/redux/redusers/managerSelect'

export default function GamersList () {
const gamers= useSelector (state => state.gamersSelect)
const gamersDispatch = useDispatch ()
//console.log(gamers)
return (
<section>
  <div>

<h2 className='text-gray-300 '>GamersList</h2>
{ gamers.map ((g,index) => ( 

<article key={index} className='jugadores'>
       <ul>
        <li>
        <a href='#' className='text-gray-300  flex gap-4 hover:bg-slate-600 py-3 px-4 rounded-xl transition-colors '>
       <img src={g.foto} alt={g.name} className = 'w-12 h-12 object-cover rounded-full '></img>
        
       {g .name}
      </a>
      <button  onClick={()=> gamersDispatch(selectTask(g))} className=' rounded-md text-gray-300 bg-blue-600' >add</button>
        
        </li>
    </ul>
          
</article>
       
 
        )) }
        
        </div>
        </section>
)}

