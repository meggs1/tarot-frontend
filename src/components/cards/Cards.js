import { Link } from "react-router-dom"
import CardImage from './CardImage'

const Cards = (props) => {
    console.log(props)
    // debugger
    return (
        <div class="container">
            <div class="row justify-content-md-center">
                {props.cards.map( card => 
                    <div class="col-md-auto">
                        <Link to={{pathname: `/cards/${card.id}`}}>
                            <CardImage card={card} className="cardImage" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards