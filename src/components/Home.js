import './css/Home.css';
import planthome from './img/Plant_home.webp'
import coffee1 from './img/coffee1.gif'
import sharing from './img/sharing.jpg'
import plant1 from './img/plant1.gif'
import croissant1 from './img/croissant.png'



function Home() {
    return (
        <><div className='title'>
            <center>
                <h1> plants + coffee </h1>
                <h2> a cozy vibe </h2>
                <br></br>
                <br></br>
                <img src={planthome} />
            </center>
        </div>
<br></br>
        <h2>
            Welcome to plants + coffee!
        </h2>

        <div className='content'>
            <p>
                Here, you can catch a break and relax in a room
                filled with plants. You can take a drink and purchase
                your own cozy plant to take home with you!

                You can hangout, study and play board game as well!

                Enjoy your time here!
            </p>
        </div>


        <div className='main'>
                <img className='img' src={coffee1}></img>
                <p>
                    Take a sip of our aromatic and premium coffee
                </p>
                <img className='img' src={plant1}></img>
                <p>
                    Elegant, radiant, and beautiful plants for your cozy home
                </p>
                <img className='img' src={croissant1}></img>
                <p>
                    Relax and eat some of our cozy foods!
                </p>
            </div>
        </>
    );
}

export default Home;