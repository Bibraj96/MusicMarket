import Cart from './Cart'

const Sidebar = ({ albumsInCart, totalCost }) => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <p>Artists</p>
      <p>Genres</p>
      <p>Reviews</p>
      <p>About us</p>

      <Cart albumsInCart={albumsInCart} totalCost={totalCost}/>
    </div>
  )
}

export default Sidebar