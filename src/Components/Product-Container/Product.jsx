import React from 'react'
import "./Product.css";
function Product({product}) {
  return (
    <div>
      <div className='product-container'>
              <h1 className='title'>{product.title}</h1>
              <img src={product.image}  className="img" alt={product.title} />
              <p className='price'> Price :{product.price}</p>
              <p className='description'>{product.description}</p>
            </div>
           
    </div>
  )
}

export default Product
