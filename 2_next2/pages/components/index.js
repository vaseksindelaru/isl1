
import { HeaderLayout } from "@/layouts/headerLayout";
import Link from "next/link";

export default function GamesList({gamesNuevos}) {

    console.log(gamesNuevos)
    return (
<HeaderLayout>
    <div>
        {
        gamesNuevos.map((gam) => ( 
        <div key={gam.id} className="text-white">
       <Link href="games/[game]" as={`/games/${gam.ruta}`}>
       
        <p>{gam.title}</p>
        <img src={gam.thumbnail} alt=''/>
        
        </Link>
        </div>
        ))
        }
        
         
    </div>
    </HeaderLayout>
    )
}


export  const getServerSideProps = async (context) =>{ 
  try {
    const peticion = await fetch ("https://www.freetogame.com/api/games")
     const games = await peticion.json()
     
  const gamesNuevos = games.map((gamNew) => {
    
    return {
      ...gamNew,
      ruta: gamNew.title.split(' ').join('-').toLowerCase()
    }
  })
return {
    props:{gamesNuevos: gamesNuevos},
    } }
    
    catch (error) {
    console.log(error)
  }
  }











