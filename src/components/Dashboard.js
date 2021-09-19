import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './Dashboard.css';
//import { BorderAllRounded } from '@material-ui/icons';   is this needed? 
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Avatar } from '@mui/material';
import profileImage from './1.jpg'


const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;
const user = {
    firstName: "Julia",
    lastName: "Yang",
    school: "College De Montreal",
    followers: "87",
    following: "65",
    badges: "12"
}


/*   map marker logic not yet implemented 




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


addMarker(); 

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

                        <a id='fullName'>{user.firstName} {user.lastName}</a>
                        <a id='schoolName'>&#127979; {user.school}</a>

                        

                        <div className='user-stats-container'>

                            <div className='followers-container'>
                                <a>{user.followers}</a>
                                <a className='user-stats-titles'>Followers</a>
                            </div>

                            <div className='following-container'>
                                <a>{user.following}</a>
                                <a className='user-stats-titles'>Following</a>
                            </div>

                            <div className='badges-container'>
                                <a>{user.badges}</a>
                                <a className='user-stats-titles'>Badges</a>
                            </div>
                        </div>



                    </div>
                    <h2>Your Upcoming Events</h2>
                    <div className='calendar-container'>

                        <FullCalendar
                            plugins={[dayGridPlugin]}
                            initialView="dayGridMonth"
                            rerenderDelay="10"

                            events={[
                                { title: '5K run', date: '2021-08-29' },
                                { title: 'Morning pilates', date: '2021-09-23' },
                                { title: 'Weekend group yoga', start: '2021-09-10', end: '2021-09-12' },
                                { title: 'rock climbing seminar', start: '2021-09-01', end: '2021-09-03', eventBackgroundColor: '#378006' },
                                { title: '5K weekend group run', date: '2021-09-19' },
                                { title: '5K weekend group run', start: '2021-10-05', end: '2021-10-07', color: 'green' }
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