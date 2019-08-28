import React from 'react'
import { Col } from 'react-bootstrap'

import Game from './game.jsx'

export default class Activities extends React.Component {
  render() {
    return (
      <Col sm={10}>
        <h1>Bienvenido a My Educational Site</h1>
        <br />
        <div className='mb-5 pb-5'>
          Se realizara la actividad para el Tema: "TEMA" -subtema "SUBTEMA"
        </div>
        <Game />
      </Col>
    )
  }
}
