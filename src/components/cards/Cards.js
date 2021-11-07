import { Link } from "react-router-dom"
import Card from './Card'

const Cards = (props) => {
    console.log('cards', props)
    const cards = props.cards
    if (cards) {
        return (
            <div class="container">
                <div class="row justify-content-md-center">
                    {cards.map( card => 
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
}

export default Cards