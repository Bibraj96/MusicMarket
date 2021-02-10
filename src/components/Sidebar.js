import Cart from './Cart'
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const Sidebar = ({ albumsInCart, totalCost }) => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <p>Artists</p>
      <p>Albums</p>
      <p>Reviews</p>
      <p>About us</p>

      <Cart albumsInCart={albumsInCart} totalCost={totalCost}/>
      {albumsInCart.length > 0 && (
        <StripeProvider apiKey="your_public_key">
          <Elements>
            <CheckoutForm totalCost={totalCost} />
          </Elements>
        </StripeProvider>
      )}
    </div>
  )
}

export default Sidebar