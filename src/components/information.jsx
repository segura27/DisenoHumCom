import React from 'react'
import { Container, Breadcrumb, Row, Col, Image } from 'react-bootstrap'

import GradeChoose from './gradeChoose.jsx'
import Game from './game.jsx'

export default class Information extends React.Component {
  state = {
    content: {
      4: [{ name: "Definición y su importancia en la vida cotidiana de los Estudios Sociales", body: "body for h1", image: "map.jpg" },
        { name: "Ubicación hemisférica y continental del país.", body: "body for h1", image: "map.jpg" }, { name: "Países vecinos de Costa Rica: construcción de lazos entre países centroamericanos.", body: "body for h1", image: "map.jpg" }, { name: "Climas de Costa Rica.", body: "body for h1", image: "map.jpg" },
      ],
      5: [{ name: "Etnias de Costa Rica: nombres y ubicación geográfica", body: "body for h1", image: "map.jpg" }, { name: "Arte de los pueblos originarios de Costa Rica.", body: "body for h2", image: "ww2.jpg" }, { name: "La diferenciación de clases según origen de sangre: criollos, mulatos,mestizo, pardo, etc", body: "body for h2", image: "ww2.jpg" },
      { name: "Impactos culturales, demográficos y sociales de la conquista española", body: "body for h1", image: "map.jpg" }, { name: "El mestizaje en Costa Rica.", body: "body for h1", image: "map.jpg" }],
      6: [{ name: "La Campaña Nacional en la época de la independencia.", body: "body for h1", image: "map.jpg" }, { name: "Importancia de Juan Rafael Mora, Francisca Carrasco y Juan Santamaría como figuras emblemáticas", body: "body for h2", image: "ww2.jpg" }, { name: "Principales batallas y rutas de la Campaña Nacional: Santa Rosa, Rivas, Sardinal y Toma de la Vía del Tránsito (Combate de la Trinidad).", body: "body for h1", image: "map.jpg" },
      { name: "Prevención del consumo de drogas: fortalecer nuestra identidad para la toma de decisiones.", body: "body for h1", image: "map.jpg" }, { name: "Medidas básicas para el manejo de las redes sociales", body: "body for h1", image: "map.jpg" }, { name: "Prevención y denuncia del cyberbullying y protección de la integridad física y emocional del estudiante.", body: "body for h1", image: "map.jpg" }]
    },
    lorem: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  }

  loadImage = imageName => {
    import(`../img/${imageName}`).then(image => {
      this.setState({
        image: image
      });
    });
  };

  render() {
    const { topic, grade, subTopic } = this.props.match.params
    const url = grade ? `/${grade}/${topic}` : `/${topic}`
    const subTopicData = grade && this.state.content[grade].find(sb => sb.name === subTopic);
    if (!this.state.image && grade) { this.loadImage(subTopicData.image) }
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
            <br />
            <h1>{subTopic}</h1>
            <br />
            <Row>
              <Col sm={8} >
                {/* {subTopicData.body} */}
                {this.state.lorem}
              </Col>
              <Col sm={4}> {this.state.image && <Image className="splash" src={this.state.image.default} rounded />}</Col>
            </Row>

            <br />
            <h2 className='mt-5 mb-5'>Pon a prueba lo aprendido con este juego:</h2>
            <Game />
          </div>
          )
        }

      </Container >
    )
  }
}
