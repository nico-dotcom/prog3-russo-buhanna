import Home from './screens/home';
import NotFound from './screens/NotFound';
// import './styles.css'
import {Switch, Route} from 'react-router-dom'

function App(props) {
  console.log('Estas son las props de la Aplicacion', props)
  return (
    <>
      <Switch >
        <Route path='/' exact={true} component={Home} />
        <Route path='' exact={true} component={NotFound} />
      </Switch>
    </>
  );
}


export default App;
