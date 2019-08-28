import React from 'react'
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class VerticalMenu extends React.Component {
  state = {
    topics: ['Historia', 'Geografía', 'Sociología'],
    subTopics: {
      4: {
        Historia: ['Definición y su importancia en la vida cotidiana de los Estudios Sociales'],
        Geografía: ['Ubicación hemisférica y continental del país.', 'Países vecinos de Costa Rica: construcción de lazos entre países centroamericanos.', 'Climas de Costa Rica.'],
        Sociología: ['Regiones socioeconómicas de Costa Rica: ubicación y características']
      },
      5: {
        Historia: ['Etnias de Costa Rica: nombres y ubicación geográfica', 'Arte de los pueblos originarios de Costa Rica.', 'La diferenciación de clases según origen de sangre: criollos, mulatos,mestizo, pardo, etc'],
        Geografía: [],
        Sociología: ["Impactos culturales, demográficos y sociales de la conquista española", "El mestizaje en Costa Rica."]
      },
      6: {
        Historia: ["La Campaña Nacional en la época de la independencia.", "Importancia de Juan Rafael Mora, Francisca Carrasco y Juan Santamaría como figuras emblemáticas", "Principales batallas y rutas de la Campaña Nacional: Santa Rosa, Rivas, Sardinal y Toma de la Vía del Tránsito (Combate de la Trinidad)."],
        Geografía: [],
        Sociología: ["Prevención del consumo de drogas: fortalecer nuestra identidad para la toma de decisiones.", "Medidas básicas para el manejo de las redes sociales", "Prevención y denuncia del cyberbullying y protección de la integridad física y emocional del estudiante."]
      }
    }
  }

  getSubtopics(topic) {
    const { grade } = this.props.match.params
    return !grade ? [] : this.state.subTopics[grade][topic].map(st => {
      return (
        <LinkContainer key={topic + st +'l'} to={`/${grade}/${topic}/${st}`}>
          <Card
            eventkey={topic + st}
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
            <div key={topic}>
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
