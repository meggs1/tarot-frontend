const Home = (props) => {
    console.log(props)
    return(
        
        <div>
            <h1>{props.user.name}</h1>
            {/* <p>Your cards {props.user.card_ids.map(card => card.id)}</p> */}
        </div>
    )
}

export default Home