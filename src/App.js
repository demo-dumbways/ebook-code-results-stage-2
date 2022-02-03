import { Component } from 'react';

//Import Header Component
import Header from './components/Header';

// Content Component
class Content extends Component {
  render() {
    return (
      <div>
        <h1>This Is A Content</h1>
        <button>Click Me</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
