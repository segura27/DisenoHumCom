import React from 'react'
import VerticalMenu from './verticalMenu.jsx'
import Footer from './footer.jsx'
import { Col, Row, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Header from './header.jsx';

export default class Home extends React.Component {

  render() {
    return (
      <Container className='App' fluid="true" >
        <Row>
          <Col className="vertical-menu" sm={2}>
            <Image className="logo" src='./img/logomep.png' rounded width='50%' height='12%' />
            <VerticalMenu {...this.props} key='verticalMenu' />
          </Col>

          <Header {...this.props} />
        </Row>
        <Footer />
      </Container>
    )
  }
}
