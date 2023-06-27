import './card.css'

function Card(props) {

    return (
        <div className='card'>
            <a href="https://www.crunchyroll.com/es/series/GY2P9ED0Y/code-geass">
            <img src={props.imgCard[props.cardKey].img} alt="imgCard" />
            <h3>{props.imgCard[props.cardKey].nameCard}</h3>
            </a>
            
        </div>
    );
}

export default Card;