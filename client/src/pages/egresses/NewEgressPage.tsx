import React, { useEffect } from 'react'
import FormNewEgress from '../../components/egresses/FormNewEgress';
import Template from '../../components/ui/Template';
import {useDispatch} from 'react-redux';
import { getAllEgressesCategoriesAction, getAllEgressesSubCategoriesAction } from '../../redux/egresses/egresses.action';


const NewEgressPage = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    (() =>  dispatch<any>(getAllEgressesCategoriesAction()))();
  }, [])
  useEffect( () => {
    (() =>  dispatch<any>(getAllEgressesSubCategoriesAction()))();
  }, [])
  
  return (
      <Template title='Nuevo Egreso' description='Ingrese un nuevo egreso'>
         <FormNewEgress /> 
      </Template>
  );
}

export default NewEgressPage;