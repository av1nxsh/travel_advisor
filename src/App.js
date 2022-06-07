import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [type, setType] = useState("hotels");
    const [rating, setRating] = useState();
    const [isloading, setIsloading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            }
        );
    }, []);

    useEffect(() => {
        const filteredPlace = places.filter((place) => place.rating > rating);
        setFilteredPlaces(filteredPlace);
    }, [rating]);

    useEffect(() => {
        if (bounds) {
            setIsloading(true);
            getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
                setPlaces(data);
                setIsloading(false);
            });
        }
    }, [type, coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        setType={setType}
                        setRating={setRating}
                        type={type}
                        rating={rating}
                        isLoading={isloading}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;
