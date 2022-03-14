import "./App.css";
import { Nav } from "./component/Nav";
import { Vegetables } from "./component/Vegetables";
import { Wishlist } from "./component/Wishlist";

function App() {
  return (
    <div className="App">
      <div className="top" >
        <Nav />
      </div>
      <div className="bottom">
        <Wishlist/>
        <Vegetables/>
      </div>
    </div>
  );
}

export default App;
