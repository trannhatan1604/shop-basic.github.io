
import { Route, Routes } from 'react-router-dom';
import path from './utils/path';
import { About_us, Cart, Home, HomePage, Menu, Product } from './components/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.HOME} element={<HomePage />} />
          <Route path={path.ABOUT_US} element={<About_us />} />
          <Route path={path.MENU} element={<Menu />} />
          <Route path={path.PRODUCT} element={<Product />} />

          <Route path={path.CART} element={<Cart />} />
          <Route path={path.STAR} element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light">
        
      </ToastContainer>
    </div>
  );
}

export default App;
