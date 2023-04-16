import React, { Component, createRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import './App.css'
import certificate from './certificate.png'

class App extends Component {
  certificateWrapper = createRef();
  state = {
    Name: ""
  };

  render() {  
    const handleNameChange = (e) => {
      this.setState({ Name: e.target.value });
    }

    const handleDownload = (e) => {
      e.preventDefault();
      exportComponentAsPNG(this.certificateWrapper.current, {
        html2CanvasOptions: { backgroundColor: null }
      });
    }

    return (
      <div className="App">
        <div className="Meta">
          <h1> Certificate Generator</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={handleNameChange}
          />
          <button onClick={handleDownload}>Download</button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p>{this.state.Name}</p>
            <img src={certificate} width={600} height={700} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
