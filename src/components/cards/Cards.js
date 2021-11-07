import { Link } from "react-router-dom"
import Card from './Card'

const Cards = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                {props.cards.map( card => 
                    <div className="col-md-auto" key={card.id}>
                        <Link to={{pathname: `/cards/${card.id}`}}>
                            <Card card={card} className="card" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cards