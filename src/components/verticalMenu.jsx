import React from 'react'
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class VerticalMenu extends React.Component {
  state = {
    topics: ['Historia', 'Geografía', 'Sociología', 'Formación Ciudadana'],
    subTopics: {
      Historia: ['h1', 'h2'], Geografía: ['g1', 'g2'],
      Sociología: [], 'Formación Ciudadana': ['fc']
    }
  }

  getSubtopics(topic) {
    return this.state.subTopics[topic].map(st => {
      return (
        <LinkContainer to={`/${topic}/${st}`}>
          <Card
            eventKey={topic + st}
            key={topic + st}
            justify="true"
          >
            {st}
          </Card>
        </LinkContainer>
      )
    })
  }
  render() {
    return (
      <Nav defaultActiveKey='/home' variant='tabs' className=' justify-content-end flex-column mt-5'>
        <Nav.Link eventKey='educationalSite' href="/" key='educationalSite'>
          My Educational Site
        </Nav.Link>
        {this.state.topics.map(topic => {
          return (
            <div>
              <Accordion defaultActiveKey={topic}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    {topic}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Link>{this.getSubtopics(topic)}</Card.Link>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          )
        })}
      </Nav>
    )
  }
}
