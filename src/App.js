import Album from './components/Album'
import Navbar from './components/Navbar'
import albums from './api/api'

function App() {
  return (
    <div className="App">
      <header id="header">
        <Navbar />
      </header>
      <main id="main">
        <Album albums={albums}/>
      </main>
    </div>
  );
}

export default App;
