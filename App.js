import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Header from "./component/Header"
import Coins from "./component/Coins"
import CoinsDetails from "./component/CoinDetails"
import Exchange from "./component/Exchanges"
import Home from "./component/Home"
import {Loader} from "./component/loader"
import Footer from "./component/Footer"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/exchanges' element={<Exchange/>}/>
        <Route path="/coin/:id" element={<CoinsDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

