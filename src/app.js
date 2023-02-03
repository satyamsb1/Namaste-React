import React from "react";  

import ReactDOM from "react-dom/client";

//Default Imports
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

//Named Imports
// import {Title} from "./components/Header";

//Import all functions
// import * as Obj from "./components/Header";


const AppLayout = () =>
{
    return (
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
};

root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout/>); //Function component
