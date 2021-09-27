import './App.css';
import Nav from './components/nav.js'
import Home from './pages/home.js'
import { Route, Switch } from 'react-router-dom'
import SignUp from './pages/sign_up';
import SignIn from './pages/sign_in'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}  />
        <Route path='/signup' component={SignUp}  />
        <Route path='/signin' component={SignIn}  />
      </Switch>
    </div>
  );
}

export default App;
