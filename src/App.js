
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import LoginForm  from './LoginFolder';


const App=()=>(
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={LoginForm}/>
  </Switch>
)

export default App;
