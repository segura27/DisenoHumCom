import React from 'react'
import VerticalMenu from './verticalMenu.jsx'
import Activities from './activities.jsx'
import Footer from './footer.jsx'
import { Col, Row, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default class Home extends React.Component {

  render() {
    return (
      <Container className='App' fluid="true" >
        <Row >
          <Col style={{ width: '100%', backgroundColor: 'lightGray' }} sm={2}>
            <Image src='./img/logomep.png' rounded width='30%' height='10%' />
            <VerticalMenu key='verticalMenu' />
          </Col>
          <Activities />
        </Row>
        <Footer />
      </Container>
    )
  }
}
