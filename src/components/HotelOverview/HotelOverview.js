import React from 'react';
import { Container, Grid } from '@material-ui/core';
import "react-image-gallery/styles/css/image-gallery.css";
import './HotelOverview.css';


const HotelOverview = (hotel) => {
    const hotelDetails = hotel.hotel;

    return (
        <>
            <Container container item lg={12} xs={12} md={12} direction="row" className="HtlOvrvwContainer">
                <Grid className="AboutHotel">
                    <div style={{ borderBottom: '1px solid #ebeced', padding: 9 }}>
                        <p style={{ margin: '7px 0px', fontWeight: 600 }}>About {hotelDetails.name}</p>
                    </div>
                    <Grid container item lg={12} md={12}>
                        <div lg={12} md={12} style={{ padding: 9 }}>
                            <p className="HotelDetails">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                        </div>
                        <Grid container item lg={12} md={12} style={{ marginTop: 25, padding: 10 }}>
                            <div>
                                <p style={{ fontWeight: 600}}>Amenities</p>
                                <ul style={{ lineHeight: 3, fontSize: 13, columns: 2, columnWidth: 200 }} data-columns="2">
                                    {hotelDetails && hotelDetails.amenities.map(obj => (
                                        <li key={obj}>
                                            { obj.replace('_', ' ').toUpperCase() }
                                        </li>
                                    ))}
                                    <li>
                                        {('24-hour reception').toUpperCase()}
                                    </li>
                                    <li>
                                        {('Deck chairs').toUpperCase()}
                                    </li>
                                    <li>
                                        {('Elevator').toUpperCase()}
                                    </li>
                                    <li>
                                        {('Flatscreen TV').toUpperCase()}
                                    </li>
                                    <li>
                                        {('Electric kettle').toUpperCase()}
                                    </li>
                                    <li>
                                        {('Telephone').toUpperCase()}
                                    </li>
                                    <li>
                                        {('Regular disinfection').toUpperCase()}
                                    </li>
                                    <li>
                                        {('WiFi in public areas').toUpperCase()}
                                    </li>
                                </ul>
                            </div>
                            <div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


export default HotelOverview;