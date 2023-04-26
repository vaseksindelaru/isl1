import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/slices/counter";


export default function Prueba() {

  const {value} = useSelector (state => state.counter) 
  const dispatch = useDispatch()
  return (

    <div>
        <p > Prueba {value}
     <p>
     <button type="button" onClick={ () => dispatch (increment ())}>
     incrementar
     </button>
     <button type="button" onClick={ () => dispatch (increment ())}>
     decrementar
     </button>
     <button type="button" onClick={ () => dispatch (increment ())}>
     incrementar 2 
     </button>
     </p>
     </p>
    </div>
  )
}
