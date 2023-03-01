import { useState, useEffect } from "react";
const Profile = (props) =>
{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(() =>{
            console.log("Namaste React OP");
        },1000);
        console.log("Use Effect");
        return () =>{
            clearInterval(timer)
            console.log("Use effect Return");
        }
    },[])
    console.log("Render");
    return(
        <div>
            <h2>Profile Component</h2>
            <h3>Name: {props.name}</h3>
            <h3>Count: {count}</h3>
            <button onClick={()=> setCount(12)}>Count</button>
        </div>
    );
};
export default Profile; 