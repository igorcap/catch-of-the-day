import React from 'react';
import Header from './header'
import Order from './order'
import Inventory from './inventory'

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market"/>
        </div>
        <Order/>
        <Inventory/>
      </div>
    );
  }
}

export default App;
