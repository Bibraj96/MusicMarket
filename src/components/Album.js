const Album = ({ albums }) => {
  return (
    <div className="container">
      <div className="albums">
        <div className="albums-list">
          {albums.map(album => (
            <div key={album.id} className="album-item">
              <h3>{album.title}</h3>
              <h4>{album.artist}</h4>
              <p>{album.genre}</p>
              <p>{album.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Album