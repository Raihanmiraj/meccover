import React, { Component } from 'react'
import headerlogo from './header.jpg';
import './Header.css'

export class Header extends Component {
    render() {
        return (
            
                <div className="headerback"  >
                    <h1> Mymensingh Engineering College</h1><img   src='/meclogo.png'/>
                </div>
           
        )
    }
}

export default Header
