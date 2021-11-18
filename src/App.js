
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import Product from './Pages/Product/Product';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="main-container">
      <AuthProvider>
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
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/product/:productID'>
              <Product></Product>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
