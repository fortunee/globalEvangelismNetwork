import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import NavBar from './shared/NavBar';
import SideBar from './shared/SideBar';

class App extends Component {
    render() {
        return (
             <Grid >
                {/* <NavBar /> */}
                 <Row className="show-grid">
                     <Col xs={4} md={3}>
                         <SideBar />
                     </Col>
                     <Col xs={12} md={9}>
                         {this.props.children}
                     </Col>
                 </Row>
             </Grid>
        );
    }
}

export default App;
