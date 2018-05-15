import { connect } from 'react-redux';

import * as peopleActions from '../actions/actions';
import People from '../components/People';

const mapStateToProps = (state) => (
    {
        title: state.peopleReducer.title,
        people: state.peopleReducer.people
    }
);

const mapDispatchToProps = (dispatch) => ({
    getPeople: () => dispatch(peopleActions.getPeople())
})

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People);

export default PeopleContainer;