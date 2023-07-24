import { useContext } from 'react'
import { ProductGrid } from '../components/grillaDeProductos/ProductGrid'
import { DataProvider } from '../context/DataContext'

export default function InicioPage() {
  const { userInfo } = useContext(DataProvider);
  console.log(userInfo);
  return (
    <ProductGrid/>
  )
}