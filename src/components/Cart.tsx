import React from 'react'

const Cart : React.FC = () => {
  return (
    <div>
      this is cart section.
      <div className="cart-item">
        <div className="cart-item-image">
            <img src="/Bitmap.svg" alt="cart-item-image" />
        </div>
        <div className="cart-item-details">
            <h3>Product Name</h3>
            <p>Product Description</p>
            <p>Product Price</p>
        </div>
        <div className="cart-item-quantity"></div>
      </div>
    </div>
  )
}

export default Cart
