import React, { Component } from 'react';

import axios from 'axios';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class Location extends Component {

    constructor(props){
        super(props);
        this.state = {
            lat: null,
            lng: null,
            zoom: 4,
            showMap: false
        }
    }

    componentDidMount() {
        let location = null;
        setInterval(() => {
            axios.get('http://api.open-notify.org/iss-now.json', {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            })
            .then(function(res){
                location = res.data.iss_position;
            })
            .catch(function(err){
                console.log(err);
            })
            if(location !== null) {
                this.setState({
                    lat: location.latitude,
                    lng: location.longitude,
                    showMap: true
                })
            }
        },5000);
    }

    render() {
        let position = [this.state.lat, this.state.lng]
        if(this.state.showMap === false) {
            return (
                <div id="myProgress">
                    <h3>Getting location data. Please wait :)</h3>
                </div>
            );
        } else {
            return (
                <div>
                    <Map center={position} 
                            zoom={this.state.zoom} 
                            style={{height:"500px"}}
                            >
                        
                        <TileLayer
                            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                <span>
                                    <b>latitude:</b> {this.state.lat}
                                    <br />
                                    <b>longitude:</b> {this.state.lng}
                                </span>
                            </Popup>
                        </Marker>
                    </Map>
                </div>
            )
        }
    }
}

export default Location;