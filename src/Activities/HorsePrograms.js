import React, { useState } from 'react';
import './Activities.css';
import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
import { isOvernight } from '../RetreatSelection/RetreatType';

const horsePrograms = [
    { price: 111, label: "Farm Animal Experience", link: "https://refreshingmountain.com/activities/farm-animal-experience/" },
    { price: 153, label: "Horse Rides - Tethered", link: "https://refreshingmountain.com/activities/horse-rides/" },
];

export var horseProgramsTotalPrice;

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function HorseProgramsApp() {
    const [checkedState, setCheckedState] = useState(
        new Array(horsePrograms.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    const handleOnChange = (position) => {
        if (constHours !== "" && medianSize !== "") {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
            );

            setCheckedState(updatedCheckedState);

            const totalPrice = updatedCheckedState.reduce(
                (sum, currentState, index) => {
                    if (currentState === true) {
                        if (isOvernight === false) {
                            console.log(horsePrograms[index].label);
                            return sum + ((horsePrograms[index].price * constHours) / medianSize);
                        }
                        else if (isOvernight === true) {
                            console.log(horsePrograms[index].label);
                            return sum + (((horsePrograms[index].price * constHours) / medianSize) * 0.75);
                        }
                    }
                    return sum;
                },
                0
            );

            setTotal(totalPrice);
            horseProgramsTotalPrice = totalPrice;
        }
        else {
            alert("Please Select a Retreat Size First and a Retreat Type First");
        }

    };

    return (
        <div>
            <h3 className="heading-style">Horse Program Activities:</h3>
            <ul className="no-bullets">
                {horsePrograms.map(({ label, link }, index) => {
                    return (
                        <a href={link} key={index}>
                            <li>
                                <input
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

export default HorseProgramsApp;