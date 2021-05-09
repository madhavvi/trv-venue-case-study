import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import _ from 'lodash';
import axios from 'axios';
import { venueData } from '../Utils/Data';

class Admin extends Component {
    constructor(props) {
        super(props);
        // this.props.getHotelsRequest();
        this.state = {
            hotels: venueData[0].hotels,
            loading: true,
            update: state => {
                this.setState(state);
            }
        };
    }

// export default function Admin() {

    componentWillMount() {
        /* all available hotel's list */
        // axios.get(`http://localhost:3001/hotels`).then(res => {
        //     this.setState({
        //         hotels: res.data,
        //         loading: false
        //     });
        // });
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>
                        {('Admin - Trivago')}
                    </title>
                </Helmet>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 600}}>Hotel name</TableCell>
                                <TableCell align="right" style={{ fontWeight: 600}}>Rating</TableCell>
                                <TableCell align="right" style={{ fontWeight: 600}}>Price Category</TableCell>
                                <TableCell align="right" style={{ fontWeight: 600}}>Distance to venue</TableCell>
                                <TableCell align="right" style={{ fontWeight: 600}}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.hotels.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.rating}</TableCell>
                                    <TableCell align="right">{row.price_category}</TableCell>
                                    <TableCell align="right">{row.distance_to_venue}</TableCell>
                                    <TableCell align="right">
                                        <MdModeEdit style={{ margin: '5px', color: '#000000a6'}}/>
                                        <MdDelete style={{ margin: '5px', color: '#000000a6'}}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        );
    }
};

export default Admin;