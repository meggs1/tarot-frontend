import CardForm from "./cards/CardForm"
const Home = (props) => {

    return(
        
        <div>
            <h1>{props.user.name}</h1>
            {/* <p>Your cards {props.user.card_ids.map(card => card.id)}</p> */}
            <CardForm />
        </div>
    )
}

export default Home