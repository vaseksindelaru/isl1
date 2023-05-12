
import Head from "next/head";
import EpicGame from "./components/EpicGame";


export default function Home() {
  return(
  <div >
  <Head>
 <title>Home</title>
 </Head>  
  <EpicGame />
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
