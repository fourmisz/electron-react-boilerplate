import React, { Component } from 'react'
import Widget from './dashboard/Widget';

class Dashboard extends Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-header">Dashboard</h1>
                        <div className="row">
                            <div className="col-sm-3">
                                <Widget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
