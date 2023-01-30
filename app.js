import React from 'react';
import ReactDOM  from 'react-dom/client'; 

const heading = React.createElement("h1", {
    id: "title"
}, 
"heading 1");


const heading2 = React.createElement("h2", {
    id: "title",
    hellow:"world", //This are known as props it can be anything
}, "heading 2");


const container = React.createElement("div", {
        id: "container"
    }, 
    [heading, heading2]
);//these are react element

console.log(container);

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);//render will modify / override
