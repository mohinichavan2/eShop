import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import CheckoutFinalProduct from './components/CheckoutFinalProduct';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/login'>
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">    
            <Header />
            <Home />
            <CheckoutFinalProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
