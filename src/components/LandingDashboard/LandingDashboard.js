import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Container, Grid } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Filters } from '../Filters/Filters';
import Hotel from '../Hotel/Hotel';
// import { HotelItem, Filters, Spinner } from '../../components';
import { DEFAULT_FILTERS_CONTEXT, API_URL } from '../Utils/utils';
// import { getHotelsRequest } from '../Redux/actions/hotels';
import './LandingDashboard.css';

class LandingDashboard extends Component {
    constructor(props) {
        super(props);
        // this.props.getHotelsRequest();
        this.state = {
            hotels: [],
            loading: true,
            ...DEFAULT_FILTERS_CONTEXT,
            update: state => {
                this.setState(state);
            }
        };
    }

    componentWillMount() {
        /* all available hotel's list */
        axios.get(`http://localhost:3001/hotels`).then(res => {
            this.setState({
                hotels: res.data,
                loading: false
            });
        });
    }

      filteredHotels() {
        const { price_category, distance_to_venue, amenities, rating } = this.state.filters;

        const result = _.filter(this.state.hotels, hotel => {
            // console.log('hotel in filteredHotels : ', hotel);
            return hotel;
        //   return (
        //     (price_category && price_category.length ? hotel.price_category === price_category : true) &&
        //     (amenities && _.intersection(hotel.amenities, amenities).length === amenities.length) &&
        //     (distance_to_venue && hotel.distance_to_venue <= distance_to_venue) &&
        //     hotel.rating >= rating
        //   );
        });
        return result;
      }

    render() {
        const hotels = this.filteredHotels();

        return (
            <>
                <Helmet>
                    <title>
                        {('Home - Trivago')}
                    </title>
                </Helmet>
                <Container lg={12} style={{ padding: 0, maxWidth: '100vw' }}>
                    <Grid container item xs={12} md={12} direction="row">
                        <div style={{ margin: '10px auto' }}>
                            <h3 className="explore-heading">
                                Explore world with us...
                                {/* <CircularProgress color="inherit" /> */}
                            </h3>
                        </div>
                    </Grid>
                    <Grid container item lg={12} xs={12} md={12} direction="row" justify="center" style={{ display: 'flex' }}>
                        <Grid className="filterContainer">
                            <Filters />
                        </Grid>
                        <div className="homePageBackground"></div>
                    </Grid>
                </Container>
                {/* when no destination is selected */}
                <Container>

                </Container>

                {/* when destination is selected */}
                <Grid item lg={12} md={12}>
                    <Grid container item direction="row" justify="center" style={{ display: 'flex' }}>
                        {hotels ? (hotels.map(hotel => (
                            <Grid key={hotel.id}>
                                <Hotel hotel={hotel} /> 
                            </Grid>
                          )))
                          :
                          <Grid>
                              <CircularProgress color="inherit" />
                          </Grid>
                        }
                    </Grid>
                </Grid>
            </>
        );
    }
}


// export default connect(({ slots }) => ({ slots }), {
//     getHotelsRequest
// })(LandingDashboard);

export default LandingDashboard;