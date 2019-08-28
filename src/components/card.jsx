import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default class TopicCard extends React.Component {
  state = { show: false, showError: false }
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.body}
    </Card.Text>
          <Button variant="primary">Mas informacion</Button>
        </Card.Body>
      </Card>
    )
  }
}
