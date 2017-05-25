import React from 'react'
import "./SignOut.css"

const SignOut = ({signOut}) => {
    return ( 
        <button className="SignOut" onClick={signOut}>
            Sign Out
        </button>
    )
}

export default SignOut