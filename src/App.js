import './App.css';
import Nav from './components/nav.js'
import Home from './pages/home.js'
import { Route, Switch } from 'react-router-dom'
import SignUp from './pages/sign_up';
import SignIn from './pages/sign_in'
import ProtectedRoute from './pages/protected_route';
import Cart from './pages/cart';


function App() {



  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}  />
        <ProtectedRoute path='/signup' component={SignUp}  />
        <ProtectedRoute path='/signin' component={SignIn}  />
        <Route path='/cart' component={Cart} />
      </Switch>
    </div>
  );
  
 
 
}


export default App;
