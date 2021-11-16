
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Redirect to="/">
              <Home></Home>
            </Redirect>

          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <Route path='/dashboard'>
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
