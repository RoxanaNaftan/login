
import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar.js';
import { Link } from 'react-router-dom';


//import './Navbar.css';

class Home1 extends Component {
    render() {
        return(
            <div>
                <Navbar/>;
                <div className="container">
                <h2>Welcome</h2>
                <p>
                <img src= "https://erpinnews.com/wp-content/uploads/2018/05/what-can-crm-software-do-for-your-business.png"  width="450" height="190"/>

                </p>

            </div>
            </div>
        );
    }
}

export default Home1;
