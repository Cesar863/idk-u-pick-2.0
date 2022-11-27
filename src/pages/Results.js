import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Results = () => {
    const restaurants = useSelector((state) => state.storedInfo.restaurants);
    // let [randomRestaurant, setRandomRes] = useState({});
    const [reRoll, setReRoll] = useState(false);
    let randomRestaurant = {};

    const reRun = () => {
        const randomArrayNumber = () => {
            return Math.floor(Math.random() * restaurants.results.length);
        }
        const restaurantArrayNumber = randomArrayNumber();
        randomRestaurant = restaurants.results[restaurantArrayNumber];
    }
    reRun();


    const handleClick = () => {
        console.log('clicked');
        const randomArrayNumber = () => {
            return Math.floor(Math.random() * restaurants.results.length);
        }
        console.log('clicked2');
        const restaurantArrayNumber = randomArrayNumber();
        randomRestaurant = restaurants.results[restaurantArrayNumber];
        console.log(randomRestaurant);
        console.log('clicked3');

    }
    console.log(randomRestaurant);

    return (
        <div>
            The results will go on this page and the props should be passed through here to be displayed.
            <div>your results</div>
            <h1>{randomRestaurant.poi.name || ''}</h1>
            <h2>{randomRestaurant.poi.phone || ''}</h2>
            <h3>{randomRestaurant.address.freeformAddress || ''}</h3>
            <button onClick={handleClick}>Roll Again?</button>
        </div>
    )
};

export default Results;