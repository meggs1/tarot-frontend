import { Link } from "react-router-dom"
import Card from './Card'

const Cards = (props) => {
    console.log(props)
    // debugger
    return (
        <div class="container">
            <div class="row justify-content-md-center">
                {props.cards.map( card => 
                    <div class="col-md-auto">
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