import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './Dashboard.css';
import { BorderAllRounded } from '@material-ui/icons';
import CalendarView from '../components/calendar';

const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;

//git test 

let Event = {
    "nameOfEvent" : "Bob's cycling",
    "eventLat" : 45.5053,
    "eventLng": -73.552
}

let Events = [
    {
        "nameOfEvent" : "Bob's cycling",
        "eventLat" : 45.5,
        "eventLng": -73.5
    },
    {
        "nameOfEvent" : "jonny's eating",
        "eventLat" : 45.6,
        "eventLng": -73.6
    },
    {
        "nameOfEvent" : "Stacy's walk",
        "eventLat" : 45.5653,
        "eventLng": -73.599
    }

]
let AnyReactComponentArray = []

function addMarker(){
    for (let i=0; i<Events.length; i++){
        AnyReactComponentArray.push(AnyReactComponent.text = Events[i].nameOfEvent);
        AnyReactComponentArray.push(AnyReactComponent.lat = Events[i].eventLat);
        AnyReactComponentArray.push(AnyReactComponent.lng = Events[i].eventLng);
    }

}



class DashboardContainer extends Component {
  static defaultProps = {
    center: {
      lat: 45.5053,
      lng: -73.5525
    },
    zoom: 11
  };

  

  render() {
    return (
      <>

            <CalendarView />
            <div className='maps-container'>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDMRW2COun3qq-v7ghHeR4SphxE1-hpkgk' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >

                    <AnyReactComponent
                        lat={45.5053}
                        lng={-73.5525}
                        text="My Marker" />


                </GoogleMapReact>
            </div></>
    );
  }
}

export default DashboardContainer;