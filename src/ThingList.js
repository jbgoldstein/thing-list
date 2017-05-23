import React from 'react'
import Thing from './Thing.js'
import './ThingList.css'

const ThingList = (props) => {
    return (
        <ul className="ThingList">
        {
            Object
                .keys(props.things)
                .map(thingId => <Thing thing={props.things[thingId]} key={thingId}/>)

        }
        </ul>
    )
}

export default ThingList