// this file will be the component that has all the people that are in
// space at this moment

import React, { Component } from 'react';

class People extends Component {

    people = [];

    constructor(props) {
        super(props);
        this.setState({
            title: '',
            people: []
        })
    }

    componentDidMount() {

        this.props.getPeople();

        this.setState({
            title: this.props.title,
            people: this.props.people
        })

    }

    renderData = (person, i) => {
        return(
            <tr key={i}>
                <td>
                    {person.name}
                </td>
                <td>
                    {person.craft}
                </td>
            </tr>
        )
    };

    render() {
        let people = this.props.people;
        return(
            <div className="card">
                <div className="card-body">
                    <h3>People aboard the ISS</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Craft</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((person, i) => {
                                return this.renderData(person, i);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default People;