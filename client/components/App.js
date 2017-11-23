import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import NavBar from './shared/NavBar';
import SideBar from './shared/SideBar';

class App extends Component {
    render() {
        return (
            // <div className="container-fluid">
            <Grid fluid>
                <NavBar />
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <SideBar />
                    </Col>
                    <Col xs={12} md={8}>
                        Main Section
                    </Col>
                </Row>
            </Grid>
            // </div>
        );
    }
}

export default App;
