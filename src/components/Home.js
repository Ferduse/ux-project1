import './css/Home.css';
import planthome from './img/Plant_home.webp'
import coffee1 from './img/coffee1.gif'
import sharing from './img/sharing.jpg'
import plant1 from './img/plant1.gif'
import croissant1 from './img/croissant.png'

import Card from './Card';

const description = 'Take a sip.'

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

            <h3>welcome to plants + coffee!</h3>
                <br></br>
            <div className='content'>
                <p>
                here, you can catch a break and relax in a room
                filled with plants. You can take a drink and purchase
                your own cozy plant to take home with you!
                </p>

            </div></>
            
            <div className='box1'>
                <div className='image'>
                    <img className="coffee1" src={coffee1}></img>
                </div>
            <div className='coffee1_t'>
            <p>
                take a sip of our pipping hot, aromatic and premium coffee
            </p>
            </div>
        </div>

        <div className='box2'>
            <div className='image'>
                <img className='plant1' src={plant1}></img>
            </div>
        <div className='plant1_t'>
            <p>
                elegant, radiant, and beautiful plants for your cozy home 
            </p>
        </div>
        </div> 
            
        <div className='box3'>
            <div className='image'>
                <img className='croissant1' src={croissant1}></img>
            </div>
        <div className='croissant1_t'>
            <p>
                relax and eat some of our cozy food!  
            </p>
        </div>
        </div> 
            
            
            </>
    );
}

export default Home;