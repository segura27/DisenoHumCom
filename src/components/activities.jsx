import React from 'react'
import { Col, Row, ButtonToolbar, Button } from 'react-bootstrap'

export default class Activities extends React.Component {
  render() {
    return (
      <Col sm={10}>

        <h1>Bienvenido a My Educational Site</h1>
        <br />

        <h3>Elige tu nivel para poder comenzar a JUGAR !!</h3>

        <br />
        <div className="d-flex justify-content-center">
          <ButtonToolbar >
            <Button className='m-4' variant='primary'>Cuarto</Button>
            <Button className='m-4' variant='secondary'>Quinto</Button>
            <Button className='m-4' variant='success'>Sexto</Button>
          </ButtonToolbar>
        </div>
      




      </Col>
    )
  }
}
