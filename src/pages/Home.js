import React, { useEffect, useState } from "react";
import {Grid, TextField, Button} from '@mui/material';
import { Results } from "./Results";
import { ErrorMessage } from "./ErrorMessage";
import { setShowResults, setRestaurant, setShowErrorMessage, setShowInfoModal } from "../components/reducers";
import { useDispatch, useSelector } from "react-redux";
import Header from '../assets/RNGrub.png'
import '../App.css';
import { PageHeader, Modal, DirectionText, Footer} from "../components/Styles";
import { Info } from "./Info";
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import { AllResults } from "./AllResults";

export const Home = () => {
    const dispatch = useDispatch();
    const [zip, setZipCode] = useState('');
    const [savedZip, setSavedZip] = useState('');
    const [validZipCode, setValidZipCode] = useState(false);
    const showResults = useSelector((state) => state.storedInfo.showResults);
    const showErrorMessage = useSelector((state) => state.storedInfo.showErrorMessage);
    const showInfoModal = useSelector((state) => state.storedInfo.showInfoModal);
    const showAllResults = useSelector((state) => state.storedInfo.showAllResults);

    const handleZipChange = (e) => {
        setZipCode(e.target.value);
    }
    const apiKey = process.env.REACT_APP_RESTAURANT_API_KEY;
    const getRestaurants = async () => {
        if(zip !== savedZip){
            const response = await fetch(`https://api.tomtom.com/search/2/structuredGeocode.json?key=${apiKey}&countryCode=US&postalCode=${zip}&limit=1`);
            const results = await response.json();
            if(results !== null){
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
            } else {
                dispatch(setShowErrorMessage(true));
            }
        } else {
            const savedResults = window.localStorage.getItem('restaurantResults');
            const parsedResults = JSON.parse(savedResults);
            const randomNumber = Math.floor(Math.random() * parsedResults.results.length);
            dispatch(setRestaurant(parsedResults.results[randomNumber]));
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

    const repoLink = () => {
        window.open(`http://github.com/cesar863/idk-u-pick-2.0`, '_blank')
    }

    return(
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            background: '#222222',
            padding: 0,
            margin: 0,
            height: '100vh',
        }}>
            <PageHeader>
                <img src={Header} alt="R.N.Grub"></img>
            </PageHeader>
            <Grid
            style={{alignItems: 'center'}}>
                {!showResults && !showErrorMessage && !showInfoModal && !showAllResults ? <Modal >
                    <Grid style={{textAlign:'center'}}>
                        <DirectionText>
                            Please enter your Zip Code
                        </DirectionText>
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
                            <Button sx={{marginTop: '16px'}} variant="contained" onClick={() => {
                                if(validZipCode){
                                    getRestaurants();
                                    dispatch(setShowResults(true))
                                    dispatch(setShowErrorMessage(false));
                                } else {
                                    dispatch(setShowErrorMessage(true));
                                }
                            }}>Submit</Button>
                        </Grid>
                    </Grid>
                </Modal> : <></>}
            {showResults && !showErrorMessage && !showInfoModal ? <Results/>  : <></>}
            {showErrorMessage && !showResults && !showInfoModal? <ErrorMessage/> : <></>}
            {showInfoModal ? <Info/> : <></>}
            {showAllResults && !showErrorMessage && !showInfoModal && !showResults ? <AllResults/>:<></>}
            <Footer>
                <Grid xs={6}>
                    <GitHubIcon sx={{color: 'white'}} onClick={repoLink}/>
                </Grid>
                <Grid xs={6}>
                    <InfoIcon sx={{color: 'white'}} onClick={() =>{dispatch(setShowInfoModal(true))}}/>
                </Grid>
            </Footer>
            </Grid>
        </Grid>
    )
}