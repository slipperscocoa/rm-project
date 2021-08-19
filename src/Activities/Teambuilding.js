import React, { useState } from 'react';
import './Activities.css';
import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
import { isOvernight } from '../RetreatSelection/RetreatType';

const teambuilding = [
    { price: 230, label: "Escape Room (max of 10)", link: "https://refreshingmountain.com/activities/escape-room-ranch/" },
    { price: 88, label: "Field Games", link: "https://refreshingmountain.com/activities/field-games/" },
    { price: 88, label: "Physical Challenge Course", link: "https://refreshingmountain.com/activities/physical-challenge-course/" },
    { price: 88, label: "Team Scavenger Hunt", link: "https://refreshingmountain.com/activities/team-scavenger-hunt/" },
    { price: 138, label: "Team Puzzle Hunt", link: "https://refreshingmountain.com/activities/team-puzzlehunt/" },
    { price: 138, label: "Teambuilding - 1 hour", link: "https://refreshingmountain.com/activities/teambuilding-2/" },
    { price: 221, label: "Teambuilding - 2 hours", link: "https://refreshingmountain.com/activities/teambuilding-2/" },
];

export var teambuildingTotalPrice;

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function TeambuildingApp() {
    const [checkedState, setCheckedState] = useState(
        new Array(teambuilding.length).fill(false)
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
                            console.log(teambuilding[index].label);
                            return sum + ((teambuilding[index].price * constHours) / medianSize);
                        }
                        else if (isOvernight === true) {
                            console.log(teambuilding[index].label);
                            return sum + (((teambuilding[index].price * constHours) / medianSize) * 0.75);
                        }
                    }
                    return sum;
                },
                0
            );

            setTotal(totalPrice);
            teambuildingTotalPrice = totalPrice;
        }
        else {
            alert("Please Select a Retreat Size First and a Retreat Type First");
        }

    };

    return (
        <div>
            <h3 className="heading-style">Teambuilding Activities:</h3>
            <ul className="no-bullets">
                {teambuilding.map(({ label, link }, index) => {
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

export default TeambuildingApp;