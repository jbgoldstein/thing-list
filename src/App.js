import React, { Component } from 'react'
import Header from './Header.js'
import ThingList from './ThingList.js'
import AddThingButton from './AddThingButton.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    things: {
      'thing-1': { id: 'thing-1', name: 'Milk' },
      'thing-2': { id: 'thing-2', name: 'Bread' },
      'thing-3': { id: 'thing-3', name: 'Bibb lettuce' },
    },
    max: 4,
    thing: '',
    }

    this.addThing = this.addThing.bind(this)
    this.updateThing = this.updateThing.bind(this)
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
        <AddThingButton addThing={this.addThing}/>
        <ThingList things={this.state.things}/>
      </div>
    );
  }
}

export default App;
