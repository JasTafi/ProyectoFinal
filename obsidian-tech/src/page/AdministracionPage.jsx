import React from 'react'
import InputComponent from '../components/inputAdminitracion/inputAdministration';
import DataList from '../components/toDoListAdministracion/toDoListAdministration';

const AdministracionPage = () => {
  return (
    <div className='divPadreAdministracion'>
      <InputComponent />
      <DataList />
    </div>
  )
}

export default AdministracionPage