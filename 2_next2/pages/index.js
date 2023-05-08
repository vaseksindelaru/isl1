
import conectarDB from "@/lib/dbConnect";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import conectardb from "@/lib/dbConnect";


export default function Home() {
  return(
  <div>
  
    
      <h1 className="text-3x1 font-bold underline">Home</h1>
      <TaskForm />
      <TaskList />
     
    </div>
   
  )
}


/*export async function getServerSideProps(){
  try{
await conectardb()
  }catch(error) {
    console.log(error)
  }
}*/
