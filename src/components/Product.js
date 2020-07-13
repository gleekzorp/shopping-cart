import React from 'react';

export default (props) => {
  const {title, price, count} = props.product
  return (
    <div className="product-wrapper">
      <div className="product-title">
        {title}
      </div>
      <div className="product-price">
        ${price}
      </div>
      <div className="product-count">
        x{count}
      </div>
    </div>
  )
}