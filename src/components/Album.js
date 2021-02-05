
const Album = ({ title, artist, genre, price, onAddToCartClick }) => {

  return (
    <div className="album-item">
      <h3 className="album-title">{title}</h3>
      <h4 className="album-artist">{artist}</h4>
      <p className="album-genre">{genre}</p>
      <p className="album-price">${price}</p>
      <button className="btn add-to-cart" onClick={onAddToCartClick}>Add to Cart</button>
    </div>
  )
}

export default Album