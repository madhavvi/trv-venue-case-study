import React from 'react';
import _ from 'lodash';
import { AMENITIES } from '../Utils/utils';
// import { Rating } from '..';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import './Filters.css';

export class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                { title: 'India' },
                { title: 'Germany' },
                { title: 'UK' },
                { title: 'Sweden' },
                { title: 'France' },
                { title: "Poland" }
            ],
            selectionRange: {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            }
        }
    }

    handleSelect(ranges) {
        this.setState({
            selectionRange: {
                startDate: ranges.selection.startDate,
                endDate: ranges.selection.endDate,
                key: 'selection',
            }
        })
    }

    componentDidMount() {
        // console.log('filters ...');
    }

    render() {
        const minDate = new Date();
        // const date = new Date();
        const maxDate = new Date(minDate.getTime() + 2*24*60*60*1000);
        console.log('minDate : ', minDate);
        console.log('maxDate : ', maxDate);
        return (
            <>
                <div className="searchFilters">
                    <form style={{ display: 'flex' }}>
                        <div className="form-element filter-margin">
                            <Autocomplete
                                id="combo-box-demo"
                                options={this.state.top100Films}
                                getOptionLabel={(option) => option.title}
                                style={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Your destination..." variant="outlined" />}
                            />
                        </div>
                        <div className="filter-margin">
                            <DateRange
                                className="date-range-wrapper"
                                // editableDateInputs={true}
                                onChange={this.handleSelect.bind(this)}
                                // moveRangeOnFirstSelection={false}
                                ranges={[this.state.selectionRange]}
                                minDate={minDate}
                                // maxDate={maxDate}
                            />
                        </div>

                        <div className="filter-margin">
                            <FormControl variant="outlined" className="formControl g-r-filter">
                                <InputLabel htmlFor="outlined-age-native-simple">Rooms</InputLabel>
                                <Select
                                    native
                                    // value={state.age}
                                    // onChange={handleChange}
                                    label="Rooms"
                                    inputProps={{
                                        name: 'rooms',
                                        id: 'outlined-rooms-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="filter-margin">
                            <FormControl variant="outlined" className="formControl g-r-filter">
                                <InputLabel htmlFor="outlined-age-native-simple">Guests</InputLabel>
                                <Select
                                    native
                                    // value={state.age}
                                    // onChange={handleChange}
                                    label="Guests"
                                    inputProps={{
                                        name: 'guests',
                                        id: 'outlined-guests-native-simple',
                                    }}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={4}>5</option>
                                </Select>
                            </FormControl>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
