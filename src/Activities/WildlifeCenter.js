import React, { useState } from 'react';
import './Activities.css';
import { constHours, medianSize } from '../RetreatSelection/RetreatSize';
import { isOvernight } from '../RetreatSelection/RetreatType';

const wildlifeCenter = [
    { price: 138, label: "Birds of Prey", link: "https://refreshingmountain.com/activities/birds-of-prey/" },
    { price: 203, label: "Large Group Presentation", link: "https://refreshingmountain.com/activities/large-group-reptile-and-amphibian-presentation/" },
    { price: 111, label: "Pond and Stream", link: "" },
    { price: 111, label: "Reptiles and Amphibians", link: "" },
    { price: 138, label: "Toxic Plants and Animals", link: "" },
    { price: 111, label: "Wildlife of PA", link: "" },
    { price: 111, label: "Wildlife Center OPEN TIME", link: "https://refreshingmountain.com/activities/wildlife-center-free-time/" },
    { price: 138, label: "Wilderness Survival (1 hr.)", link: "" },
    { price: 221, label: "Wilderness Survival (2 hrs.)", link: "" },
];

export var wildlifeCenterTotalPrice; 

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function WildlifeCenterApp() {
    const [checkedState, setCheckedState] = useState(
        new Array(wildlifeCenter.length).fill(false)
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
                            console.log(wildlifeCenter[index].label);
                            return sum + ((wildlifeCenter[index].price * constHours) / medianSize);
                        }
                        else if (isOvernight === true) {
                            console.log(wildlifeCenter[index].label);
                            return sum + (((wildlifeCenter[index].price * constHours) / medianSize) * 0.75);
                        }
                    }
                    return sum;
                },
                0
            );

            setTotal(totalPrice);
            wildlifeCenterTotalPrice = totalPrice;
        }
        else {
            alert("Please Select a Retreat Size First and a Retreat Type First");
        }
    };

    return (
        <div>
            <h3 className="heading-style">Wildlife Center Activities:</h3>
            <ul className="no-bullets">
                {wildlifeCenter.map(({ label, link }, index) => {
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

export default WildlifeCenterApp;