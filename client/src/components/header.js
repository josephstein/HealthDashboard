import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-default">
            <div className="container-fluid">
                <div className="navbar-header"><a className="navbar-brand" href="/">Care Coordinator Dashboard</a></div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav pull-right">
                        <li><a href="/">John Smith</a></li>
                        <li><button className="btn btn-primary btn-default navbar-btn btn-xs">Logout</button></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
