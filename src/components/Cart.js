import React from 'react'
import CartAlbum from './CartAlbum'

const Cart = ({ albumsInCart, totalCost }) => {
  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart</h2>
      {albumsInCart.length > 0 ? (
        <div>
          {albumsInCart.map(album => (
            <CartAlbum 
              key={album.id}
              title={album.title}
              cost={album.price * album.quantity}
              quantity={album.quantity}
            />
          ))}
          <div className="cart-total-cost">
            Your Total: ${totalCost.toFixed(2)}
          </div>
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  )
}

export default Cart