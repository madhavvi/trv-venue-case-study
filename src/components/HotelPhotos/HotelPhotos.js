import React from 'react';
import { Container, Grid } from '@material-ui/core';
import "react-image-gallery/styles/css/image-gallery.css";
import './HotelPhotos.css';


const HotelPhotos = (hotel) => {
    const hotelDetails = hotel.hotel;
    const images = hotelDetails && hotelDetails.images;

    return (
        <>
            <Container container item lg={12} xs={12} md={12} direction="row" className="HtlOvrvwContainer">
                <Grid className="AboutHotel">
                    <div style={{ borderBottom: '1px solid #ebeced', padding: 9 }}>
                        <p style={{ margin: '7px 0px', fontWeight: 600 }}>All photos</p>
                    </div>
                    <Grid container item lg={12} md={12}>
                        {images && images.map(image => (
                            <div lg={12} md={12} className="hotelImagesGrid" style={{ padding: 15, marginTop: 20 }}>
                                <img src={image} height="150px" />
                            </div>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}


export default HotelPhotos;