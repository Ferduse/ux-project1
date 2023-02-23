import './App.css';

import Home from './components/Home';
import Menu from './components/Menu';
import Plants from './components/Plants';
import About from './components/About';

import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />}/>
          <Route path='plants' element={<Plants />}/>
          <Route path='about' element={<About />}/>

        </Route>
      </Routes>
    </div>
  );
}

const navStyle = {textDecoration: "none", color:"pink"};
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/About">About</Link>
          </li>
          <li>
            <Link style={navStyle} to="/Menu">Menu</Link>
          </li>
          <li>
            <Link style={navStyle} to="/Plants">Plants</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}