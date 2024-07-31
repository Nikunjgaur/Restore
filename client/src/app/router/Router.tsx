import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Cataloge from "../../features/catalog/catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import { ContactPage } from "@mui/icons-material";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFount";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {path: '', element: <HomePage/>},
                {path: 'catalog', element: <Cataloge/>},
                {path: 'catalog/:id', element: <ProductDetails/>},
                {path: 'about', element: <AboutPage/>},
                {path: 'contact', element: <ContactPage/>},
                {path: 'server-error', element: <ServerError/>},
                {path: 'not-found', element: <NotFound/>},
                {path: '*', element: <Navigate replace to='/not-found'/>}
            ]
        }
    ]

)