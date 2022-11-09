import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Home = (e) => {
  const zipCode = "33810";
  const pageNumber = 0; //Math.floor(Math.random() * 11)
  const restaurantsArrayNumber = Math.floor(Math.random() * 11);

  const apiKey = process.env.REACT_APP_RESTAURANT_API_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "restaurants-near-me-usa.p.rapidapi.com",
    },
  };

  const restaurantsResults = async () => {
    const results = await fetch(
      `https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/${zipCode}/${pageNumber}`,
      options
    );
    console.log(results.json);
  };
  restaurantsResults();

  return (
    <Grid
      xs
      item={12}
      sx={{
        backgroundImage:
          "linear-gradient(133deg, rgba(168,5,159,1) 10%, rgba(0,212,255,1) 100%)",
        padding: 0,
        margin: 0,
        height: "100%",
      }}
    >
      <Grid xs item={12}>
        <div
          style={{
            color: "white",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              margin: 0,
            }}
          >
            Idk U Pick
          </h1>
        </div>
      </Grid>
      <Grid xs item={12} style={{ alignItems: "center" }}>
        <Container
          style={{
            margin: "auto",
            width: "50%",
            //border: "3px solid red",
            padding: "10px",
            // background: "rgb(255,255,255, 0.6)",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <Grid style={{ textAlign: "center" }}>
            <Grid>
              <h2>Please enter your Zip Code</h2>
            </Grid>
            <Grid>
              <TextField
                style={{
                  background: "rgb(255, 255, 255, 0.6)",
                  borderRadius: 5,
                  margin: 5,
                  textAlign: "center",
                }}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                }}
                type="number"
                required
                label="Zip Code"
                placeholder="Zip Code"
              />
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
