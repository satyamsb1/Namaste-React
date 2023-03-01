// import Header from "./Header";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import { Component } from 'react';
import Profile from "./ProfileClass";


class About extends Component {
    constructor(props)
    {
        super(props);
        
        // console.log("Parent Constructor");
    };
    componentDidMount()
    {
        // console.log("Parent componentDidMount");
    };

    render()
    {
        // console.log("Parent redner")
        return (
            <div>
            {/* <Header/> */}
                <h1>About us page</h1>
                <p>
                    {" "}
                    This is the Namamste react chapter 7 
                </p>
                    <ProfileFunctionalComponent name = {"First Child"}/> 
                    {/* <Profile name = {"Second child"}/>  */}
            </div>
          
        )
    }
}

export default About; 