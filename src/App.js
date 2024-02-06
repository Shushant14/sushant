import logo from './logo.svg';
import './App.css';
import PopularDesitnationTray from './component/PopularDesitnationTray';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <h1>Trippy</h1>
      <PopularDesitnationTray/>
      <Footer />
    </div>
  );
}

export default App;
