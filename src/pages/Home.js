import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { setZipCodeToStore } from "../features/reducers";
import { useDispatch } from "react-redux";

export const Home = () => {
    const [zip, setZipCode] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setZipCode(e.target.value);
    }

    const goToResults = () => {
        dispatch(setZipCodeToStore(zip));
        navigate('/loading');
    }

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
                                required
                                label="Zip Code"
                                placeholder="Zip Code"
                                id="getZip"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid>
                            <Button variant="contained" onClick={goToResults}>Submit</Button>
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