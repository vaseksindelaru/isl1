import React from 'react'

export const Userlist = () => {
    const users = [{
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://reqres.in/img/faces/3-image.jpg"
        }]
  return (
    <div className='container'>
        <div className='row'>
        {users.map((user,index) => (
            <div key={index} className='user'>
               <div className='avatar'>
               <img src={user.avatar} alt='avatar'></img>
               </div>
               <div className='user-description'>
               <h5 className='name'>{`${user.first_name} ${user.last_name}`}</h5>
               <p className='email'>{user.email}</p>
               </div> 
             </div>
            
        ))}
        </div>
    </div>
  )
}
