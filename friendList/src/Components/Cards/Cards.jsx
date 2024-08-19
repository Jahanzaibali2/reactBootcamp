import React from 'react'
import "./Cards.css"

export default function Cards({ name, description, friendImg }) {
  return (
    <>

      <div className="friendList">

        <div className="friendCard">
          <h1>{name}</h1>
          <img src={friendImg} alt="x" />
          <p>{description}</p>

        </div>

      </div>
    </>
  )
}

function Select() {


}
