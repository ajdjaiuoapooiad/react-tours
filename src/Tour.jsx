import React, { useState } from 'react'

const Tour = ({id,image,info,name,price,removeTours}) => {
  const [ readMore,setReadMore ] = useState(false)
  console.log(info.substring(0,10));
  

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore? info : `${info.substring(0,200)}...`}
          <button type='button' className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore? 'show less' : 'read more'}
          </button>
        </p>
        <button type='button' onClick={() => removeTours(id)} className='btn btn-block delete-btn'>not interested</button>
      </div>
    </article>
  )
}

export default Tour