import React, { useState } from 'react';
import './Activities.css';
import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
import { isOvernight } from '../RetreatSelection/RetreatType';

const poolParties = [
    { price: 319, label: "< 60 People", link: "https://refreshingmountain.com/activities/pool-parties-private-use/" },
    { price: 398, label: "61-120 People", link: "https://refreshingmountain.com/activities/pool-parties-private-use/" },
    { price: 499, label: "120+ People", link: "https://refreshingmountain.com/activities/pool-parties-private-use/" },
]

export var poolPartiesTotalPrice;

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function PoolPartiesApp() {
    const [checkedState, setCheckedState] = useState(
        new Array(poolParties.length).fill(false)
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
                            console.log(poolParties[index].label);
                            return sum + ((poolParties[index].price * constHours) / medianSize);
                        }
                        else if (isOvernight === true) {
                            console.log(poolParties[index].label);
                            return sum + (((poolParties[index].price * constHours) / medianSize) * 0.75);
                        }
                    }
                    return sum;
                },
                0
            );

            setTotal(totalPrice);
            poolPartiesTotalPrice = totalPrice;
        }
        else {
            alert("Please Select a Retreat Size First and a Retreat Type First");
        }

    };

    return (
        <div>
            <h3 className="heading-style">Pool Parties:</h3>
            <ul className="no-bullets">
                {poolParties.map(({ label, link }, index) => {
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

export default PoolPartiesApp;