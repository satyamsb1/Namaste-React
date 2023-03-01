import { useState } from "react";
import logo from "../assets/img/food.jpeg";
import { Link } from "react-router-dom";

const Title = () =>
(
    <a href="/"> 
        <img 
        className="logo"
         src={logo}          
         alt="not rendered" />
    </a>
);


const Header = () =>
{
    const [isLoggedIn, setIsloggedIn] = useState(false);
    return ( 
        <div className="header">
            <Title/>
                <div className = "nav-items" >
                    <ul>
                        <li> <Link to="/"> Home </Link> </li>
                        <li> <Link to="/about"> About </Link> </li>
                        <li> <Link to="/contact"> Contact </Link> </li>
                        <li>Cart</li>
                    </ul>
                </div>
                {
                    isLoggedIn ? (
                        
                        <button onClick={()=> setIsloggedIn(false)}> 
                            <Link to="/login"> Logout </Link>
                        </button> 
                    ) : (
                        
                        <button onClick={()=> setIsloggedIn(true)}>
                            <Link to="/login">Login </Link>
                        </button>)
                        
                }  
        </div>
    );
};

export default Header; 