import React, { Component } from 'react';
import { plugins, YakapaPlugin } from './plugins';

import logo from './logo.svg';
import './App.css';

interface State {
  plugins: YakapaPlugin[];
}
class App extends Component<{}, State> {
  /**
   *
   */
  constructor(props: {}) {
    super(props);
    this.state = {
      plugins: []
    };
  }
  componentDidMount() {
    plugins.forEach(plugin => {
      console.log('______________', plugin);
    });
    this.setState({ plugins });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
            {plugins[0].Root({ text: 'ijijij' })}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
