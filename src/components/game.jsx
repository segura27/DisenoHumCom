import React from 'react'
import { ButtonToolbar, Button, Container, Alert, Image } from 'react-bootstrap'
import gameImage from '../img/game.jpg'
export default class Game extends React.Component {
  state = { show: false, showError:false }
  render() {
    return (
      <Container fluid='true'>
        <h1>Juego</h1>
        <Image className="splash" src={gameImage} rounded />
        <div className="d-flex justify-content-center">
          <ButtonToolbar >
            <Button className='m-4' variant='danger'onClick={() => this.setState({ showError: true })} >Equivocado</Button>
            <Button className='m-4' variant='success' onClick={() => this.setState({ show: true })}>Correcto</Button>
          </ButtonToolbar>
        </div>
        <>
          <Alert show={this.state.show} variant="success">
            <Alert.Heading>Correcto!</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
              fermentum.
        </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => this.setState({ show: false })} variant="outline-success">
                Continuar!
          </Button>
            </div>
          </Alert>
          <Alert show={this.state.showError} variant="danger">
            <Alert.Heading>Intentalo de nuevo!</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
              fermentum.
        </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => this.setState({ showError: false })} variant="outline-danger">
                Continuar!
          </Button>
            </div>
          </Alert>
        </>
      </Container>
    )
  }
}
