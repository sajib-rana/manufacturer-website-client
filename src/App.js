import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
