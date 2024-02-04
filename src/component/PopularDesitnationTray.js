import React, { useEffect, useState } from 'react';
import '../component/PopularDesitnationTray.css';
import mum from "./imagesDest/mum.jpg";
import ba from "./imagesDest/ba.jpg";
import pune from "./imagesDest/pune.jpg";

export default function PopularDesitnationTray() {
    const [content, setcontent] = useState([]);
    const array = [
        { city: "mumbai", desc: "mumbai desc", img: mum },
        { city: "bangalore", desc: "bengaluru desc", img: ba },
        { city: "pune", desc: "pune desc", img: pune },
        { city: "re", desc: "pune desc", img: pune },
        
    ];

    useEffect(() => {
        setcontent([...array]);
    }, []);

    return (
        <div className="container" id="fixed">
            <div className="row" id="row2">
                {content.map((d, index) => (
                    <div key={index} className="col-md-3 col-sm-6 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img-top" src={d.img} alt={d.city} />
                                <h5 className="card-title">{d.city}</h5>
                                <p className="card-text">{d.desc}</p>
                                <a href="#" className="btn btn-primary">Book a Flight</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
