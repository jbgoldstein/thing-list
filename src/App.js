import React, { Component } from 'react'
import Header from './Header.js'
import ThingList from './ThingList.js'
import AddThingButton from './AddThingButton.js'
import base, { auth } from './base.js'
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
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.authHandler({ user })
        }
      }
    )
  }

  authHandler = (authData) => {
    this.setState(
      { uid: authData.user.uid },
      this.syncThings
    )
  }

  syncThings = () => {
    base.syncState(
      `${this.state.uid}/things`,
      {
        context: this,
        state: 'things'
      }
    )
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

  signOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ uid: null }))
  }

  renderMain = () => {
    const actions= {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
    }

    return (
      <div>
        <SignOut signOut={this.signOut}/>
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
        { this.signedIn() ? this.renderMain() : <SignIn/> }
      </div>
    );
  }
}

export default App;
