import React from 'react'
import './App.css'
import VerticalMenu from './components/verticalMenu.jsx'
import Activities from './components/activities.jsx'
import Footer from './components/footer.jsx'
import { Col, Row, Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function App() {
  return (
    <Container className='App' fluid="true" >
      <Row >
        <Col style={{ width: '100%', backgroundColor: 'lightGray' }} sm={2}>
          <Image src='./img/logomep.png' rounded width='30%' height='10%' />
          <VerticalMenu key='verticalMenu' />
        </Col>
        <Activities />
      </Row>
      <Footer/>
    </Container>
  )
}
export default App
