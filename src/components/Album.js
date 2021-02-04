const Album = ({ albums }) => {

  return (
    <div className="container">
      <div className="albums">
        <div className="albums-list">
          {albums.map(album => (
            <div key={album.id} className="album-item">
              <h3 className="album-title">{album.title}</h3>
              <h4 className="album-artist">{album.artist}</h4>
              <p className="album-genre">{album.genre}</p>
              <p className="album-price">{album.price}</p>
              <button className="album-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Album