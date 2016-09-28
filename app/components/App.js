import React, { Component } from 'react'
import Navigation from './navigation/Navigation';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return  (
            <div>
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}

export default App;
