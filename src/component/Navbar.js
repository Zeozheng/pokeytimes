import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';
//withRouter higher-order component and supercharge components
const Navbar = (props) =>{
    // console.log(props);
    //     setTimeout (() =>{
    //     props.history.push('/about')
    // },2000);
    return(
        <nav className="nav-wrapper red darken-3">
            <div className= "container">
                <a className ="brand-logo">Poke' Time</a>
                <ul className ="right">
                    <li><Link to ="/">Home</Link></li>
                    <li><NavLink to ="/about">About</NavLink></li>
                    <li><NavLink to ="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default withRouter(Navbar)