import './css/Plants.css';
import planthome from './img/Plant_home.webp'
import plant1 from './img/plant1.jpg'
import pottedplant from './img/potted_plant.png'
import mon from './img/mon.webp'


function Plants() {
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
        <br></br>
        <h2>
            Plants
        </h2>
        <br>
        </br>
        <br></br>
        <div className='plants'>
                <img className='img' src={plant1}></img>
                <p>
                wondrous leaf . . . . . . . . . . . . $30.99
                </p>
                <img className='img' src={pottedplant}></img>
                <p>
                potted plant . . . . . . . . . . . . $20.99
                </p>
                <img className='img' src={mon}></img>
                <p>
                monstera plant . . . . . . . . . . . . $15.99
                </p>

            </div></>
    );

}

export default Plants;