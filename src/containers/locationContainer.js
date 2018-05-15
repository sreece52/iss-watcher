import { connect } from 'react-redux';

import * as locationActions from '../actions/actions';
import Location from '../components/Location';

const mapStateToProps = (state) => (
    {
        title: state.locationReducer.title,
        latitude: state.locationReducer.latitude,
        longitude: state.locationReducer.longitude
    }
);

const mapDispatchToProps = (dispatch) => ({
    getLocation: () => dispatch(locationActions.getLocation())
})

const LocationContainer = connect(mapStateToProps, mapDispatchToProps)(Location);

export default LocationContainer;