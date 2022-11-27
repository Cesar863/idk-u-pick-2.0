import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRestaurants } from "../features/reducers";


export const Loading = () => {
    const apiKey = process.env.REACT_APP_RESTAURANT_API_KEY
    const userZipCode = useSelector((state) => state.storedInfo.userZipCode);
    const dispatch = useDispatch();
    const [res, resState] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getRestaurants = async () => {
            //api call passing through the key, and zipCode
            const response = await fetch(`https://api.tomtom.com/search/2/structuredGeocode.json?key=${apiKey}&countryCode=US&postalCode=${userZipCode}&limit=1`)
            // converts results to json object
            const results = await response.json();
            // dot notation to retrieve the desired values
                const lat = results.results[0].position.lat;
                const long = results.results[0].position.lon;
            const res = await fetch(`https://api.tomtom.com/search/2/categorySearch/restaurant.json?key=${apiKey}&limit=100&countrySet=us&lat=${lat}&lon=${long}`);
            const resResult = await res.json();
            resState(resResult);
            dispatch(setRestaurants(resResult));
        }
        getRestaurants();
    }, [])

    if (res !== []){
        return(
            navigate('/results')
        )   
    } else {
        return (
            <div>
                Loading please wait
            </div>
        )
    } 
}