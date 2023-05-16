


export default function GamesList({games}) {

   
    return (

    <div>
        {
        games.map((gam) => ( 
        <div key={gam.id}>

        <p>{gam.title}</p>
        <img src={gam.thumbnail} alt=''/>
        </div>
        ))
        }
      
    </div>
   
    )
}


export  const getStaticProps = async () =>{ try {
    const res = await fetch ("https://www.freetogame.com/api/games?category=shooter")
const games = await res.json()

  return {
    props:{
        games:games
    }
    
} }catch (error) {
    console.log(error)
}
}