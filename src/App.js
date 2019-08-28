import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import './css/styles.css'

import Topic from './components/topic.jsx'
import Home from './components/home.jsx'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Topic} />
    </Router>
  )
}
export default App
