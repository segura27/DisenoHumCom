import React from 'react'
import TopicCard from './card.jsx';
import { Col, Row, Container, Breadcrumb } from 'react-bootstrap'
import GradeChoose from './gradeChoose.jsx';

export default class Topic extends React.Component {
  state = {
    topics: ['Historia', 'Geografía', 'Sociología', 'Formación Ciudadana'],
    subTopics: { Historia: ['h1', 'h2'], Geografía: ['g1', 'g2'], Sociología: [], 'Formación Ciudadana': ['fc'] }
  }

  render() {
    const { topic, grade } = this.props.match.params
    return (
      <Container >
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          {grade && <Breadcrumb.Item>{grade}</Breadcrumb.Item>}
          <Breadcrumb.Item active>{topic}</Breadcrumb.Item>
        </Breadcrumb>
        {topic}  ---- {grade}
        {!grade ? <GradeChoose topic={topic} /> :
          (<Row>
            {this.state.subTopics[topic].map(st => <Col className="m-4" key={st}><TopicCard tittle={st} body={st + ' body'} url={`/${grade}/${topic}/${st}`} /></Col>)}
          </Row>)}

      </Container>
    )
  }
}
