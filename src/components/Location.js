import React, { Component } from 'react';

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
        setInterval(() => {
            this.props.getLocation();

            this.setState({
                lat: this.props.latitude,
                lng: this.props.longitude,
            });

            if(this.state.lat != null && this.state.lng != null) {
                this.setState({
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