import React from 'react'
import "./Flight_Radio.css"

export default function Flight_Radio() {
  return (
    <div class="flight_type_container">
    <div class="flight_type_radio-buttons">
      <label>
        <input type="radio" name="options" value="1"/> One Way
      </label>
      <label>
        <input type="radio" name="options" value="2"/> Round Trip
      </label>
      <label>
        <input type="radio" name="options" value="3"/> Multi City
      </label>
    </div>

    <div class="text">
      Book International and Domestic Flights
    </div>
  </div>
  )
}
