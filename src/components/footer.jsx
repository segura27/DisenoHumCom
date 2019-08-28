import React from 'react'
import { footer } from 'react-bootstrap'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={this.props.fix ? "font-small blue" : "page-footer font-small blue"}>

        <div className="footer-copyright text-center py-3 mr-5">
          © Todos los derechos reservados 2019
          Spectry.
           <a href='/ayuda' target="_blank" className='ml-5'> Ayuda</a>
        </div>
      
      </footer>
    )
  }
}
