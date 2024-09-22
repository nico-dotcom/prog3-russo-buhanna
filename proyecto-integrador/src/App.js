import Home from './screens/Home';  
import NotFound from './screens/NotFound';
import DetallePelicula from './screens/Detalle'
import './styles.css'
import {Switch, Route} from 'react-router-dom'

function App(props) {
  console.log('Estas son las props de la Aplicacion', props)
  return (
    <>
      <Switch >
        <Route path='/' exact={true} component={Home} />
        <Route path='' exact={true} component={NotFound} />
        <Route path='/personaje/id/:id' component={DetallePelicula} />
      </Switch>
    </>
  );
}


export default App;
