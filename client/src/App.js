
//TODO Ekran boyutunua göre navbar footer ve home page componentleri düzenlenecek. home page bittikten sonra



//Pages
import Home from './Pages/Home/home'
import Collection from './Pages/Collection/collection'
import ErrorPage from './Pages/Error/errorPage'
import About from './Pages/About/about'
import Product from './Pages/Product/product'
import SalePoint from './Pages/Salepoint/salePoint'
import Contact from './Pages/Contact/contact'
import Newproduct from './Pages/NewProduct/newProduct'
import SpecialProduct from './Pages/Specialproduct/specialproduct'

//Components
import Navbar from './Component/Navbar/navbar'
import Footer from './Component/Footer/footer'


import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";



const Layout = () => {
  return (

    <div className="app">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/collections/",
        element: <Collection />,

      },
      {
        path: "/product/:id",
        element: <Product />,

      },
      
      {
        path: "/about/",
        element: <About />,

      },
      {
        path: "/salepoint/",
        element: <SalePoint />,

      },
      {
        path: "/contact/",
        element: <Contact />,

      },
      
      {
        path: "/newproducts/",
        element: <Newproduct />,

      },
      {
        path: "/specialproducts/",
        element: <SpecialProduct />,

      },
    ]
  },

]);




function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
