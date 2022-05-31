import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import FeaturesPage from './Components/Features/FeaturesPage';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/features" element={<FeaturesPage />}></Route>
        {/* <Route path="/portfolio" element={<Features/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
