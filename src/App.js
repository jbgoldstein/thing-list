import React, { Component } from 'react'
import Header from './Header.js'
import ThingList from './ThingList.js'
import AddThingButton from './AddThingButton.js'
import base from './base.js'
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
    this.removeThing = this.removeThing.bind(this)
  }

  componentWillMount() {
    base.syncState(
      'things',
      {
        context: this,
        state: 'things'
      }
    )
  }

  thing() {
    return {
      id: `thing-${this.state.max}`,
      name: '',
      completed: false,
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

  removeThing(thing) {
    const things = {...this.state.things}
    things[thing.id] = null
    this.setState({ things })
  }

  render() {
    const actions= {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }
    return (
      <div className="App">
        <Header/>
        <AddThingButton addThing={this.addThing}/>
        <ThingList 
         things={this.state.things}
         {...actions}
         />
      </div>
    );
  }
}

export default App;
