import CardInfo from '../cards/CardInfo'
import DrawCardContainer from '../../containers/DrawCardContainer'

const Profile = (props) => {

    const displayUserCards = () => {
        const userCards = JSON.parse(localStorage.getItem('userCards'))
        if (userCards) {
            return (
                <div className="container">
                    <h2 className="text-center">{props.user.currentUser.name}'s last drawn cards </h2>
                    {userCards.map(card => 
                        <CardInfo card={card} className='cardInfo' key={card.id} user={props.user} /> 
                    )}
                </div> 
            ) 
        } else {
            return (
                <>
                    <h3 className="text-center">Draw cards to get started.</h3>
                    <DrawCardContainer />
                </>
            )
        }
    }


    return displayUserCards()
}



export default Profile