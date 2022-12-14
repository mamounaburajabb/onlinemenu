import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AllMales from './pages/allMales/allMales';
import NotFound from './pages/Notfound/notFound';
import Login from './pages/login/login';
import Drink from './pages/drinks/drinks';
import Pizzas from './pages/pizza/pizza';
import Salads from './pages/salad/salad';
import Burger from './pages/burgers/burger';
import Pastas from './pages/pasta/pasta';
import Header from './component/header/header';
import Home from './pages/home/home';
function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />

          <Route path='/admin' element={<Login />} />
          <Route path='/all' element={<AllMales />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/pizza' element={<Pizzas />} />
          <Route path='/drink' element={<Drink />} />
          <Route path='/salad' element={<Salads />} />
          <Route path='/pasta' element={<Pastas />} />
          <Route path='/burgers' element={<Burger />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
