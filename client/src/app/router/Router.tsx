import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import Cataloge from "../../features/catalog/catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import { ContactPage } from "@mui/icons-material";

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
            ]
        }
    ]

)