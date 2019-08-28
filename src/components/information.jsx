import React from 'react'
import { Container, Breadcrumb } from 'react-bootstrap'

import GradeChoose from './gradeChoose.jsx';

export default class Information extends React.Component {
  state = {
    topics: ['Historia', 'Geografía', 'Sociología', 'Formación Ciudadana'],
    subTopics: { Historia: ['h1', 'h2'], Geografía: ['g1', 'g2'], Sociología: [], 'Formación Ciudadana': ['fc'] },
    content: {
      4: { h1: 'this is a content for h1 for 4', h2: 'this is a content for h2  for 4', g1: 'this is a content for g1  for 4', g2: 'this is a content for g2  for 4', fc: 'this is a content for fc  for 4' },
      5: { h1: 'this is a content for h1 for 5', h2: 'this is a content for h2 for 5', g1: 'this is a content for g1 for 5', g2: 'this is a content for g2 for 5', fc: 'this is a content for fc  for 5' },
      6: { h1: 'this is a content for h1 for 6', h2: 'this is a content for h2 for 6', g1: 'this is a content for g1 for 6 ', g2: 'this is a content for g2 for 6', fc: 'this is a content for fc for 6' },
    }
  }

  render() {
    const { topic, grade, subTopic } = this.props.match.params
    const url = grade ? `/${grade}/${topic}` : `/${topic}`
    return (

      <Container >
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          {grade && <Breadcrumb.Item>{grade}</Breadcrumb.Item>}
          <Breadcrumb.Item href={url}>{topic}</Breadcrumb.Item>
          <Breadcrumb.Item active>{subTopic}</Breadcrumb.Item>
        </Breadcrumb>
        {!grade ? <GradeChoose topic={topic} /> :
          (<div>

            {topic}  ---- {grade}  --- {subTopic}
            <br />
            {this.state.content[grade][subTopic]} </div>)
        }
      </Container >
    )
  }
}
