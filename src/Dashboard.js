import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker.js';
import './Dashboard.css';
//import { BorderAllRounded } from '@material-ui/icons';   is this needed? 
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Avatar } from '@mui/material';
import profileImage from './profile.png'


const AnyReactComponent = ({ text }) => <div className='marker'>{text}</div>;
const user = {
    firstName: "Julia",
    lastName: "Yang",
    school: "College De Montreal",
    followers: "87",
    following: "65",
    badges: "12"
   
}

    const ActiveEvents=[
    { title: '5K run', date: '2021-08-29',  activityType : 'endurance', lat:45.5053, lng : -73.5525 },
    { title: 'Morning pilates', date: '2021-09-23' , activityType : 'endurance', lat:45.5053, lng : -73.5525},
    { title: 'Weekend group yoga', start: '2021-09-10', end: '2021-09-12', activityType : 'muscle', lat:45.5053, lng : -73.5525 },
    { title: 'rock climbing seminar', start: '2021-09-01', end: '2021-09-03', color: '#378006', activityType : 'muscle', lat:45.5053, lng : -73.5525 },
    { title: '5K weekend group run', date: '2021-09-19' ,activityType : 'endurance', lat:45.5053, lng : -73.5525},
    { title: '5K weekend group run', start: '2021-10-05', end: '2021-10-07', color: 'green' , activityType : 'endurance', lat:45.5053, lng : -73.5525}
]




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

                        <a href="/#" id='fullName'>{user.firstName} {user.lastName}</a>
                        <a href="/#" id='schoolName'>&#127979; {user.school}</a>

                    
                        <div className='user-stats-container'>

                            <div className='followers-container'>
                                <a href="/#">{user.followers}</a>
                                <a href="/#" className='user-stats-titles'>Followers</a>
                            </div>

                            <div className='following-container'>
                                <a href="/#">{user.following}</a>
                                <a href="/#" className='user-stats-titles'>Following</a>
                            </div>

                            <div className='badges-container'>
                                <a href="/#">{user.badges}</a>
                                <a href="/#" className='user-stats-titles'>Badges</a>
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
                                { title: '5K run', date: '2021-08-29', lat:45.5053, lng : -73.5525 },
                                { title: 'Morning pilates', date: '2021-09-23' , lat:45.5053, lng : -73.5525},
                                { title: 'Weekend group yoga', start: '2021-09-10', end: '2021-09-12', lat:45.5053, lng : -73.5525 },
                                { title: 'rock climbing seminar', start: '2021-09-01', end: '2021-09-03', color: '#378006', lat:45.5053, lng : -73.5525 },
                                { title: '5K weekend group run', date: '2021-09-19' , lat:45.5053, lng : -73.5525},
                                { title: '5K weekend group run', start: '2021-10-05', end: '2021-10-07', color: 'green' , lat:45.5053, lng : -73.5525}
                            ]}

                            
                           
                           
                           
                        />

                    </div>


                    <div className='maps-container'>

                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDMRW2COun3qq-v7ghHeR4SphxE1-hpkgk' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                       <Marker
                            lat={45.5053}
                            lng={-73.5525}
                            name="My Marker"
                            color="red"
                        />
                   



                        </GoogleMapReact>
                    </div>
                </div>
            </>


        );
    }
}

export default DashboardContainer;