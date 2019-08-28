import React from 'react'
import Nav from 'react-bootstrap/Nav'

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
        <Nav.Link eventKey={topic + st} key={topic + st} justify='true'>
          -- {st}
        </Nav.Link>
      )
    })
  }
  render() {
    return (
      <Nav defaultActiveKey='/home' variant='tabs' className='justify-content-end flex-column mt-2'>
        <Nav.Link eventKey='educationalSite' key='educationalSite'>
          My Educational Site
        </Nav.Link>
        {this.state.topics.map(topic => {
          return (
            <div>
              <Nav.Link eventKey={topic} href="/about" key={topic} justify='true'>
                {topic}
              </Nav.Link>
              {this.getSubtopics(topic)}
            </div>
          )
        })}
      </Nav>
    )
  }
}
