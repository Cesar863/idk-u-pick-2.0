import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowResults, setShowAllResultsModal } from "../components/reducers";
import { Button, CircularProgress } from "@mui/material";
import { setRestaurant } from "../components/reducers";
import CloseIcon from '@mui/icons-material/Close';
import { Modal, CloseButton, Name, Phone, Address, RollAgainButton, Hours } from "../components/Styles";

export const Results = () => {
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.storedInfo.restaurant)
    const name = restaurant !== undefined ? restaurant.poi.name : <CircularProgress/>
    const phone = restaurant !== undefined ? restaurant.poi.phone : ''
    const address = restaurant !== undefined ? restaurant.address.freeformAddress : ''
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const rollAgain = () => {
        const savedResults = window.localStorage.getItem('restaurantResults');
        const parsedResults = JSON.parse(savedResults);
        const randomNumber = Math.floor(Math.random() * parsedResults.results.length);
        dispatch(setRestaurant(parsedResults.results[randomNumber]));
    }
    
    const searchLink = () => {
        window.open(`http://google.com/search?q=${name}+${address}`, '_blank')
    }

    const phoneLink = () => {
        document.location.href = `tel:${phone}`
    }
    useEffect(() => {
        const apiKey = process.env.REACT_APP_RESTAURANT_API_KEY;
        let formatStart = '';
        let formatEnd = '';
        const getHours = async () => {
            const response = await fetch(`https://api.tomtom.com/search/2/place.json?key=${apiKey}&openingHours=nextSevenDays&entityId=${restaurant.id}`);
            const results = await response.json();
            const hasHours = results.results[0].poi.openingHours
            if (hasHours !== undefined){
                const startTime = hasHours.timeRanges[0].startTime.minute === 0 ? `${hasHours.timeRanges[0].startTime.hour}:00` : `${hasHours.timeRanges[0].startTime.hour}:${hasHours.timeRanges[0].startTime.minute}`;
                const endTime = hasHours.timeRanges[0].endTime.minute === 0 ? `${hasHours.timeRanges[0].endTime.hour}:00` : `${hasHours.timeRanges[0].endTime.hour}:${hasHours.timeRanges[0].endTime.minute}`;
                if (startTime !== '' && endTime !== ''){
                    formatStart = parseInt(startTime) >= 12 ? `${parseInt(startTime)} PM` : `${parseInt(startTime)} AM`;
                    formatEnd = parseInt(endTime) >= 13 ? `${parseInt(endTime) - 12} PM` : `${parseInt(endTime)} AM`;
                    setStart(formatStart);
                    setEnd(formatEnd);
                }
            } else {
                setStart(formatStart);
                setEnd(formatEnd);
            }
        }
        getHours();
    },[restaurant]);

    return(
        <Modal>
            <CloseButton>
            <Button onClick={() => {
                dispatch(setShowResults(false));
            }}><CloseIcon/></Button>
            </CloseButton>
            <Name onClick={searchLink}>
                    {name}
            </Name>
            <Phone onClick={phoneLink}>
                {phone}
            </Phone>
            <Address>
                {address}
            </Address>
            <Hours>
                {start} - {end}
            </Hours>
            <RollAgainButton>
            <Button variant="contained"onClick={() => {
                rollAgain();
            }}>Something else</Button>
            </RollAgainButton>
            <RollAgainButton>
            <Button variant="contained"onClick={() => {
                dispatch(setShowAllResultsModal(true))
                dispatch(setShowResults(false));
            }}>See all restaurants</Button>
            </RollAgainButton>
        </Modal>
    )
}