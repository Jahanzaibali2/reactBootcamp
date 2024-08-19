import React, { useState } from 'react'
import './SelectBox.css'

export default function SelectBox() {
 
 let [City,setCity] = useState('');

 const selectedCity = (event) => {setCity(event.target.value);};
 
 
 
  return (
    <div className='SelectBox'>
      <select name="SelectCity" value={City} onChange={selectedCity}>
      <option value="" disabled>Select a City</option>
      <option value="Karachi">Karachi</option>
      <option value="Islamabad">Islamabad</option>
      <option value="Hyderabad">Hyderabad</option>
      <option value="Rawalpindi">Rawalpindi</option>
      
      </select>
    </div>
  )
}
