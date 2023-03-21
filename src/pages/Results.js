import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowResults } from "../components/reducers";
import { Button, CircularProgress } from "@mui/material";
import { setRestaurant } from "../components/reducers";
import CloseIcon from '@mui/icons-material/Close';
import { Modal, CloseButton, Name, Phone, Address, RollAgainButton } from "../components/Styles";

export const Results = () => {
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.storedInfo.restaurant)
    const name = restaurant !== undefined ? restaurant.poi.name : <CircularProgress/>
    const phone = restaurant !== undefined ? restaurant.poi.phone : ''
    const address = restaurant !== undefined ? restaurant.address.freeformAddress : ''

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
            <RollAgainButton>
            <Button variant="contained"onClick={() => {
                rollAgain();
            }}>Something else</Button>
            </RollAgainButton>
        </Modal>
    )
}