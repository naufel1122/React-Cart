import React from 'react'

export default function Product(props) {
  return (
    <div className='row' >
        <div className='col-6'>
            <h2>{props.product.name}<span class="badge bg-secondary">₨={props.product.Price}</span></h2>
        </div>
    </div>
  )
}
