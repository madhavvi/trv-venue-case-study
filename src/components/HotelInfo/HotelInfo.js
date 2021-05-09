import React from 'react';
import { Container, Grid } from '@material-ui/core';
import "react-image-gallery/styles/css/image-gallery.css";
import './HotelInfo.css';


const HotelInfo = (hotel) => {
    const hotelDetails = hotel.hotel;

    return (
        <>
            <Container container item lg={12} xs={12} md={12} direction="row" className="HtlOvrvwContainer">
                <Grid className="AboutHotel">
                    <div style={{ marginTop: 25, padding: 10 }}>
                        <p style={{ margin: '7px 0px', fontWeight: 600 }}>Ratings</p>
                        <Grid container item className="hotelRating">
                            <div className="rating">
                                <span className={hotelDetails.rating < 3 ? 'ratingLow' : 'ratingHigh'}>
                                    {hotelDetails.rating}
                                </span>
                            </div>
                            <span className="rating-text">{hotelDetails.rating < 3 ? `Average` : `Very good`}</span>
                            <p className="rating">{`${hotelDetails.rating}0 reviews`}</p>
                        </Grid>
                    </div>
                    <Grid container item lg={12} md={12}>
                        <Grid container item lg={12} md={12} style={{ marginTop: 25, padding: 10 }}>
                            <Grid>
                                <p style={{ margin: '7px 0px', fontWeight: 600 }}>Location</p>
                                <p >{`${hotelDetails.distance_to_venue} meters from the conference venue`}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


export default HotelInfo;