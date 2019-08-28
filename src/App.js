import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Topic from './components/topic.jsx'
import Home from './components/home.jsx'
import Information from './components/information.jsx'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:grade(4|5|6)?/:topic" component={Topic} />
      <Route path="/:grade(4|5|6)?/:topic([^0-9]*)/:subTopic" component={Information} />
    </Router>
  )
}
export default App
