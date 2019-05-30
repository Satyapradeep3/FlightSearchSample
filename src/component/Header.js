import React, {Component} from 'react';
import { Link} from 'react-router-dom';
class Header extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Header"> 
            <Link to='/'>Search</Link>
            <Link to="/FlightSearch">FlightSearch</Link>
            </div>
        )
    }
}

export default Header;