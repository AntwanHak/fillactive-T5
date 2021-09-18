import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './Dashboard.css';
//import { BorderAllRounded } from '@material-ui/icons';   is this needed? 
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Avatar } from '@mui/material';
import profileImage from './1.jpg'

const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;


/*   map marker logic not yet implemented 


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

*/

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

                <div className='page-container'>



                    <div className='user-info-container'>
                        <div className='avatar-container'>
                            <Avatar alt="Julia Yang"
                                src={profileImage}
                                sx={{ width: 150, height: 150 }}
                            />

                            
                        </div>
                        <a>Julia Yang</a>



                    </div>
                    <h2>Upcoming Events</h2>
                    <div className='calendar-container'>

                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            themeSystem="standard"
                            events={[
                                { title: '5K run', date: '2021-08-29' },
                                { title: 'Morning yoga', date: '2021-09-23' },
                                { title: 'evening walk', start: '2021-09-10', end: '2021-09-12' },
                                { title: '5K weekend group run', date: '2021-09-19' }
                            ]}
                        />

                    </div>


                    <div className='maps-container'>

                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDMRW2COun3qq-v7ghHeR4SphxE1-hpkgk' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >

                            <AnyReactComponent
                                lat={45.5053}
                                lng={-73.5525}
                                text="My Marker"
                            />



                        </GoogleMapReact>
                    </div>
                </div>
            </>


        );
    }
}

export default DashboardContainer;