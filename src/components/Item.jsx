import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {producto} ) => {
  return (
    <div className="producto">
      <img src={producto.imagen} />
      <h2>{producto.nombre}</h2>  
      <p className='producto-detail-price'>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <Link to={`/item/${producto.id}`}><button className='btn-price'>Mas info</button></Link>
    </div>
  )
}