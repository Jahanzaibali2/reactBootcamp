import React from 'react'
import "./Header.css"

export default function Header() {
    return (
        
            <Top />

        
    )
}


function Top() {
    return (
        <>
            <div className="mainHeaderDiv">
                <div className="iconDiv">
                    <img src="../../src/assets/react.svg" alt="x" />

                </div>

                <h1>Assignment 3</h1>

                <div className="navDiv">
                    <ul>
                        <li>About</li>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>E-Mail</li>
                        <li>Details</li>
                    </ul>

                </div>

            </div>
        </>
    )
}
