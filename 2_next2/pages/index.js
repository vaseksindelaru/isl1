import { useRef, useState} from "react"

import { useSelector } from "react-redux"


export default function Home() {
    const profileState = useSelector(state => state.profile)
    console.log(profileState)
  const name = useRef()
 
  function UseName () {
    console.log(name.current.value)
    
  }
  const [taks, setTaks] = useState({
   
    title: ""




  })

  const handelChange = (e) => {
      nombre: "holis"
    setTaks ({
      ...taks,

      [e.target.name]: e.target.value
      
      
    })

  }

  const handelSumit = (e) => {
  e.preventDefault();
 console.log(taks);
  }


  return (
    <div>
      <p>mi nomre es:</p>
      <input placeholder="nombre aqui" ref={name}/>
      <button onClick={UseName} >toca</button>
      
      <form onSubmit={handelSumit}>
      <input name="nombre" type="text" placeholder="title" onChange={handelChange}/>
      <button>save</button>
      </form>
    </div>
  )
}
