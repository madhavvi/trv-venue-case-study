import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
    Grid, Button, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Modal
} from '@material-ui/core';
import './SelectRoom.css';
import roomImg from '../../assets/room1.jpg';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FaVectorSquare, FaCity, FaBed } from 'react-icons/fa';
import { HiOutlineWifi } from 'react-icons/hi';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const SelectRoom = (props) => {
    const hotelDetails = props.hotel;
    const rooms = hotelDetails.rooms;
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [openConfirmation, setOpenConfirmation] = useState(false);
    console.log('select room : ', hotelDetails, rooms);
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const closeConfirmation = () => {
        setOpenConfirmation(false);
    }

    const body = (room) => (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Room Confirmation</h2>
            <p id="simple-modal-description">
                You have booked a room {room.name}
            </p>
            <p>We have send copy of confirmation to your registered email address.</p>
            <div className="reserveBtn" style={{ padding: '0 !important', textAlign: 'end' }}>
                <Button size="small" color="primary" onClick={closeConfirmation} className="confirm-btn">
                    Close
            </Button>
            </div>
        </div>
    );

    return (
        <>
            <Dialog open={props.openRoomDialog} fullWidth maxWidth="lg" className="dialog-container" style={{ zIndex: 1111 }}>
                <DialogTitle className="form-dialog-title">Room availablility</DialogTitle>
                <DialogContent style={{ padding: '10px 24px' }}>
                    <Grid className="gridLayout">
                        {rooms && rooms.map(room => (
                            <Grid item xs={12} md={12} lg={12}>
                                <Card>
                                    <CardContent style={{ padding: 10 }}>
                                        <div>
                                            <img src={roomImg} height={180} style={{ width: '100%' }} />
                                        </div>
                                        <Typography variant="h5" component="h2"> {room.name} </Typography>
                                        <Typography className="roomRating" color="textSecondary">
                                            {`${room.rating}/5 room rating`}
                                        </Typography>
                                        <Typography variant="body2" component="div" color="textSecondary" style={{ margin: '10px 0' }}>
                                            <FaVectorSquare style={{ verticalAlign: 'text-top' }} />
                                            <span style={{ margin: '0 15px' }}>{`300 sq. ft.`}</span>
                                        </Typography>
                                        <Typography variant="body2" component="div" color="textSecondary" style={{ margin: '10px 0' }}>
                                            <FaCity style={{ verticalAlign: 'text-top' }} />
                                            <span style={{ margin: '0 15px' }}>{`City view`}</span>
                                        </Typography>
                                        <Typography variant="body2" component="div" color="textSecondary" style={{ margin: '10px 0' }}>
                                            <FaBed style={{ verticalAlign: 'text-top' }} />
                                            <span style={{ margin: '0 15px' }}>{`Sleeps `}{room.max_occupancy}</span>
                                        </Typography>
                                        <Typography variant="body2" component="div" color="textSecondary" style={{ margin: '10px 0' }}>
                                            <HiOutlineWifi style={{ verticalAlign: 'text-top' }} />
                                            <span style={{ margin: '0 15px' }}>{`Free WiFi `}</span>
                                        </Typography>

                                        <Typography variant="body2" component="span" >
                                            <div className="divider"></div>
                                        </Typography>

                                        <Typography variant="body1" component="h4">
                                            Cancellation Policy
                                        </Typography>
                                        <Typography className="refunds" color="textSecondary">
                                            {` - Fully refundable 7 days before check-in date.`}
                                        </Typography>
                                        <Typography className="refunds" color="textSecondary">
                                            {` - Partially refundable 2 days before check-in date.`}
                                        </Typography>
                                        <Typography className="refunds" color="textSecondary">
                                            {` - No refunds on cancellation 24 hrs before check-in.`}
                                        </Typography>

                                        <Typography variant="body2" component="span" >
                                            <div className="divider"></div>
                                        </Typography>

                                        <Typography variant="body1" component="h4">
                                            Price details
                                        </Typography>
                                        <Typography variant="body2" component="h1" style={{ margin: '10px 0' }}>
                                            <b style={{ fontSize: 30 }}>{`${room.price_in_usd} `} </b>
                                            <br />
                                            <span>per night</span>
                                            <br />
                                            <span>includes taxes & fees</span>
                                        </Typography>

                                    </CardContent>
                                    <CardActions className="reserveBtn">
                                        <Button disabled={!room.available} size="small" onClick={(e) => {
                                            setOpenConfirmation(true);
                                            // props.closeModal();
                                        }}>
                                            Reserve
                                        </Button>
                                    </CardActions>
                                </Card>
                                {/* confirmation modal */}
                                <Modal
                                    open={openConfirmation}
                                    onClose={closeConfirmation}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    <div style={modalStyle} className={classes.paper}>
                                        <h2 id="simple-modal-title">Room Confirmation</h2>
                                        <p id="simple-modal-description">
                                            You have booked a room {room.name}
                                        </p>
                                        <p>We have send copy of confirmation to your registered email address.</p>
                                        <div className="reserveBtn" style={{ padding: '0 !important', textAlign: 'end' }}>
                                            <Button size="small" color="primary" onClick={closeConfirmation} className="confirm-btn">
                                                Close
                                            </Button>
                                        </div>
                                    </div>
                                </Modal>
                                {/* { openConfirmation && (
                                    <Confirmation room={room} openConfirmation={openConfirmation} closeConfirmation={closeConfirmation} />
                                )} */}
                            </Grid>
                        ))}
                    </Grid>
                </DialogContent>
                <DialogActions className="reserveBtn" style={{ padding: '0 24px 24px' }}>
                    <Button size="small" color="primary" onClick={props.closeModal} className="confirm-btn">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


export default SelectRoom;


// const Confirmation = (props) => {
//     return (
//         <Modal
//             open={props.openConfirmation}
//             onClose={props.closeConfirmation}
//             aria-labelledby="simple-modal-title"
//             aria-describedby="simple-modal-description"
//         >
//             {/* <body room={room} /> */}
//             <div >
//                 <h2 id="simple-modal-title">Room Confirmation</h2>
//                 <p id="simple-modal-description">
//                     You have booked a room {props.room.name}
//                 </p>
//                 <p>We have send copy of confirmation to your registered email address.</p>
//                 <div className="reserveBtn" style={{ padding: '0 !important', textAlign: 'end' }}>
//                     <Button size="small" color="primary" onClick={props.closeConfirmation} className="confirm-btn">
//                         Close
//                                             </Button>
//                 </div>
//             </div>
//         </Modal>
//     )
// }