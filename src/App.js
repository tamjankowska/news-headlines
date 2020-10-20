import React from 'react';
import Headlines from './components/Headlines';

import './App.css';

import Boris from './images/boristrump.jpeg';
import Martian from './images/martian.jpg';
import Shoebill from './images/shoebill.jpg';
import Ironboard from './images/ironboard.gif';
import Ostrich from './images/ostrich.png';
import Spoonrace from './images/spoonrace.jpg';


function App() {
  return (
    <div>
      <div className = "columnOne">
        <h1 id = "category">News headlines {">"}</h1>
          <Headlines 
            image = {Boris}
            alt = "Trump and Boris - best bros"
            headline = "Boris and Donald revealed to be secret siblings"
            subcategory = "UK POLITICS"
          />
          <Headlines 
            image = {Martian}
            alt = "Matt Damon as an astronaut"
            headline = "From acting to astronauting: Matt Damon's covid career change"
            subcategory = "ENTERTAINMENT"
          />
          <Headlines 
            image = {Shoebill}
            alt = "Shoebill stork"
            headline = "Sentient storks: This sassy shoebill is running for president in the US"
            subcategory = "WORLD NEWS"
          />
      </div>
      <div className = "columnTwo">
        <h1 id = "category">Sport headlines {">"}</h1>
          <Headlines 
            image = {Ironboard}
            alt = "Extreme ironing"
            headline = "The mid-life crisis that is Ironboarding"
            subcategory = "EXTREME SPORTS"
          />
          <Headlines 
            image = {Ostrich}
            alt = "People riding ostriches"
            headline = "REVEALED: Tories make proletariat fight to the death in Ostrich Wars"
            subcategory = "ILLEGAL SPORTS"
          />
          <Headlines 
            image = {Spoonrace}
            alt = "Egg and spoon race"
            headline = "British Team hopeful they will make it to the Egg and Spoon Olympics"
            subcategory = "OLYMPICS"
          />
        </div>   
    </div>
  )
}

export default App;
