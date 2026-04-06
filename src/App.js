import './index.css'

import Header from "./components/Header.js"
import Home from "./components/Home.js"
import QuemSomos from "./components/QuemSomos.js"
import NossaHistoria from "./components/NossaHistoria.js"

function App() {
  return (
    <div className="App">

          <Header />
        <Home />
        <QuemSomos/>
        <NossaHistoria />
    </div>
  );
}

export default App;
