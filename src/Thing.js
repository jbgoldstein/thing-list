import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import Actions from './Actions.js'
import './Thing.css'

class Thing extends Component{
    updateName = (ev) => {
        const { thing, saveThing } = this.props
        thing.name = ev.target.value
        saveThing(thing)
    }

    render() {
        const { thing, removeThing } = this.props
        return (
            <li className="Thing">
            <input type="checkbox" value="on" />
            <div className="details">
                <ContentEditable
                className="name"
                html={thing.name}
                onChange={this.updateName}
                />
                <Actions thing={thing} removeThing={removeThing}/>
            </div>
            </li>
        )
    }
}

export default Thing