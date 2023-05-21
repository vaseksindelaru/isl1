/*
import Layout from "../Layout";
import React from 'react'

export default function Game() {

  console.log()
  return (
    
  <Layout>
    <div className="text-white">
    <h1>Game</h1>
    </div>"text-white "

export async function getStaticPaths(){
  try {
    const res = await fetch ("https://www.freetogame.com/api/games?category=shooter")
    const datas = await res.json()
    
    const paths = datas.map((data)=>({
      params:{id: data.id.toString()}
    }))
    console.log(paths)
return{
  paths,
  fallback:false
} } catch (error) {
    console.log(error)
  }
}

export  const getStaticProps = async ({params}) =>{ 
  try {
  const url = "https://www.freetogame.com/api/games?category=shooter/"+params.id
  const resp = await fetch (url)
const games = await resp.json()
console.log (games)
return {
  props:{
      games
  }
  
} }catch (error) {
  console.log(error)
}
}
*/
import styles from '../../styles/Home.module.css' 

import React from 'react'
import {useRouter} from 'next/router'
import GameLayout from '@/layouts/gameLayout';



export default function Game({gameDiscower}) {
  const router = useRouter()

  return (
  <div>
    <div>Ruta dinamica</div >
  
      {
        gameDiscower.map((gam) => {
          return(
        <div key={gam.id} class="style.wrapImg">
        <p>{gam.title}</p>
        <img src={gam.thumbnail} alt=''/>
         </div>)
})
        }
     
  </div>)
}

Game.getLayout = function getLayout(page) {
  return (
<div>
    <GameLayout>
    
 


    {page}
 
  </GameLayout>
  </div>
)
  }


export  const getServerSideProps = async ({query}) =>{ 
  
  

  try {
  const peticion = await fetch ("https://www.freetogame.com/api/games?category=shooter")
   const games = await peticion.json()

   console.log('query', query)
const gamesNuevos = games.map((gamNew) => {

  return {
    ...gamNew,
    ruta: gamNew.title.split(' ').join('-').toLowerCase()
  }
})

const gameDiscower = gamesNuevos.filter((gam) => gam.ruta === query.game)


return {
  props:{gameDiscower: gameDiscower},
  } }
  catch (error) {
  console.log(error)
}
}