import React, { Component } from 'react'
import Header from './Header.js'
import ThingList from './ThingList.js'
import AddThingButton from './AddThingButton.js'
import base from './base.js'
import SignOut from './SignOut.js'
import SignIn from './SignIn.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: {},
      uid: null,
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

  authHandler = (authData) => {
    this.setState({ uid: authData.user.uid })
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
      completed: false,
      dueOn: null,
    }
  }

  addThing(ev) {
    const things = {...this.state.things}
    const thing = this.thing()
    things[thing.id] = thing

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

  signedIn = () => {
    return this.state.uid
  }

  renderMain = () => {
    const actions= {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }

    return (
      <div>
        <SignOut/>
        <AddThingButton addThing={this.addThing}/>
        <ThingList 
          things={this.state.things}
          {...actions}
        />
       </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header/>
        { this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler}/> }
      </div>
    );
  }
}

export default App;
