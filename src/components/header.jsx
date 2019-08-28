import React, { Component } from 'react';
import { Col, Image} from 'react-bootstrap';

class Header extends Component {
    render() {
        return <Col sm={10} className="header">
            <h1>Bienvenido a My Educational Site</h1>
            <br />
            <Image className="splash" src='./img/splash.jpg' rounded />
            <p sm={4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </Col>
    }
}
export default Header;