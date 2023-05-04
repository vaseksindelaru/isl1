
import { useRef ,useState} from "react"
import { addTask } from "@/redux/redusers/profiles" 

import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"


export default function TaskForm() {
    const profileState = useSelector(state => state.profile)
    //console.log(profileState)
  //const name = useRef()
  //function UseName () {
  //console.log(name.current.value)}


  const [taks, setTaks] = useState({
   title: ""
  })

  const dispatch = useDispatch ()

  const handelChange = (e) => {
     
    setTaks ({
      ...taks,
     [e.target.name]: e.target.value
     })}

  const handelSumit = (e) => {
  e.preventDefault();
   dispatch(addTask(taks));
  }

  return (
    <div>
 
      <form onSubmit={handelSumit}>
      <input name="nombre" type="text" placeholder="title" onChange={handelChange}/>
      <button>save</button>
      </form>
    </div>
  )
}