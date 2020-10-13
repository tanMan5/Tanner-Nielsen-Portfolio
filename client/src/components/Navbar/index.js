import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'

class NavTabs extends Component {
    render() {
        return (
            
            <Nav className="container navbar justify-content-end flex-column flex-sm-row" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}

export default NavTabs;