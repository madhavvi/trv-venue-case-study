import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Container, Grid, Button, AppBar, Tabs, Tab } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import ReactStars from "react-rating-stars-component";
import { GoLocation } from 'react-icons/go';
import { FcApproval } from 'react-icons/fc';
import "react-image-gallery/styles/css/image-gallery.css";
import './Hotel.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HotelOverview from '../HotelOverview/HotelOverview';
import HotelPhotos from '../HotelPhotos/HotelPhotos';
import HotelInfo from '../HotelInfo/HotelInfo';
import SelectRoom from '../SelectRoom/SelectRoom';


const Hotel = (hotel) => {
    const hotelDetails = hotel.hotel;
    const images = hotelDetails && hotelDetails.images && hotelDetails.images.map(url => ({
        original: `${url}=w1024`,
        thumbnail: `${url}=w100`
    }));

    const [tabVal, setTabVal] = useState(0);
    const [showOverview, setShowOverview] = useState(false);
    const [showSelectRoom, setShowSelectRoom] = useState(false);
    const [openRoomDialog, setOpenRoomDialog] = useState(false);

    const closeModal = () => {
        setOpenRoomDialog(false);
    }
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={1}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    return (
        <>
            <Container lg={12} xs={12} md={12} direction="row" justify="center" style={{ display: 'flex', padding: '13px 20px' }}>
                <Grid item className="hotelGridWrapper">
                    <Grid container item lg={12} md={12}>
                        <Grid container item lg={3} md={3} className="hotelImageGrid">
                            <div className="hotelImages">
                                <ImageGallery
                                    items={images}
                                    showIndex={true}
                                    showThumbnails={false}
                                    showPlayButton={false}
                                    showFullscreenButton={false}
                                />
                            </div>
                        </Grid>
                        <Grid container item lg={6} md={6} className="hotelDetailGrid">
                            <Grid container item onClick={(e) => {
                                setShowOverview(!showOverview);
                                setTabVal(0);
                            }}>
                                <Grid container item className="hotelName">
                                    <p>{hotelDetails.name}</p>
                                    <div className="hotelRating" style={{ width: '100%' }}>
                                        <ReactStars
                                            count={hotelDetails.rating}
                                            value={hotelDetails.rating}
                                            size={20}
                                            edit={false}
                                            activeColor="#f6ab3f"
                                        />
                                    </div>
                                    {/* <span>{hotelDetails.description}</span> */}
                                </Grid>
                                <span className="divider"></span>
                                <Grid container item className="hotelLocation">
                                    <GoLocation className="distanceToVenue" />
                                    <p >{`${hotelDetails.distance_to_venue} meters from the conference venue`}</p>
                                </Grid>
                                <span className="divider"></span>
                                <Grid container item className="hotelRating">
                                    <div className="rating">
                                        <span className={hotelDetails.rating < 3 ? 'ratingLow' : 'ratingHigh'}>
                                            {hotelDetails.rating}
                                        </span>
                                    </div>
                                    <span className="rating-text">{hotelDetails.rating < 3 ? `Average` : `Very good`}</span>
                                    <p className="rating">{`${hotelDetails.rating}0 reviews`}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item lg={3} md={3} className="hotelPriceGrid">
                            <Grid container item style={{ justifyContent: 'flex-end' }}>
                                <Grid className="hotelPricing" >
                                    <span className="freeCancalation">
                                        <FcApproval className="checkIcon" />
                                        <span>Free cancellation/Partial refund</span>
                                    </span>
                                    <p className="price">
                                        {`${hotelDetails.rooms[0].price_in_usd} `}
                                    </p>
                                    <p className="priceTerms">per night</p>
                                    <p className="priceTerms">includes taxex and fess</p>
                                </Grid>
                            </Grid>
                            <Grid container item className="hotelPricingBtn" lg={12} xs={12} md={12}>
                                <Button variant="contained" size="medium" className="selectRoomBtn" onClick={() => {
                                    setShowSelectRoom(true);
                                    setOpenRoomDialog(true);
                                }}>
                                    Select room
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    {(showOverview) && (
                        <Grid container item lg={12} xs={12} md={12}>
                            <AppBar className="tabPanelWrapper" position="static" color="default">
                                <Tabs
                                    value={tabVal}
                                    onChange={(e, value) => {
                                        setTabVal(value);
                                    }}
                                    TabIndicatorProps={{
                                        style: { background: '#428500', boxShadow: 'none' }
                                    }}
                                    style={{ display: 'flex', flexDirection: 'row', flexGrow: 1, justifyContent: 'space-around' }}
                                >
                                    <Tab className="tabList" label="Overview" />
                                    <Tab className="tabList" label="Photos" />
                                    <Tab className="tabList" label="Other info" />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={tabVal} index={0}>
                                <HotelOverview hotel={hotelDetails} />
                            </TabPanel>
                            <TabPanel value={tabVal} index={1}>
                                <HotelPhotos hotel={hotelDetails} />
                            </TabPanel>
                            <TabPanel value={tabVal} index={2}>
                                <HotelInfo hotel={hotelDetails} />
                            </TabPanel>
                        </Grid>
                    )}

                </Grid>
            </Container>
            {showSelectRoom && (
                    <SelectRoom hotel={hotelDetails} openRoomDialog={openRoomDialog} closeModal={closeModal} />
                )}
        </>
    )
}


export default Hotel;