
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import Navbar  from './components/navbar/Navbar'
import Course from "./components/course/Course";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";
import Assignment from './components/assignment/Assignment';

function App() {
  return (
    <Router>    
    <div className="App " >
     
<Navbar/>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/course" component={Course} />
            <Route path="/assignment" component={Assignment} /> 
            <Route path="/course" component={Course} />
          </Switch>
          
        </div>
       
        
      </div>
      
    </div>

      

    </Router>

 
      
  
  );
}

export default App;
