import React from 'react'


//import {Grid} from '@material-ui/core';

const Activities=()=>{

    const [showResults, setShowResults] = React.useState(true)
    const onClick = () => setShowResults(false)
    return(
        <div className= "events-container" style={{marginBottom: '20px', height: '200vh', backgroundColor: '#ebedf0'}}>
            <div>
                <h1  style={{marginLeft: '190px', paddingTop: '25px'}}>Activities</h1>
                
                <div style={{marginLeft: '190px',
                            marginRight: '270px',
                             display: 'flex', justifyContent: 'space-between'}}>
                    <button onClick={onClick} style={{height: '35px', 
                            width: '150px'}}>Badminton</button>
                    <button  style={{height: '35px', 
                            width: '150px'}}>Tennis</button>
                    <button  style={{height: '35px', 
                            width: '150px'}}>Soccer</button>
                    
                    <button  style={{height: '35px', 
                            width: '150px'}}>Hockey</button>
                    <button  style={{height: '35px', 
                            width: '150px'}}>Cricket</button>
                </div>
                
                <div className="trending-events" 
                     style={{marginLeft: '190px',
                            marginTop: '50px',
                            boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.25)',
                            height: '60vh', width: '140vh',
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'space-between'}}>
                    
                    <div style={{paddingLeft: '20px'}}>
                        <h1>Badminton</h1>
                        <h3>Name: Amanda</h3>
                        <h3>Location: Sherbrooke</h3>
                        <h3>Equipment: Have two Racquets</h3>
                        <h3>Time: 03:00 PM EDT</h3>
                        <p>Hello! I am Amelia, and I am looking for someone to play badminton with me near
                            sherbrooke. Please, message if you are interested.
                        </p>
                        <div className="button-name" style={{display: 'flex', justifyContent: 'center'}}>
                            <button style={{
                            border: 'none',height: '35px', 
                            width: '190px', color: 'white',
                            backgroundColor: '#ed5628'}}>Chat
                            </button>
                        </div>
                    </div>

                    <div className="card-pic" style={{paddingRight: '20px'}}>
                        <img src={require('./profile.png').default} alt="profile" 
                        height={290} width={300} 
                        style={{marginLeft: '35px', marginTop: '20px'}}></img>
                    </div>

                </div>
                { showResults ? <Results /> : null }

            </div>
            
        </div>
    )
}

const Results = () => (
    <div id="results" className="search-results">
      <div className="trending-events" 
                     style={{marginLeft: '190px',
                            marginTop: '50px',
                            boxShadow: '0px 0px 12px 5px rgba(0,0,0,0.25)',
                            height: '60vh', width: '140vh',
                            backgroundColor: 'white',
                            display: 'flex',
                            justifyContent: 'space-between'}}>
                    
                    <div style={{paddingLeft: '20px'}}>
                        <h1>Tenis</h1>
                        <h3>Name: Amelia</h3>
                        <h3>Location: Sherbrooke</h3>
                        <h3>Equipment: Have two Racquets</h3>
                        <h3>Time: 03:00 PM EDT</h3>
                        <p>Hello! I am Amelia, and I am looking for someone to play badminton with me near
                            sherbrooke. Please, message if you are interested.
                        </p>
                        <div className="button-name" style={{display: 'flex', justifyContent: 'center'}}>
                            <button 
                            
                            style={{
                            border: 'none',height: '35px', 
                            width: '190px', color: 'white',
                            backgroundColor: '#ed5628'}}><a href="https://fillactive-chat-app.netlify.app/" style={{color: 'white', textDecoration: 'none'}}>Chat </a>
                            </button>
                        </div>
                    </div>

                    <div className="card-pic" style={{paddingRight: '20px'}}>
                        <img src={require('./profile.png').default} alt="profile" 
                        height={290} width={300} 
                        style={{marginLeft: '35px', marginTop: '20px'}}></img>
                    </div>

                </div>
    </div>
  )

export default Activities;
