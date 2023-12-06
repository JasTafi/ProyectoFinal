import React from 'react'
import { ProtectedAdm } from "../components/RutaProtejida/RutaProtejida";
import { Administracion } from '../components/administracion/Administracion'

const AdministracionPage = () => {
  return (
    <ProtectedAdm>
      <Administracion/>
    </ProtectedAdm>
  )
}

export default AdministracionPage