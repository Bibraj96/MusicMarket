import './App.css'
import Album from './components/Album'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import albums from './api/api'

function App() {
  return (
    <div className="App">
      <header id="header">
        <Navbar />
      </header>
      <main id="main">
        <Sidebar />
        <Album albums={albums}/>
      </main>
    </div>
  );
}

export default App;
