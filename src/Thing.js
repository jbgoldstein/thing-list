import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import Actions from './Actions.js'
import './Thing.css'

class Thing extends Component{
    componentDidMount() {
        if (!this.nameInput.htmlEl.textContent) {
            this.nameInput.htmlEl.focus()
        }
    }

    updateName = (ev) => {
        const { thing, saveThing } = this.props
        thing.name = ev.target.value
        saveThing(thing)
    }

    updateCheckbox = (ev) => {
        const { thing, saveThing } = this.props
        thing.completed = ev.target.checked
        saveThing(thing)
    }

    blurOnEnter = (ev) => {
        if (ev.key === 'Enter') {
            ev.preventDefault()
            ev.target.blur()
        }
    }

    render() {
        const { thing, removeThing } = this.props
        return (
            <li className="Thing">
            <input 
            type="checkbox" 
            value="on" 
            onChange={this.updateCheckbox} 
            checked={thing.completed}/>
            <div className="details">
                <ContentEditable
                className="name"
                html={thing.name}
                onChange={this.updateName}
                onKeyPress={this.blurOnEnter}
                ref={input => this.nameInput = input}
                />
                <Actions thing={thing} removeThing={removeThing}/>
            </div>
            </li>
        )
    }
}

export default Thing