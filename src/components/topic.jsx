import React from 'react'
import TopicCard from './card.jsx';
import { Col, Row, Container, Breadcrumb } from 'react-bootstrap'
import GradeChoose from './gradeChoose.jsx';

export default class Topic extends React.Component {
  state = {
    subTopics: {
      4: {
        Historia: [{ name: "Definición y su importancia en la vida cotidiana de los Estudios Sociales", body: "body for h1", image: "map.jpg" }],
        Geografía:[{ name: "Ubicación hemisférica y continental del país.", body: "body for h1", image: "map.jpg" }, { name: "Países vecinos de Costa Rica: construcción de lazos entre países centroamericanos.", body: "body for h1", image: "map.jpg" }, { name: "Climas de Costa Rica.", body: "body for h1", image: "map.jpg" }],
        Sociología: [{ name: "Regiones socioeconómicas de Costa Rica: ubicación y características", body: "body for h1", image: "map.jpg" }],
      },
      5: {
        Historia: [{ name: "Etnias de Costa Rica: nombres y ubicación geográfica", body: "body for h1", image: "map.jpg" }, { name: "Arte de los pueblos originarios de Costa Rica.", body: "body for h2", image: "ww2.jpg" },{ name: "La diferenciación de clases según origen de sangre: criollos, mulatos,mestizo, pardo, etc", body: "body for h2", image: "ww2.jpg" }],
        Geografía:[],
        Sociología: [{ name: "Impactos culturales, demográficos y sociales de la conquista española", body: "body for h1", image: "map.jpg" }, { name: "El mestizaje en Costa Rica.", body: "body for h1", image: "map.jpg" }],
      },
      6: {
        Historia: [{ name: "La Campaña Nacional en la época de la independencia.", body: "body for h1", image: "map.jpg" }, { name: "Importancia de Juan Rafael Mora, Francisca Carrasco y Juan Santamaría como figuras emblemáticas", body: "body for h2", image: "ww2.jpg" }, { name: "Principales batallas y rutas de la Campaña Nacional: Santa Rosa, Rivas, Sardinal y Toma de la Vía del Tránsito (Combate de la Trinidad).", body: "body for h1", image: "map.jpg" }],
        Geografía:[],
        Sociología: [{ name: "Prevención del consumo de drogas: fortalecer nuestra identidad para la toma de decisiones.", body: "body for h1", image: "map.jpg" }, { name: "Medidas básicas para el manejo de las redes sociales", body: "body for h1", image: "map.jpg" }, { name: "Prevención y denuncia del cyberbullying y protección de la integridad física y emocional del estudiante.", body: "body for h1", image: "map.jpg" }],
      }
    }
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
        <br/>
        <h1>Subtemas de {topic} </h1>
        <br/>
        {!grade ? <GradeChoose topic={topic} /> :
          (<Row>
            {this.state.subTopics[grade][topic].map(st => <Col className="m-4" key={st}><TopicCard tittle={st.name} body={st.body} url={`/${grade}/${topic}/${st.name}`} image={st.image}/></Col>)}
          </Row>)}

      </Container>
    )
  }
}
