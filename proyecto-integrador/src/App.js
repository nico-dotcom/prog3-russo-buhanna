import Home from './screens/Home' 
import NotFound from './screens/NotFound'
import './styles.css'
import {Switch, Route} from 'react-router-dom'
import Cartelera from './screens/Cartelera' 
import DetallePelicula from './screens/Detalle'
import Favoritos from './screens/Favoritos'
import MasVistas from './screens/MasVistas'
import Resultados from './screens/Resultados'

function App(props) {
  console.log('Estas son las props de la Aplicacion', props)
  return (
    <>
      <Switch >
        <Route path='/' exact={true} component={Home} />
        <Route path='/encartelera' component={Cartelera} />
        <Route path='/masvistas' component={MasVistas} />
        <Route path='/resultados' component={Resultados} />
        <Route path='/favoritos' exact={true} component={Favoritos} />
        <Route path='/pelicula/id/:id' component={DetallePelicula} />
        <Route path='' exact={true} component={NotFound} />

      </Switch>
    </>
  );
}


export default App;
