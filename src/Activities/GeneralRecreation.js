import React, { useState } from 'react';
import './Activities.css';
import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
import { isOvernight } from '../RetreatSelection/RetreatType';

const genRec = [
    { price: 88, label: "Archery", link: "https://refreshingmountain.com/activities/archery/" },
    { price: 48, label: "Campfire", link: "https://refreshingmountain.com/activities/campfires/" },
    { price: 88, label: "GPS Nature Hunt", link: "https://refreshingmountain.com/activities/gps-nature-hunt-navigation/" },
    { price: 88, label: "Orienteering", link: "https://refreshingmountain.com/activities/orienteering-navigation/" },
    { price: 199, label: "Paintball Targets", link: "https://refreshingmountain.com/activities/paintball-target-shooting-course/" },
    { price: 153, label: "Pedal Carts", link: "https://refreshingmountain.com/activities/pedal-carts/" },
    { price: 88, label: "Slingshots", link: "https://refreshingmountain.com/activities/sling-shots-4/" },
];

export var genRecTotalPrice = 0;

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function GeneralActivitiesApp() {
    const [checkedState, setCheckedState] = useState(
        new Array(genRec.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        if (constHours !== "" && medianSize !== "" && isOvernight !== "") {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
            );

            setCheckedState(updatedCheckedState);

            const totalPrice = updatedCheckedState.reduce(
                (sum, currentState, index) => {
                    if (currentState === true) {
                        if (isOvernight === false) {
                            console.log(genRec[index].label);
                            return sum + ((genRec[index].price * constHours) / medianSize);
                        }
                        else if (isOvernight === true) {
                            console.log(genRec[index].label);
                            return sum + (((genRec[index].price * constHours) / medianSize) * 0.75);
                        }
                    }
                    return sum;
                },
                0
            );

            setTotal(totalPrice);
            genRecTotalPrice = totalPrice;
        }
        else {
            alert("Please Select a Retreat Size and a Retreat Type First");
        }
    };

    return (
        <div>
            <h3 className="heading-style">General Recreation Activities:</h3>
            <ul className="no-bullets">
                {genRec.map(({ label, link }, index) => {
                    return (
                        <a href={link} key={index}>
                            <li>
                                <input
                                    className='ck'
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={label}
                                    value={label}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                                <label>{label}</label>
                            </li>
                        </a>
                    );
                })}
                <li>
                    <div><b>Average Price Per Person:</b></div>
                    <div>{getFormattedPrice(total)}</div>
                </li>
            </ul>
        </div>
    );
}


export default GeneralActivitiesApp;