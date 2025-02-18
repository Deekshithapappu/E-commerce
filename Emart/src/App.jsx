import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/pages/landingpage';
import Mobilepage from './components/pages/mobilepage';
import Watchespage from './components/pages/watchespage';
import Menspage from './components/pages/menspage';
import Computerpage from './components/pages/computerpage';
import Tvpage from './components/pages/tvpage';
import Mobilesingle from './singlepages/mobilesingle';
import Usercart from './usercart'
import SignIn from './signin'
import SignOut from './signout'
function App() {
  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/watches' element={<Watchespage/>} />
        <Route path='/mobiles' element={<Mobilepage/>} />
          <Route path='/mobiles/:id' element={<Mobilesingle/>} />
        <Route path='/mens' element={<Menspage/>} />
        <Route path='/computer' element={<Computerpage/>} />
        <Route path='/tv' element={<Tvpage/>} />
        <Route path='/usercart' element={<Usercart />} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signout' element={<SignOut/>} />
      </Routes>
  );
}

export default App;
