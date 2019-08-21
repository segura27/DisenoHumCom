import React from 'react';
import './App.css';
import Header from './components/header.jsx'
import { Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        <row>
          <Col style={{ "height": "100vh", "backgroundColor": "lightGray" }} xs={4}>4</Col>
          <Col xs={8}>8</Col>
        </row>
        <row></row>
      </div>
    </div >
  );
}
export default App;
