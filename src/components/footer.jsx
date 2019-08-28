import React from 'react'
import { footer } from 'react-bootstrap'

export default class Game extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small blue">

        <div className="footer-copyright text-center py-3">
          © Todos los derechos reservados 2019
          <a href=""> MEP Costa Rica.</a>
        </div>

      </footer>
    )
  }
}
