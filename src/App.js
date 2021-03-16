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
        <Form onSubmit={data => this.onSubmit(data)} />
      </div>
    );
  }
}

export default App;
