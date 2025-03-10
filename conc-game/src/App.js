import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{

  constructor(props)
  {
      super(props);
      this.state = {
        showRestartModal: false,
        cards: []
      };        
      //No state needed for updates??
  }

  render() {
  return (
    <div className="App">
      
    </div>
  )
}
}

export default App;
