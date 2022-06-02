import { React, useState} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from "@material-ui/core";
import useStyles from './style'
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = () => {
    const classes = useStyles();
    const [type, setType] =useState("restuarants");
    const [rating, setRating] =useState('');
    const places = [
        {name: 'cool place'},
        {name: 'best beer'},
        {name: 'Best food'},
        {name: 'cool place'},
        {name: 'best beer'},
        {name: 'Best food'},
        {name: 'cool place'},
        {name: 'best beer'},
        {name: 'Best food'}
    ]

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restuarants, Hotels, nad Attractions around you!!</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>{setType(e.target.value)}}>
                    <MenuItem value="restuarants">restuarants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e)=>{
                    setRating(e.target.value)
                }}>
                    <MenuItem value="3.0">above 3</MenuItem>
                    <MenuItem value="4.0">above 4.</MenuItem>
                    <MenuItem value="4.5">above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>

        </div>
    );
}

export default List;