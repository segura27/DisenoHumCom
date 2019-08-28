import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {
  withRouter
} from 'react-router-dom'


class TopicCard extends React.Component {
  state = { image: undefined , lorem: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`};

  loadImage = imageName => {
    import(`../img/${this.props.image}`).then(image => {
      this.setState({
        image: image
      });
    });
  };
  render() {
    const { url, tittle, body } = this.props
    if (!this.state.image) { this.loadImage() }
    return (
      <Card style={{ width: '18rem' }}>
        {this.state.image && <Card.Img variant="top" src={this.state.image.default} />}
        <Card.Body>
          <Card.Title>{tittle}</Card.Title>
          <Card.Text>
            {/* {body} */}
            {this.state.lorem.substring(0,100)} ...
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