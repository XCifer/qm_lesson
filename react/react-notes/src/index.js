import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Notes from './components/Notes'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <Notes/>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));
