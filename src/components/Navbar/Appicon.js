import React from 'react'

function Appicon({isOpen, setIsOpen}) {
    return (
        <div onClick={() => setIsOpen(!isOpen)}>
            <i className="fi-rr-apps menuIcon"></i>
        </div>
    )
}

export default Appicon
