import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from '../components/Home'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
import About from '../components/About'
import ErrorPage from '../components/ErrorPage'
import { getCartAndProductsData } from "../loaders/getCartAndProductsData";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    loader: getCartAndProductsData,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/home',
            element: <Home></Home>,
        },
        {
            path: '/shop',
            element: <Shop></Shop>,
        },
        {
            path: '/cart',
            element: <Cart></Cart>,
        },
        {
            path: '/about',
            element: <About></About>,
        },
    ]
}])