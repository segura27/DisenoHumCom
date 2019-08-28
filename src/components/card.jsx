import React from 'react'
import { Card, Button } from 'react-bootstrap'
import image from "../img/logomep.png"
import {
  withRouter
} from 'react-router-dom'


class TopicCard extends React.Component {
  render() {
    const { url, tittle,body } = this.props
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{tittle}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
          <Button onClick={() => {
            this.props.history.push(url)
          }} variant="primary">Mas informacion</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default withRouter(TopicCard)