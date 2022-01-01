
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


import Course from "./components/course/Course";
// import Login from "./components/login/login";
// import SignUp from "./components/login/signup";
import Assignment from './components/assignment/assignment';

function App() {
  return (
    <Router>    
    <div className="App m-5 mb-5" >
      <nav className="navbar   fixed-top">
        <div className="container">
          
        
            <ul className="navbar-nav ">
             
              <li className="nav-item">
                <Link className="nav-link" to={"/course"}><button type="button" class="btn btn-primary">Course</button></Link>
              </li>
            
            </ul>
          
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            {/* <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/course" component={Course} />*/}
            <Route path="/assignment" component={Assignment} /> 
            <Route path="/" component={Course} />
          </Switch>
          
        </div>
       
        
      </div>
      
    </div>

      

    </Router>

 
      
  
  );
}

export default App;
