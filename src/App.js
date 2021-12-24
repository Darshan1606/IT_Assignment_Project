
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




import Login from "./components/login/login.component";
import SignUp from "./components/login/signup.component.js";

function App() {
  return (
    <Router>
     
      <div className="container ">
        
        <Switch>
          <Route exact path="/">
          </Route>
         
        
       
        </Switch>
      </div>
    
    <div className="App m-5 mb-3">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container m-3">
          
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}><button type="button" class="btn btn-primary">Login</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}><button type="button" class="btn btn-primary">Sign Up</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
