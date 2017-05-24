import React, { Component } from 'react'
import Header from './Header.js'
import ThingList from './ThingList.js'
import AddThingButton from './AddThingButton.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    things: {},
    max: 1,
    }

    this.addThing = this.addThing.bind(this)
    this.saveThing = this.saveThing.bind(this)
  }

  thing() {
    return {
      id: `thing-${this.state.max}`,
      name: '',
    }
  }

  addThing(ev) {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing
    
    this.state.max ++
    this.setState({ things })
  }

  saveThing(thing) {
    const things = {...this.state.things}
    things[thing.id] = thing
    this.setState({ things })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AddThingButton addThing={this.addThing}/>
        <ThingList things={this.state.things} saveThing={this.saveThing}/>
      </div>
    );
  }
}

export default App;
