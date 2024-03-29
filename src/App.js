import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import './css/styles.css'

import Topic from './components/topic.jsx'
import Home from './components/home.jsx'
import Information from './components/information.jsx'
import Help from './components/help.jsx'

function App() {
  return (
    <Router>
      <Route exact path="/:grade(4|5|6)?" component={Home} />
      <Route exact path="/:grade(4|5|6)?/:topic(Historia|Geografía|Sociología)" component={Topic} />
      <Route path="/:grade(4|5|6)?/:topic([^0-9]*)/:subTopic" component={Information} />
      <Route exact path="/ayuda" component={Help}/>
    </Router>
  )
}
export default App
