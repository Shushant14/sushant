import React from 'react'
import "./Options.css";
import Flight_Radio from './Flight_Radio';
import Flight_Detail_Selection from './Flight_Detail_Selection';
import Flight_Fare_Type from './Flight_Fare_Type';

export default function Options() {
  return (
    <div className='card'>
        
        <Flight_Radio></Flight_Radio>
        <Flight_Detail_Selection></Flight_Detail_Selection>
        <Flight_Fare_Type></Flight_Fare_Type> 




    </div>
  )
}
