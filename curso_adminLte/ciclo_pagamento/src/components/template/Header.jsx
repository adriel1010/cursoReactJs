import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>My</b>M</span>
                    <span className="logo-lg">
                    <i className="da da-money"></i>
                    <b>My</b>Money
                    </span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="push-menu" > 
                    </a> 
                </nav>
            </header>
        )
    }
}
