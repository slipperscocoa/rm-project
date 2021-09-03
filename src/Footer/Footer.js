import React, { useState } from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBFooter } from "mdbreact";

import { genRecTotalPrice } from '../Activities/GeneralRecreation';
import { wildlifeCenterTotalPrice } from '../Activities/WildlifeCenter';
import { highAdventureTotalPrice } from '../Activities/HighAdventure';
import { horseProgramsTotalPrice } from '../Activities/HorsePrograms';
import { teambuildingTotalPrice } from '../Activities/Teambuilding';
import { poolPartiesTotalPrice } from '../Activities/PoolParties';

// function getFormattedPrice(price) {
//     return `${price.toFixed(2)}`;
// }

function FooterApp() {
    const [genRecState, setGenRecState] = useState(0);
    // const [wildlifeCenterState, setWildlifeCenterState] = useState(0);
    // const [finalPriceState, setFinalPriceState] = useState(0); 

    const handleOnChange = () => {
        let allPrices = [ genRecTotalPrice,highAdventureTotalPrice,wildlifeCenterTotalPrice,teambuildingTotalPrice]; 
        if (genRecTotalPrice == null) {
            alert("Please make an activity selection first");
        }
        else if (genRecTotalPrice != null) {


            const sum =  allPrices.reduce((result,number)=> result+number);
            console.log(sum) // 15
            setGenRecState(sum);
            // setFinalPriceState(finalPriceState + genRecState);
        }
        // else if (wildlifeCenterTotalPrice != null) {
        //     setWildlifeCenterState(getFormattedPrice(wildlifeCenterTotalPrice));
        //     setFinalPriceState(finalPriceState + wildlifeCenterState); 
        // }
        console.log(genRecTotalPrice);
        console.log(wildlifeCenterTotalPrice);
        console.log(highAdventureTotalPrice);
        console.log(teambuildingTotalPrice);
        console.log(horseProgramsTotalPrice);
        console.log(poolPartiesTotalPrice);
    };

    return (
        <div>
            <MDBFooter className="text-center fixed-bottom" id="footer">
                <h3>This is the average price per person: ${genRecState}</h3>
                <h6>This line will have the total cost of all activites:</h6>
                <h6 style={{ fontSize: '12px' }}>*Group Events are priced as a Flat Rate.  This “pp” 
                    estimate is meant to help with planning, but final billing will be set as a 
                    flat price, with a min/max # of people that the schedule can accommodate. 
                </h6>
                <button onClick={handleOnChange}>Click for Price</button>
            </MDBFooter>
        </div>
    )
}

export default FooterApp;