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

    const handleOnClick = () => {
        if (props.history) { 
            props.history.goBack()
        }
    }

    const fullCardInfo = (card) => {
        return (
            <div id={card.id}  className="container p-3 mb-2 d-flex justify-content-center">
                <div className="row">
                    <div className="col sm-2" >
                        <img src={card.image_url ? card.image_url.url : null} 
                        alt={card.name}  
                        className="large rounded mx-auto d-block"
                        onClick={handleOnClick} />
                    </div>
                    <div className="col-sm-8 justify-content-md-center bg-white text-dark bg-opacity-75">
                        <h1>{card.name}</h1>
                        <p><strong>{card.arcana.name} Arcana Suit of {card.suit.name}</strong></p>
                        
                        <h3>Full Meaning</h3>
                        <p>{card.full_meaning}</p>

                        <h3>Upright Meaning</h3>
                        <p>{card.upright_meaning}</p>

                        <h3>Reversed Meaning</h3>
                        <p>{card.reversed_meaning}</p>
                        {renderLinkIfAdmin(card.id)}
                    </div>
                </div>
            </div>
        )
    }

    const displayCardInfo = () => {
        const card = props.card
        const num = props.num
        
        if (!card) {
            return (
                <div className="alert alert-danger" role="alert">
                    That card doesn't exist!
                </div>
            )
        }
        if (num === 0 ) {
            return (
                <div className="large rounded mx-auto d-block back bg-white p-3">
                    <h3 className="text-center">{card.name} Upright</h3>
                    <p>{card.upright_meaning}</p>
                </div>
            )
        } else if (num === 1) {
            return (
                <div className="large rounded mx-auto d-block back bg-white p-3">
                    <h3 className="text-center">{card.name} Reversed</h3>
                    <p>{card.reversed_meaning}</p>
                </div>
            )
        } else {
            return (
                fullCardInfo(card)
            )
        }
    }
    
    return (
        <div className="row-md-auto">
            {displayCardInfo()}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(CardInfo)