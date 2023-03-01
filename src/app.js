import React from "react";  

import ReactDOM from "react-dom/client";

//Default Imports
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
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
                path: "about",
                element: <About/>,
                children: [
                    {
                        path: "profile", //parantPath/{path} => localhost:1234/about/profile
                        element: <Profile/>,
                    }
                ]
            },
            {
                path: "/contact",
                element : <Contact/>,
            },
            {
                path: "/restaurant/:resid",
                element : <RestaurantMenu/>,
            },
            {
                path: "/login",
                element : <LoginForm/>,
            }
        ],
    },
]);



root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>); //Function component
