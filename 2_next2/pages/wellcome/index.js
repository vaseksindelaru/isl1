import Head from "next/head"


export default function Index({games}) {
  return (
<div>
    <Head>
        <title>Api game</title>
    </Head>
    <div>
        {
        games.map(gam => ( 
        <div key={gam.id}>

        <p>{gam.title}</p>
        <img src={gam.thumbnail} alt=''/></div>
        ))
        }
      
    </div>
    </div>
  )
}


export  const getServerSideProps = async (context) =>{
const res = await fetch ("https://www.freetogame.com/api/games?category=shooter")
const games = await res.json()

  return {
    props:{
        games:games
    }

}}   