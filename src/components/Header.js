const Title = () =>
(
    <a href="/"> 
        <img 
        className="logo"
         src="https://images.unsplash.com/photo-1547494784-d143dea885b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80"           
         alt="not rendered" />
    </a>
   
);


const Header = () =>
{
    return (  //You can also skip the return 
   
    <div className="header">
        <Title/>
            <div className = "nav-items" >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
    </div>
    );
};

export default Header; 