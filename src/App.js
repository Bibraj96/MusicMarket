import './App.css'
import React, { useState } from 'react'
// import Cart from './Cart'
import Album from './components/Album'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import albums from './api/api'

const App = () => {

  const [albumsInCart, setAlbumsInCart] = useState([]);

  const handleAddtoCartClick = id => {
    setAlbumsInCart(albumsInCart => {
      const albumInCart = albumsInCart.find(album => album.id === id);

      if (albumInCart) {
        return albumsInCart.map(album => {
          if (album.id !== id) return album
          return { ...albumInCart, quantity: album.quantity + 1}
        })
      }
      const album = albums.find(album => album.id === id)
      return [...albumsInCart, { ...album, quantity: 1 }]
    })
  }

  const totalCost = albumsInCart.reduce(
    (acc, album) => acc + album.price * album.quantity, 0
  )

  return (
    <div className="App">
      <header id="header">
        <Navbar />
      </header>
      <main id="main">
        <Sidebar />
        <div className="albums-list">
          {albums.map(album => (
            <Album
              key={album.id}
              title={album.title}
              artist={album.artist}
              genre={album.genre}
              price={album.price}
              onAddToCartClick={() => handleAddtoCartClick(album.id)}
            />
          ))}
        </div>
        {/* <Cart albums={albumsInCart} totalCost={totalCost}/> */}
      </main>
    </div>
  );
}

export default App;
