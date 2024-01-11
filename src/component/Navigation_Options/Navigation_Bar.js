import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navigation_Bar.css";
import flight_image from "../../images/flight.png";
import hotel_image from "../../images/hotel.png";
import holidayPacakages_image from "../../images/holidayPackages.jpeg";
import train_image from "../../images/train.jpg";
import cab_image from "../../images/cab.jpeg";


function Navigation_Bar() {
  return (
    <Nav className="nav-bar" variant="pills" defaultActiveKey="/home">
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Nav.Link href="/flights" className="nav-link">
            <img src={flight_image} alt="Flight image" className="icon" />
            <br/>
            <span className="first-line">Flights</span>
          </Nav.Link>
        </div>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Nav.Link href="/hotel" className="nav-link">
            <img src={hotel_image} alt="Hotel image" className="icon" />
            <br />
            <span className="first-line">Hotel</span>
          </Nav.Link>
        </div>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Nav.Link href="/" className="nav-link">
            <img
              src={holidayPacakages_image}
              alt="Holiday Packages image"
              className="icon"
            />
            <br />
            <span className="first-line">Holiday</span>
            <br />
            <span className="second-line">Packages</span>
          </Nav.Link>
        </div>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Nav.Link href="/train" className="nav-link">
            <img src={train_image} alt="Train image" className="icon" />
            <br />
            Train
          </Nav.Link>
        </div>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Nav.Link href="/cab" className="nav-link">
            <img src={cab_image} alt="Train image" className="icon" />
            <br />
            Train
          </Nav.Link>
        </div>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation_Bar;
