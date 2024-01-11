import React from 'react'
import "./Flight_Fare_Type.css"

export default function Flight_Fare_Type() {
  return (
    <div class="flight_fare_type_container">
    <div class="text">Select a <br/> fare type:</div>

  <div class="flight_fare_type_radio-buttons">
    <label><input type="radio" name="radioGroup"/> Regular <br/>fares</label>
    <label><input type="radio" name="radioGroup"/> Armed Forces <br/>fares</label>
    <label><input type="radio" name="radioGroup"/> Student <br/>fares</label>
    <label><input type="radio" name="radioGroup"/> Senior Citizen <br/>fares</label>
    <label><input type="radio" name="radioGroup"/> Doctor and Nurses <br/>fares</label>
    <label><input type="radio" name="radioGroup"/> Double Seat <br/>fares</label>
  </div>

  <div class="flight_trending_flight">
    <div class="text">Trending <br/>Searches:</div>
    <button class="flight_trending_flight_button">Chennai - Hyderabad</button>
    <button class="flight_trending_flight_button">Delhi - Dubai</button>
  </div>
</div>
  )
}
