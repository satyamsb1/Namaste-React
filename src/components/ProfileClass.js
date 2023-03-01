// Class based Component
// As functional component is similar to simple JS function class based component is similar to class in JS 
import React from 'react';
import { useLoaderData } from 'react-router-dom';

 class Profile extends React.Component {

    constructor(props){
        super(props);
        //create state here
        this.state = {
            userInfo: "Dummy Name",
            location : "Dummy Location",
        }
        //  console.log("Child Constructor " + this.props.name);
    };

    async componentDidMount(){
        //Best place to make api calls
        // const data = await fetch("https://api.github.com/users/satyamsb1");
        // const json = await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo: json
        // });
        // this.timer = setInterval(() =>{
        //     console.log("Namaste React OP");
        // },1000);
        // console.log("Child componentDidMount " + this.props.name);
    };

    componentDidUpdate(){
        // console.log("Child componentDidUpdate ");
    };
    componentWillUnmount(){ 
        clearInterval(this.timer);
        // console.log("Child componentWillUnmount");
    };
    /*
    Life Cycle of class component
        1. First the Constructor will useLoaderData
        2. Then render method will be called
        3. lastly componentDidMount will be called. 
    */
    render() {
        // console.log("child Rendering... " + this.props.name);
        const { name, location, avatar_url } = this.state?.userInfo
        return (
        <div>
            <h1>This is Profile Class Component</h1>
            <img src={avatar_url} alt="" />
            <h2>Name : {name}</h2>
            <h2>Location: {location}</h2>
            <button onClick={()=> { 
                //We Donot MUTATE State directly
                //we will never do this.state = new value.
                this.setState({
                    count: 12,
                });
            }} > Count</button>
        </div>
        
        )
    }
 }
 export default Profile;