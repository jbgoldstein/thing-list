import React, { Component } from 'react'
import Header from './Header.js'
import ThingList from './ThingList.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    things: [],
    max: 0,
    thing: '',
    }

    this.addThing = this.addThing.bind(this)
    this.updateThing = this.updateThing.bind(this)
  }

  addThing(ev) {
    const state = {...this.state}
    const thing = {
        id: 'thing-' + state.max,
        name: state.thing,
    }

    state.things.push(thing)
    state.max ++
    state.thing = ''
    this.setState(state)
  }

  updateThing(ev) {
        this.setState ({
            thing: ev.target.value
        })
    }

  render() {
    return (
      <div className="App">
        <Header/>
        <textarea className="textBox"
          value={this.state.thing} 
          placeholder="Enter thing here"
          onChange={this.updateThing}>
        </textarea>
        <button className="add-thing" onClick={this.addThing}>Add Thing</button>
        <ThingList things={this.state.things} /*addThing={this.addThing}*//>
      </div>
    );
  }
}

export default App;
