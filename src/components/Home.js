import CardsContainer from "../containers/CardsContainer"
import DrawCard from "./cards/DrawCard"

const Home = (props) => {
    console.log(props)
    return(
        <div className="container p-3">
            <DrawCard />
        </div>
    )
}

export default Home