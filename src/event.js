import React from 'react'
//import {Grid} from '@material-ui/core';

const Event=()=>{

    
    return(
        <div className= "events-container" style={{marginBottom: '20px', height: '200vh', backgroundColor: '#ebedf0'}}>
            <div>
            <h1  style={{marginLeft: '70px', paddingTop: '25px'}}>Trending Events</h1>
            <div className="trending-events"  style={{marginLeft: '70px',
                boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.25)',
             height: '60vh', width: '190vh',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'space-between'
              }}>
                <div style={{paddingLeft: '20px'}}>
                    <h1>Hello</h1>
                    <p >Adipiscing elit. Sed rhoncus velit a diam bibendum, ut interdum mauris feugiat. Aliquam nec justo tincidunt, tempus magna non, malesuada dolor. Etiam in mi non ipsum dictum blandit. Donec molestie ac turpis at pulvinar. Aliquam erat volutpat. Donec laoreet mollis cursus.
                    Etiam in mi non ipsum dictum blandit. Donec molestie ac turpis at pulvinar. Aliquam erat volutpat. Donec laoreet mollis cursus.
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
                                <h2>Canada Marathon</h2>
                            </div>

                            {/*the image*/}
                            <div className="card-pic" style={{paddingRight: '20px'}}>
                                    <img src={require('./event1.jpg').default} alt="event1" 
                                        height={90} width={180} 
                                        style={{marginLeft: '35px', marginTop: '20px'}}></img>
                            </div>
                        </div>
                    

                    <div className="more-info">
                        <p  style={{marginLeft: '20px', marginRight: '20px'}}>Adipiscing elit. Sed rhoncus velit a diam bibendum, ut interdum mauris feugiat. Aliquam nec justo tincidunt, tempus magna non, malesuada dolor. Etiam in mi non ipsum dictum blandit. Donec molestie ac turpis at pulvinar. Aliquam erat volutpat. Donec laoreet mollis cursus.</p>
                    </div>
                    <div className="button-name" style={{display: 'flex', justifyContent: 'center'}}>
                        <button style={{
                         border: 'none',height: '35px', 
                         width: '190px', color: 'white',
                         backgroundColor: '#ed5628'}}>Register
                         </button>
                    </div>
                </div>

                </div>
                
                
                <div className= "card-container" style={{marginRight: '99px', 
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
                                <h2>Canada Marathon</h2>
                            </div>

                            {/*the image*/}
                            <div className="card-pic" style={{paddingRight: '20px'}}>
                                    <img src={require('./event1.jpg').default} alt="event1" 
                                        height={90} width={180} 
                                        style={{marginLeft: '35px', marginTop: '20px'}}></img>
                            </div>
                        </div>
                    

                    <div className="more-info">
                        <p  style={{marginLeft: '20px', marginRight: '20px'}}>Adipiscing elit. Sed rhoncus velit a diam bibendum, ut interdum mauris feugiat. Aliquam nec justo tincidunt, tempus magna non, malesuada dolor. Etiam in mi non ipsum dictum blandit. Donec molestie ac turpis at pulvinar. Aliquam erat volutpat. Donec laoreet mollis cursus.</p>
                    </div>
                    <div className="button-name" style={{display: 'flex', justifyContent: 'center'}}>
                        <button style={{
                         border: 'none',height: '35px', 
                         width: '190px', color: 'white',
                         backgroundColor: '#ed5628'}}>Register
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
