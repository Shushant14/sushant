import logo from "./logo.svg";
import "./App.css";
import Container_Nav_Options from "./component/Navigation_Options/Container_Nav_Options";
import PopularDesitnationTray from './component/PopularDesitnationTray';
import Footer from './component/Footer';
import Offer from "./component/Offer";

function App() {
  return (
    <div className="App">
      <h1>Trippy</h1>
      <Container_Nav_Options></Container_Nav_Options>
      <Offer/>
      <PopularDesitnationTray/>
      <Footer />

    </div>
  );
}

export default App;
