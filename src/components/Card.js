import './css/Card.css'
import'./css/Home.css'

function Card (props) {
    return (
        <div className="card">
          <img src={props.img} alt="home img" />
          <p>
            {props.description}
          </p>
        </div>
    );
}

export default Card;