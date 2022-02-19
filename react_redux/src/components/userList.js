import React, {useEffect} from 'react';
import {fetchAllUsers} from '../store/slices/users';
import {useDispatch} from 'react-redux';

const UserList = () => {
    const dispatch = useDispatch();
const users = []

useEffect (() => {
    dispatch(fetchAllUsers());
},[dispatch])

return (
    <div>{users.map((user, index)=>(
        <div key={index}>
            <div>
                <img src={user.avatar} alt='avatar'></img>
                <div>
                <h5>{`${user.first_name} ${user.last_name}`}</h5>
                <p>{user.email}</p>
                </div>
            </div>
        </div>
    ))}</div>
  )
}

export default UserList