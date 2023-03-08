import './css/Menu.css';
import planthome from './img/Plant_home.webp'
import coffee1 from './img/coffee1.gif'
import matcha from './img/matcha.png'
import cappuccino from './img/cap.webp'
import croissant from './img/croissant.png'
import cookie from './img/ccc.png'
import choco from './img/chocolate_cake.avif'
import coffee2 from './img/coffee4.gif'

function Menu() {
    return(
        <><><div className='title'>
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
                Drinks
            </h2>
            <br></br>
            <div className='drinks'>
                <img className='img' src={coffee1}></img>
                <p>
                    Espresso . . . . . . . . . . . . $3.99
                </p>
                <img className='img' src={coffee2}></img>
                <p>
                    Cappuccino . . . . . . . . . . . . $4.99
                </p>
                <img className='img' src={matcha}></img>
                <p>
                    Matcha latte . . . . . . . . . . . . $6.99
                </p>

            </div>
            </>
            <br></br>
            <h2>
                Foods
            </h2>
            <div className='food'>
                <img className='img' src={croissant}></img>
                <p>
                    Croissant . . . . . . . . . . . . $5.99
                </p>
                <img className='img' src={cookie}></img>
                <p>
                    Chocolate chip cookie . . . . . . . . . . . . $6.99
                </p>
                <img className='img' src={choco}></img>
                <p>
                    Chocolate cake . . . . . . . . . . . . $10.99
                </p>
            </div></>
    );

}

export default Menu;