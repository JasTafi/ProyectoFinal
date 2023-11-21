import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { UpdateProducto } from '../../services/product_service';

const ButtonEdit = ({ id, updatedData, handleClose }) => {
  const handleActualizarProducto = async () => {

    try {
      await UpdateProducto(id, updatedData);
      // Producto actualizado exitosamente, puedes manejar cualquier lógica adicional aquí
      console.log('Producto actualizado correctamente:', updatedData);
      handleClose(); // Cierra el modal después de editar el producto
    } catch (error) {
      // Manejar errores al actualizar el producto
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <Button variant="primary" type="button" onClick={handleActualizarProducto}>
      Guardar cambios
    </Button>
  );
};

export default ButtonEdit;
