import React from 'react'

const Tour = ({id,image,info,name,price,removeTours}) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{info}</p>
        <button type='button' onClick={() => removeTours(id)} className='btn btn-block delete-btn'>not interested</button>
      </div>
    </article>
  )
}

export default Tour