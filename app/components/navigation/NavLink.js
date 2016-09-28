import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';

class NavLink extends Component {
    render() {
        let isActive = this.context.router.isActive(this.props.to);
        console.log('isActive', isActive);
        return (
            <li className={isActive ? 'active' : ''}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </li>
        )
    }
}

NavLink.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default NavLink;
