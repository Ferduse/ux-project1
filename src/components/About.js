import './css/About.css';
import planthome from './img/Plant_home.webp'
import hangout from './img/hangout.jpeg'
import study from './img/study.gif'
import chess from './img/chess.png'



function About() {
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

            <div className='why'>
                <center>
                <p>
                    This cafe was inspired by Studio Ghibli, a Japanese animation Studio
                    based in Koganei, Tokyo. As someone who loves animation, cozy lifestyle, plants and coffee,
                    I hope this cafe brings you inner peace!
                </p>
                </center>

            </div></>
            <h2>
                Theres so many more things to do in this cafe such as...
            </h2>
            <br></br>
            <div className='social'>
                <img className='img' src={hangout}></img>
                <p>
                    Hanging out with friends
                </p>
                <img className='img' src={study}></img>
                <p>
                    Studying
                </p>
                <img className='img' src={chess}></img>
                <p>
                    Play board games
                </p>
            </div></>
        
    );
}

export default About;