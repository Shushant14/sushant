import React from 'react'
import "./Flight_Detail_Selection.css"

export default function Flight_Detail_Selection() {
  return (
    <div class="flight_detail_container">
    <div class="flight_card">
        <h3>From</h3>
        <label for="dropdown">Select an Option:</label>
        <select id="dropdown" name="dropdown">
            <option value="option1">Option 1<br/>Subtitle</option>
            <option value="option2">Option 2<br/>Subtitle</option>
            <option value="option3">Option 3<br/>Subtitle</option>
        </select>
    </div>
    <div class="flight_card">   
        <h3>To</h3>
        <p>Card content goes here.</p>
    </div>
    <div class="flight_card">
        <h3>Departure</h3>
        <p>Card content goes here.</p>
    </div>
    <div class="flight_card">
        <h3>Return</h3>
        <p>Card content goes here.</p>
    </div>
    <div class="flight_card">
        <h3>Traveller & Class</h3>
        <p>Card content goes here.</p>
    </div>
</div>
  )
}
