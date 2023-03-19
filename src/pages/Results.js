import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowResults } from "../components/reducers";
import { Button } from "@mui/material";
import { setRestaurant } from "../components/reducers";

export const Results = () => {
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.storedInfo.restaurant)
    console.log(restaurant);
    const name = restaurant !== undefined ? restaurant.poi.name : ''
    const phone = restaurant !== undefined ? restaurant.poi.phone : ''
    const address = restaurant !== undefined ? restaurant.address.freeformAddress : ''

    const rollAgain = () => {
        const savedResults = window.localStorage.getItem('restaurantResults');
            const parsedResults = JSON.parse(savedResults);
            const randomNumber = Math.floor(Math.random() * parsedResults.results.length);
            dispatch(setRestaurant(parsedResults.results[randomNumber]));
            console.log('rolled again');
    }

    return(
        <div>
            <div>
                the results are showing
            </div>
            <div>
                {name}
            </div>
            <div>
            {phone}
            </div>
            <div>
                {address}
            </div>
            <Button onClick={() => {
                dispatch(setShowResults(false));
            }}>Close</Button>
            <Button onClick={() => {
                rollAgain();
            }}>Roll again</Button>
        </div>
    )
}