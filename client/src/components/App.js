import { Route, Switch } from "react-router-dom";
import About from "./About/About";
import Home from "./Home";
import Login from "./RegiLogin/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
