import React from 'react'
import Layout from '../Layout'
//icons
import { HiCamera } from "react-icons/hi";

function PerfilUser() {
  return (
  <div>
    <Layout>  
        <div className='bg-secondary-100 p-8  text-gray-100 rounded-xl'>
       <h1 className='text-xl'>Profile</h1>
       <hr className='my-8 border-gray-500'></hr>
       <form><div className='flex items-center'>
        <div className='w-1/4'>
          <p>Avatar</p>
        </div>
        <div className='flex-1'>
          <div className='relative  m-b-2'>
          <img src='https://img.freepik.com/foto-gratis/alegre-sorprendida-joven-bonita-mujer-afroamericana-senala-si-misma-pregunta-quien-sonrie-ampliamente-no-esperaba-ser-elegido_273609-45879.jpg?w=740&t=st=1684190860~exp=1684191460~hmac=42f8a04d0dcce57266b091fc18eb20a8440e511f35132691bcb9063a3e9ea377'
          className='w-32 h-32 object-cover rounded-full'></img>
          <label htmlFor='avatar' className='absolute bg-secondary-900 p-2 rounded-full hover:cursor-pointer left-24 bottom-0'>
          <HiCamera/>
          </label>
         
          </div><input type="file" id="avatar" className='hidden' ></input></div>
          <p className='text-gray-500 text-xs mx-'>( Allowed file types: png,jpg,jpeg ) </p>
          </div>
          
        </form>
        
        </div>
        
    </Layout>
    <div>
       
    </div>
    </div>
  )
}

export default PerfilUser