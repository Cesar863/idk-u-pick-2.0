import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowResults } from "../components/reducers";
import { Button } from "@mui/material";
import { setRestaurant } from "../components/reducers";
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const Results = () => {
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.storedInfo.restaurant)
    console.log(restaurant);
    const name = restaurant !== undefined ? restaurant.poi.name : 'this is where the title of the '
    const phone = restaurant !== undefined ? restaurant.poi.phone : 'temp phone'
    const address = restaurant !== undefined ? restaurant.address.freeformAddress : 'Dominos Pizza'

    const rollAgain = () => {
        const savedResults = window.localStorage.getItem('restaurantResults');
        const parsedResults = JSON.parse(savedResults);
        const randomNumber = Math.floor(Math.random() * parsedResults.results.length);
        dispatch(setRestaurant(parsedResults.results[randomNumber]));
        console.log('rolled again');
    }
    const Name = styled.div`
        width: 100%;
        justify-content: center;
        display: flex;
        font-size: 24px;
        text-align: center;
        padding: 0px 0 4px 0;

    `
    const Phone = styled.div`
        width: 100%;
        justify-content: center;
        display: flex;
        font-size: 18px;
        padding: 4px 0 4px 0;
        text-align: center;
    `
    const Address = styled.div`
        width: 100%;
        justify-content: center;
        display: flex;
        font-size: 18px;
        padding: 4px 0 4px 0;
        text-align: center
    `
    const CloseButton = styled.div`
        width: 100%;
        justify-content: right;
        display: flex;
        font-size: 18px;
        text-align: center
    `
    const RollAgainButton = styled.div`
        width: 100%;
        justify-content: center;
        display: flex;
        font-size: 18px;
        text-align: center;
        padding: 8px 0 8px 0;
    `
    const searchLink = () => {
        window.open(`http://google.com/search?q=${name}+${address}`, '_blank')
    }

    const phoneLink = () => {
        document.location.href = `tel:${phone}`
    }

    return(
        <div>
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
        </div>
    )
}