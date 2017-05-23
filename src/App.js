import React, { Component } from 'react'
import Header from './Header.js'
import ThingList from './ThingList.js'
import './App.css'

class App extends Component {
  state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk' },
      'thing-2': { id: 'thing-2', name: 'Bread' },
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
    }
  }

  addThing() {
    this.setState
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ThingList things={this.state.things} addThing={this.addThing}/>
      </div>
    );
  }
}

export default App;
