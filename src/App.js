import './index.css'

import Header from "./components/Header.js"
import Home from "./components/Home.js"
import QuemSomos from "./components/QuemSomos.js"
import NossaHistoria from "./components/NossaHistoria.js"
import Viniculas from "./components/Viniculas.js"
import Loja from "./components/Loja.js"

function App() {
  return (
    <div className="App">

          <Header />
        <Home />
        <QuemSomos/>
        <NossaHistoria />
        <Viniculas />
        <Loja/>
    </div>
  );
}

export default App;
