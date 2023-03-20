import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Results } from "./Results";
import { ErrorMessage } from "./ErrorMessage";
import { setShowResults, setRestaurant, setShowErrorMessage } from "../components/reducers";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'

export const Home = () => {
    const dispatch = useDispatch();
    const [zip, setZipCode] = useState('');
    const [savedZip, setSavedZip] = useState('');
    const [validZipCode, setValidZipCode] = useState(false);
    const showResults = useSelector((state) => state.storedInfo.showResults)
    const showErrorMessage = useSelector((state) => state.storedInfo.showErrorMessage)

    const handleZipChange = (e) => {
        setZipCode(e.target.value);
    }
    const apiKey = process.env.REACT_APP_RESTAURANT_API_KEY;
    const getRestaurants = async () => {
        if(zip !== savedZip){
            const response = await fetch(`https://api.tomtom.com/search/2/structuredGeocode.json?key=${apiKey}&countryCode=US&postalCode=${zip}&limit=1`);
            const results = await response.json();
            const lat = results.results[0].position.lat;
            const long = results.results[0].position.lon;
            const res = await fetch(`https://api.tomtom.com/search/2/categorySearch/restaurant.json?key=${apiKey}&limit=100&countrySet=us&lat=${lat}&lon=${long}`);
            const resResult = await res.json();
            window.localStorage.setItem("restaurantResults", JSON.stringify(resResult));
            const savedResults = window.localStorage.getItem('restaurantResults');
            const parsedResults = JSON.parse(savedResults);
            setSavedZip(parsedResults.results[0].address.postalCode)
            const randomNumber = Math.floor(Math.random() * parsedResults.results.length);
            dispatch(setRestaurant(parsedResults.results[randomNumber]));
            console.log('the api was hit');
        } else {
            const savedResults = window.localStorage.getItem('restaurantResults');
            const parsedResults = JSON.parse(savedResults);
            const randomNumber = Math.floor(Math.random() * parsedResults.results.length);
            dispatch(setRestaurant(parsedResults.results[randomNumber]));
            console.log('the api was not hit');
        }
    }
    useEffect(() => {
        const validateZipCode = () => {
            if (zip <= 99999 && zip >= 10000){
                setValidZipCode(true)
            } else {
                setValidZipCode(false)
            }
        }
        validateZipCode();
    }, [zip])
    const ResultsModal = styled.div`
        display: flex;
        position: fixed;
        background-color: #FFFFFF;
        top: 5%;
        z-index: 9999;
        border-radius: 5px;
        border: #004BA8 5px solid;
        justify-content: center;
        width: 90%;
        left: 5%;
    `


    return(
        <Grid sx={{
            background: 'gray',
            padding: 0,
            margin: 0,
            height: '100%'
        }}>
            <Grid>
                <h1 style={{
                    textAlign: 'center',
                    margin: 0
                }}>RNGrub</h1>
            </Grid>
            <Grid
            style={{alignItems: 'center'}}>
                <Container style={{
                    margin: 'auto',
                    width: '50%',
                    border: '3px solid red',
                    padding: '10px',
                    background:'white',
                    borderRadius: '10px'
                }}>
                    <Grid style={{textAlign:'center'}}>
                        <Grid>
                            <h2>Please enter your Zip Code</h2>
                        </Grid>
                        <Grid>
                            <TextField 
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*'
                                }}
                                required
                                label="Zip Code"
                                placeholder="Zip Code"
                                id="getZip"
                                onChange={handleZipChange}
                            />
                        </Grid>
                        <Grid>
                            {showResults ? <></> :
                            <Button variant="contained" onClick={() => {
                                if(validZipCode){
                                    getRestaurants();
                                    dispatch(setShowResults(true))
                                    dispatch(setShowErrorMessage(false));
                                } else {
                                    dispatch(setShowErrorMessage(true));
                                }
                            }}>Submit</Button>
                        }
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            {showResults ? 
            <ResultsModal>
                <Results/> 
            </ResultsModal> : <></>}
            {showErrorMessage ? <ErrorMessage/> : <></>}
            <Grid>
                This is the footer
            </Grid>
        </Grid>
    )
}