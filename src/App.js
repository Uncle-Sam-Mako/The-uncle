import './App.scss';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'react-loaders';

//Dynamic Import
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Work = lazy(() => import("./components/Work"));
const Layout = lazy(() => import ('./components/Layout'));

// App function
function App() {
  return (
    <>
      {/* setup routes */}
      <Suspense fallback={<Loader type="ball-pulse-sync"></Loader>}>
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
      </Suspense>
      
    </>
  );
}



export default App;
