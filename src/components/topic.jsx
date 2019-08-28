import React from 'react'
import TopicCard from './card.jsx';

export default class Topic extends React.Component {
  state = {
    topics: ['Historia', 'Geografía', 'Sociología', 'Formación Ciudadana'],
    subTopics: { Historia: ['h1', 'h2'], Geografía: ['g1', 'g2'], Sociología: [], 'Formación Ciudadana': ['fc'] }
  }

  render() {
    return (
      <div>
        {this.state.topics.map(tp => <TopicCard tittle={tp} body={tp+'body'}/>)}
      </div>
    )
  }
}
