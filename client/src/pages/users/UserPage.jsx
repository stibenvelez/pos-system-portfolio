import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Template from '../../components/ui/Template';
import UserDetail from '../../components/users/UserDetail';
import { getUserByIdAction } from '../../redux/users/users.actions';

const UserPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
      dispatch(getUserByIdAction(id));
    }, [])
  return (
      <Template title="Información del usuario" description="Información detallada del usuario">
          <UserDetail/>
      </Template>
  );
}

export default UserPage