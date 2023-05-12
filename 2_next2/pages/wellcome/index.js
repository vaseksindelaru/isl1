import React from 'react'
import { useEffect ,useState } from 'react'


const Index = () => {
    const [message, newMessage] = useState('')
    const[count,setCount]= useState(0)
    
    useEffect(() => {
        console.log('despues de index')
    },[message])
  

   useEffect(() => {
    console.log('despues del click')
},[count])

   
    return (
     <div>
     <div>index</div>
     <p>{message}</p>
    <input type="text" onChange={(event) => 
        {newMessage(event.target.value)}}/>
        <p>{count}</p>
        <button onClick={()=>{setCount(count +1)}}>click</button>
    </div>)
  
}

export default Index