import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';


// App function
function App() {
  return (
    <>
      {/* setup routes */}
      <Routes>
        {/* primary route with Layout Component used */}
        <Route path="/" element={<Layout />}>
          {/* creates Home page when nothing is specified - index element prop */}
          <Route index element={<Home />}></Route>
          {/* shows About page when user visits /about */}
          <Route path="about" element={<About />}></Route>
          {/* shows Contact page when user visits /contact */}
          <Route path="contact" element={<Contact />}></Route>
          {/* shows Work page when user visits /work */}
          <Route path="work" element={<Work />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
