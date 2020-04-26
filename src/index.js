import './styles.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
  render() {
    return (
      <main className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
          // I said Hi!
        </section>
      </main>
    );
  }
}

render(<Counter />, document.getElementById('root'));
