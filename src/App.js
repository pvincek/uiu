import CalendarModule from './components/CalendarModule/CalendarModule';
import Registracija from './components/Pages/Registracija/Registracija';
import LockScreen from './components/Pages/LockScreen/LockScreen';
import Registracija2 from './components/Pages/Registracija/Registracija2';
import Biljeske from './components/Pages/Biljeske/Biljeske';
import './App.css'
import { Route } from 'react-router';
function App() {
  return (
      <>
      <Route path='/' exact>
      <LockScreen/>
      </Route>
      <Route path='/biljeske'>
        <Biljeske/>
      </Route>
      <Route path='/kalendar'>
        <CalendarModule/>
      </Route>
      <Route path='/registracija'>
        <Registracija/>
      </Route>
      <Route path='/registracija2' exact>
        <Registracija2/>


      </Route>
      </>

  );
}

export default App;
