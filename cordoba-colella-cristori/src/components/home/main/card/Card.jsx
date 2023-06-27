import './card.css'

function Card(props) {

    return (
        <div className='card'>
            <img src={props.imgCard[props.cardKey].img} alt="imgCard" />
            <h3>{props.imgCard[props.cardKey].nameCard}</h3>
        </div>
    );
}

export default Card;