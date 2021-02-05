const CartAlbum = ({ title, cost, quantity }) => {
  return (
    <div className="cart-album-container">
      <h3>{title}</h3>
      <div className="cart-album-details">
        <p className="cart-album-quantity">Qty: {quantity}</p>
        <p>${cost.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CartAlbum