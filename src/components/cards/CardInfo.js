import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CardInfo = (props) => {

    const renderLinkIfAdmin = (cardId) => {
        if (props.user.currentUser.is_admin) {
            return (
            <Link to={`/cards/${cardId}/edit`}>Edit</Link>
            )
        }
    }

    const displayCardInfo = () => {
        const card = props.card
        const num = props.num
        if (num === 0 ) {
            return (
                <div class="card-text">
                    <h3 class="text-center">{card.name} Upright</h3>
                    <p>{card.upright_meaning}</p>
                </div>
            )
        } else if (num === 1) {
            return (
                <div class="card-text">
                    <h3 class="text-center">{card.name} Reversed Meaning</h3>
                    <p>{card.reversed_meaning}</p>
                </div>
            )
        } else if (props.className === 'cardInfo') {
            return (
                <div id={card.id}  className="container p-3 mb-2 bg-white text-dark bg-opacity-75">
                    <div class="row justify-content-center">
                        <div class="col" >
                            <img src={card.image_url ? card.image_url.url : null} alt={card.name}  class="large" />
                        </div>
                        <div class="col">
                            <h1>{card.name}</h1>
                            <p><strong>{card.arcana.name} Arcana Suit of {card.suit.name}</strong></p>
                            
                            <h3>Full Meaning</h3>
                            <p>{card.full_meaning}</p>
    
                            <h3>Upright Meaning</h3>
                            <p>{card.upright_meaning}</p>

                            <h3>Reversed Meaning</h3>
                            <p>{card.reversed_meaning}</p>
                        </div>
                    </div>
                    <div>
                        {renderLinkIfAdmin(card.id)}
                    </div>
                </div>
            )
        }
    }
    
    return (
        <div class="row-md-auto">
            {displayCardInfo()}
        </div>
    )

}

const mapToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapToProps)(CardInfo)