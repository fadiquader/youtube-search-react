import React from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import './index.css';

export class Header extends React.Component {

  render() {
    const { onSearchChange } = this.props;
    return (
      <Navbar className="nav-bar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Brand</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={e => onSearchChange(e.target.value)}
              />
            </FormGroup>{' '}
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
