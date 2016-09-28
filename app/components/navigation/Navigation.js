import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';
import NavLink from './NavLink';

class Navigation extends Component {
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                        <a className="navbar-brand">Tracer</a>
                    </div>
                    <div
                        className="collapse navbar-collapse"
                        id="bs-example-navbar-collapse-1"
                    >
                        <ul className="nav navbar-nav">
                            {/*<li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>*/}
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;
