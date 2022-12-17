import React, {  useEffect, useState, useRef } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// need 2 queries, one to get the user Zip code and another to enter the long and lat into the api to return the 

export const Home = () => {
    const inputRef = useRef(null);
    // use state as empty object that we can use to save restaurants calls from the API call
    const [restaurant, setRestaurants] = useState({});
    // user Zipcode
    const [zip, setZipCode] = useState('');
    const [zipCode, setUserZipCode] = useState(zip);

    // const zipCode = 33810
    // api key is hidden reach out to me(cesar) if you need it. 
    const apiKey = process.env.REACT_APP_RESTAURANT_API_KEY

    const handleChange = (e) => {
        setZipCode(e.target.value);
    }

    const handleClick = (e) => {
        setUserZipCode(zip);
        
    }
    

    // this prevents memory leaks
    // useEffect(() => {
    //     const getRestaurants = async () => {
    //         //api call passing through the key, and zipCode
    //         const response = await fetch(`https://api.tomtom.com/search/2/structuredGeocode.json?key=${apiKey}&countryCode=US&postalCode=${zipCode}&limit=1`)
    //         // converts results to json object
    //         const results = await response.json();
    //         // dot notation to retrieve the desired values
    //             const lat = results.results[0].position.lat;
    //             const long = results.results[0].position.lon;
    //         const res = await fetch(`https://api.tomtom.com/search/2/categorySearch/restaurant.json?key=${apiKey}&limit=1&countrySet=us&lat=${lat}&lon=${long}`);
    //         const resResult = await res.json();
    //         // sets the restaurants in state. 
    //         setRestaurants(resResult);
    //     }
    //     getRestaurants();
    // }, [])
    // console.log(restaurant);
    // console.log(zip);
    // console.log(zipCode);

    
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
                                id="getZip"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid>
                            <Button variant="contained" onClick={handleClick}>Submit</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
            
            <Grid>
              <Button
                variant="contained"
                style={{
                  background: "9437BF",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid>This is the footer</Grid>
    </Grid>
  );
};
