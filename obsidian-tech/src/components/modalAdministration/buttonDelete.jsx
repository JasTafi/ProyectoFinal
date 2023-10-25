import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { DeleteProducto } from '../../services/product_service';

const ButtonDelete = ({ id, handleClose }) => {
  const handleEliminarProducto = async () => {
    try {
      await DeleteProducto({ id });
      // Producto eliminado exitosamente, puedes manejar cualquier lógica adicional aquí
      handleClose();  // Cierra el modal después de eliminar el producto
    } catch (error) {
      // Manejar errores al eliminar el producto
      console.error('Error al eliminar el producto:', error);
    }
  };

  return (
    <Button variant="danger" type="button" onClick={handleEliminarProducto}>
      Eliminar producto
    </Button>
  );
};

export default ButtonDelete;
