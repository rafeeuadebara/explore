import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="See through the Guragura water fall in kenya"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Borara isn't shy of its beauty so you shouldn't be shy to visit"
              label="Adventure"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="The plantenisa Sunset is one of the best nature has to offer"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Travel through the Islands of Bay in special style"
              label="Adventure"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Boat ride through the old indian lagoon"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Capturing beautiful shots nature has to offer"
              label="Adventure"
              path="/services"
            />

            <CardItem
              src="images/img-8.jpg"
              text="The sahara desert is the biggest one nature has to offer"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
