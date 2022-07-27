import React from 'react'
import { useSelector } from 'react-redux';

const UserDetail = () => {
    const {user} = useSelector(({users}) => users);
  return <div>{user.user}</div>;
}

export default UserDetail;