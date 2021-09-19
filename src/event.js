import React from 'react'
//import {Grid} from '@material-ui/core';

const Event=()=>{

    
    return(
        <div className= "events-container" style={{marginBottom: '20px', height: '2000vh', backgroundColor: '#ebedf0'}}>
            <div>
            <h1  style={{marginLeft: '70px', paddingTop: '25px'}}>Trending Events</h1>
            <div className="trending-events"  style={{marginLeft: '70px',
                boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.25)',
             height: '50vh', width: '185vh',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between'
              }}>
                <div style={{paddingLeft: '20px'}}>
                    <h1>Marathon Beneva de Montreal</h1>
                    <p >The Marathon Beneva de Montréal will feature race distances for runners of all performance levels, from families to seasoned athletes: 42.2 km, 21.1 km, 10 km, 5 km and 1 km.<br></br>
                    The Marathon Beneva de Montréal's 30th edition will be held from September 24 to 26, 2021. The promoter of the Grands Prix Cyclistes de Québec et de Montréal and founder of the Montréal Marathon in 1979, Événements GPCQM is resuming management of the event with a brand new title partner, Beneva, born from the coming together of La Capitale and SSQ Insurance.
                    </p>
                    <div className="button-name" style={{display: 'flex', justifyContent: 'center'}}>
                        <button style={{
                         border: 'none',height: '35px', 
                         width: '190px', color: 'white',
                         backgroundColor: '#ed5628'}}>Register
                         </button>
                    </div>
                </div>

                <div className="card-pic" style={{paddingRight: '20px'}}>
                    <img src={require('./event1.jpg').default} alt="event1" 
                    height={290} width={600} 
                    style={{marginLeft: '35px', marginTop: '20px'}}></img>
                </div>
            </div>

            <div className="other-events-container" style={{paddingTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
                
                <div className= "card-container" style={{marginLeft: '70px', boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.25)'}}>
                    {/* image and title*/}
                    <div className="mini-event"  style={{
                    height: '50vh', width: '90vh',
                    backgroundColor: 'white'
                    }}>
                        <div className="card-container" style={{display: 'flex',
                    justifyContent: 'space-between'}}>
                            {/*the title */}
                            <div style={{paddingLeft: '20px'}}>
                                <h2>Halloween: Run From Michael Myers</h2>
                            </div>

                            {/*the image*/}
                            <div className="card-pic" style={{paddingRight: '20px'}}>
                                    <img src={require('./event2.jpg').default} alt="event2" 
                                        height={90} width={180} 
                                        style={{marginLeft: '35px', marginTop: '20px'}}></img>
                            </div>
                        </div>
                    

                    <div className="more-info">
                        <p  style={{marginLeft: '20px', marginRight: '20px'}}>Michael Myers has escaped and to survive, you must RUN! Join Laurie and Dr. Loomis as you escape the ‘Boogeyman’ this Halloween in your own neighborhood. 
                        Tonight, he comes home. After all, “It’s Halloween; everyone’s entitled to one good scare…” <br></br>
                        This officially licensed inaugural Medal Dash nationwide event allows you to run, walk or hike a 5K/10K or half marathon anytime, anywhere. You choose your location: in your neighborhood as you trick-or-treat,
                        on a favorite trail or even your treadmill. You have from Halloween Day through Mid-November to record your time and share YOUR race experience and costumes with thousands of our followers (90,000+ participants since 2019!). Celebrate your VICTORY with an official limited edition glow in the dark Halloween die-cast medal🏅, event bib and tech t-shirt shipped for free right to your front door.</p>
                    </div>
                    <div className="button-name" style={{display: 'flex', justifyContent: 'center'}}>
                        <button style={{
                         border: 'none',height: '35px', 
                         width: '190px', color: 'white',
                         backgroundColor: '#ed5628',}}>Register
                         </button>
                    </div>
                </div>

                </div>
                
                
                <div className= "card-container" style={{marginRight: '100px', 
                boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.25)'}}>
                    {/* image and title*/}
                    <div className="mini-event"  style={{
                    height: '50vh', width: '90vh',
                    backgroundColor: 'white'
                    }}>
                        <div className="card-container" style={{display: 'flex',
                    justifyContent: 'space-between'}}>
                            {/*the title */}
                            <div style={{paddingLeft: '20px'}}>
                                <h2>Santa Shuffle</h2>
                            </div>

                            {/*the image*/}
                            <div className="card-pic" style={{paddingRight: '20px'}}>
                                    <img src={require('./event3.jpg').default} alt="event3" 
                                        height={90} width={180} 
                                        style={{marginLeft: '35px', marginTop: '20px'}}></img>
                            </div>
                        </div>
                    

                    <div className="more-info">
                        <p  style={{marginLeft: '20px', marginRight: '20px'}}>This merry event helps The Salvation Army to assist families and individuals in need during the Christmas season and throughout the year!<br></br>
                        The Santa Shuffle began 30 years ago in Edmonton, Alberta to fundraise for local Salvation Army initiatives when local Running Room members decided to use their passion for running as a way to raise money 
                        to support the less fortunate in their community. In 2001, the Santa Shuffle became a national event with locations in every province in Canada. <br></br>
                        Today, the Santa Shuffle is a 5km Fun-Run and 1km Elf Walk for all ages and skill levels. Participants fundraise throughout the season to make a difference in their community.<br></br>Let’s get shuffling!<br></br></p>
                    </div>
                    <div className="button-name" style={{display: 'flex', justifyContent: 'center'}}>
                        <button style={{
                         border: 'none',height: '35px', 
                         width: '190px', color: 'white',
                         backgroundColor: '#ed5628',}}>Register
                         </button>
                    </div>
                </div>

                </div>

                

                
            </div>
            </div>
        </div>
    )
}
export default Event;
