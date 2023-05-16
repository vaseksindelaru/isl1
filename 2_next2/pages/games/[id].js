import Layout from "../Layout";

import React from 'react'

function GamesList({games}) {
  console.log(games)
  return (
  <Layout>
   <p>{games.title}</p>
    <img src={games.thumbnail} alt=''/>
   
    </Layout>
  )
}
export async function getStaticPaths(){
  try {
    const res = await fetch ("https://www.freetogame.com/api/games?category=shooter")
    const data = await res.json()
    const paths = data.map(({id})=>({params:{id:`${id}`}}))
return{
  paths,
  fallback:false
} } catch (error) {
    console.log(error)
  }
}

export  const getStaticProps = async ({params}) =>{ 
  try {
  const res = await fetch ("https://www.freetogame.com/api/games?category=shooter"+ params.id)
const games = await res.json()
return {
  props:{
      games:games,
  },
} 
}catch (error) {
  console.log(error)
}}


export default GamesList