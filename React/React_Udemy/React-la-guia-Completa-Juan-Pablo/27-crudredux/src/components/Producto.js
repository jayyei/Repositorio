import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

//Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';

const Producto = ({producto}) => {
    
    const {nombre, precio, id} = producto;
    const dispatch = useDispatch();
    const history = useHistory(); // Habilitar history para redireccion

    // Confirmar si se desea eliminar 
    const confirmarEliminarProducto = id => {
        // preguntar al usuario
        Swal.fire({
            title: '¿Estás seguro de eliminar el producto?',
            text: "Un producto que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'No, cancelar',
        }).then((result) => {
        if (result.isConfirmed) {
            console.log(id)
            dispatch(borrarProductoAction(id)) 
          }
        })
        // ejecutar la accion
    }

    // funcion que redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch(obtenerProductoEditar(producto))
        history.push(`/productos/editar/${producto.id}`)
    }

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold"> $ {precio} </span></td>
            <td className="acciones">
                <button  
                    type="button"
                    onClick={()=> redireccionarEdicion(producto)}
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={()=> confirmarEliminarProducto(id)}
                >Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Producto