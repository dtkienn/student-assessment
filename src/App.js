import { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  onSubmit = data => {
    console.log('Received: ', data)
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="main-content">
          <Form onSubmit={data => this.onSubmit(data)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
