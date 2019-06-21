import React,{Suspense,lazy} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home  = lazy(() => import("./components/home"));
const Profile  = lazy(() => import("./components/profile"));
const Dashboard = lazy(() => import ("./components/dashboard"));


function App() {
  return (

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
          </Suspense>

        </div>
      </Router>



  );
}

export default App;
