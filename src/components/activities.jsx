import React from 'react'
import { Col, ButtonToolbar, Button, Container } from 'react-bootstrap'
import Game from './game.jsx'

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
        <div className='mb-5 pb-5'>
          Se realizara la actividad para el Tema: "TEMA" -subtema "SUBTEMA"
        </div>
          <Game />



      </Col>
    )
  }
}
