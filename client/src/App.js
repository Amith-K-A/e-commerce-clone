import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/LogIn";
import Checkout from "./pages/checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout"><Checkout/></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
