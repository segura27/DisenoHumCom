import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import {
  withRouter
} from 'react-router-dom'

class GradeChoose extends React.Component {
  render() {
    const { topic } = this.props 
    const url = topic ? `${topic}/` : '';
    return (
      <div>
        <h3>Elige tu nivel para poder comenzar !!</h3>

        <br />
        <div className="d-flex justify-content-center">
          <ButtonToolbar >
          <Button className='m-4' onClick={() => {
              this.props.history.push( `/4/${url}`);
            }} variant='primary'>Cuarto</Button>
            <Button className='m-4'onClick={() => {
              this.props.history.push(`/5/${url}`);
            }} variant='warning'>Quinto</Button>
            <Button className='m-4' onClick={() => {
              this.props.history.push(`/6/${url}`);
            }}variant='success'>Sexto</Button>
          </ButtonToolbar>
        </div>
      </div>
    )
  }
}
export default withRouter(GradeChoose)