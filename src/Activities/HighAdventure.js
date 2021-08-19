import React, { useState } from 'react';
import './Activities.css';
import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
import { isOvernight } from '../RetreatSelection/RetreatType';

const highAdventure = [
    { price: 267, label: "2 Ziplines - Flying V", link: "https://refreshingmountain.com/activities/2-ziplines-the-flying-v-run/" },
    { price: 537, label: "5 Ziplines + 9 Obstacles", link: "https://refreshingmountain.com/activities/5-ziplines-and-high-ropes-the-challenge-adventure-run/" },
    { price: 199, label: "Climbing Tower (Outdoor)", link: "https://refreshingmountain.com/activities/climbing-tower-outdoor/" },
    { price: 128, label: "Climbing Tower (Indoor)", link: "https://refreshingmountain.com/activities/indoor-climbing-wall/" },
    { price: 267, label: "22 Elevated Obstacles", link: "https://refreshingmountain.com/activities/elevated-obstacle-course-2/" },
    { price: 153, label: "Giant Ladder", link: "https://refreshingmountain.com/activities/giant-ladder/" },
    { price: 153, label: "Giant Swing", link: "https://refreshingmountain.com/activities/giant-swing/" },
    { price: 153, label: "Rappelling", link: "https://refreshingmountain.com/activities/rappelling/" },
];

export var highAdventureTotalPrice;

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function HighAdventureApp() {
    const [checkedState, setCheckedState] = useState(
        new Array(highAdventure.length).fill(false)
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
                            console.log(highAdventure[index].label);
                            return sum + ((highAdventure[index].price * constHours) / medianSize);
                        }
                        else if (isOvernight === true) {
                            console.log(highAdventure[index].label);
                            return sum + (((highAdventure[index].price * constHours) / medianSize) * 0.75);
                        }
                    }
                    return sum;
                },
                0
            );

            setTotal(totalPrice);
            highAdventureTotalPrice = totalPrice;
        }
        else {
            alert("Please Select a Retreat Size First and a Retreat Type First");
        }

    };

    return (
        <div>
            <h3 className="heading-style">High Adventure Activities:</h3>
            <ul className="no-bullets">
                {highAdventure.map(({ label, link }, index) => {
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

export default HighAdventureApp;