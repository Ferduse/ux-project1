import './css/Home.css';
import planthome from './img/Plant_home.webp'
import coffee1 from './img/coffee1.gif'
import sharing from './img/sharing.jpg'

function Home() {
    return (
        <><><div className='title'>
            <center>
                <h1> plants + coffee </h1>
                <h2> a cozy vibe </h2>
                <br></br>
                <br></br>
                <img src={planthome} />
            </center>
        </div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>

            <div className='content'>

                <h3>welcome to plants + coffee!</h3>
                <br></br>
                here, you can catch a break and relax in a room
                filled with plants. You can take a drink and purchase
                your own cozy plant to take home with you!
            </div></>
            
            <div className='boxes'>
                <img className="coffee1" src={coffee1}></img>

            </div>
            
            
            
            </>
    );
}

export default Home;