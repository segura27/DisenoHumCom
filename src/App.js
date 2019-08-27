import React from 'react'
import './App.css'
import VerticalMenu from './components/verticalMenu.jsx'
import Activities from './components/activities.jsx'
import { Col, Row, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <Container className='App' fluid="true" >
      <Row style={{'height': '-webkit-fill-available'}}>
        <Col style={{ width: '100%', backgroundColor: 'lightGray' }} sm={2}>
          <Image src='./img/logomep.png' rounded width='30%' height='30%' />
          <VerticalMenu key='verticalMenu' />
        </Col>
        <Activities />
      </Row>
    </Container>
  )
}
export default App
