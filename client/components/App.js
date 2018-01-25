import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import NavBar from './shared/NavBar';
import SideBar from './shared/SideBar';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends Component {
    render() {
        return (
             <Grid >
                 <Row className="show-grid wrapper">
                    <nav className="navbar navbar-default"></nav>
                    <NavBar />
                    <Col xs={4} md={3}>
                        <SideBar />
                    </Col>
                    <Col xs={12} md={9}>
                        <div className="wrapper-dynamic-content">
                            <FlashMessagesList />
                            {this.props.children}
                        </div>
                    </Col>
                 </Row>
             </Grid>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
