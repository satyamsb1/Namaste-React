import React from "react";  

import ReactDOM from "react-dom/client";

//Default Imports
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

const AppLayout = () =>
{
    return (
        <React.Fragment>
            <Header/>
            <Outlet/>
            <Footer/>
        </React.Fragment>
    );
};


const appRouter = createBrowserRouter([
    {
        //what happens at different paths goes here
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element : <Contact/>,
            },
            {
                path: "/restaurant/:resid",
                element : <RestaurantMenu/>,
            }
        ],
    },
]);



root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>); //Function component
