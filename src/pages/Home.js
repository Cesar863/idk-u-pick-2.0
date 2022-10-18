import React from "react";
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const Home = (e) => {
    e.preventDefault();
    const zipCode = '33810'
    const pageNumber = 0; //Math.floor(Math.random() * 11)
    const restaurantsArrayNumber = Math.floor(Math.random() * 11);
    

    const apiKey = process.env.REACT_APP_RESTAURANT_API_KEY
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };
    
    const restaurantsResults = async () => {
        const results = await fetch(`https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${zipCode}/${pageNumber}`, options)
        console.log(results.json)
}
restaurantsResults();
    
    return(
        <Grid xs item={12} sx={{
            background: 'gray',
            padding: 0,
            margin: 0,
            height: '100%'
        }}>
            <Grid xs item={12}>
                <h1 style={{
                    textAlign: 'center',
                    margin: 0
                }}>Idk U Pick</h1>
            </Grid>
            <Grid xs item={12}
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
                                type='number'
                                required
                                label="Zip Code"
                                placeholder="Zip Code"
                            />
                        </Grid>
                        <Grid>
                            <Button variant="contained">Submit</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            <Grid>
                This is the footer
            </Grid>
        </Grid>
    )
}