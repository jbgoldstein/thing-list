import React from 'react'
import './RemoveThingButton.css'

const RemoveThingButton = ({ thing, removeThing }) => {
    return (
        <span className="actions">
                <button 
                className="remove" 
                onClick={() => removeThing(thing)}
                >
                <i className="fa fa-trash-o"></i>
                </button>
        </span>
    )
}

export default RemoveThingButton