import React from 'react';

export default () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-title">
        Shopping Cart
      </div>
      <div className="nav-total-items">
        {/* TODO: Inject Number of items through props or context */}
        Total Items:
      </div>
    </div>
  )
}