import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Results } from "./Results";

export const Home = () => {
    const [zip, setZipCode] = useState('');
    const [showResults, setShowResults] = useState(false);

    const handleZipChange = (e) => {
        setZipCode(e.target.value);
    }
    const savedResults = window.localStorage.getItem('restaurantResults');
    const parsedResults = JSON.parse(savedResults);
    const savedZip = parsedResults.results[0].address.postalCode

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
        }
    }

    const randomNumber = Math.floor(Math.random() * parsedResults.results.length);
    const restaurantInfo = parsedResults.results[randomNumber];

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
                }}>Idk U Pick</h1>
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
                            <Button variant="contained" onClick={() => {
                                setShowResults(true)
                                getRestaurants();
                            }}>Submit</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            {showResults ? <Results restaurant={restaurantInfo}/> : <></>}
            <Grid>
                This is the footer
            </Grid>
        </Grid>
    )
}