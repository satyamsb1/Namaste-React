import React from "react";  

import ReactDOM from "react-dom";

// jsx

const heading2 = (  //React Element
    <h1 id="title" key ="h2">
        This is a react element 
    </h1>
    );


//React Component 

/// Functional Component

const Title = () =>
( 
    <h1 id="top" key ="h2">
        This is a functional Component
    </h1>
);


const HeaderComponent = () =>
{
    return (  //You can also skip the return 
    <div>
        {heading2}
        <Title />
        <h1>Namaste React This is namaste react</h1>
        <h2>This is a h2 tag</h2>
    </div>
    );
};
const HeaderComponent2 = () =>
{
    return(
    <div>
        <h1>Namaste React This is namaste react</h1>
        <h2>This is a h2 tag</h2>
    </div>
    );
    
};

root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading2);//render will modify / override

root.render(<HeaderComponent/>); //Function component
