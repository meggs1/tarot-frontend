import DrawCard from "./cards/DrawCard"

const Home = (props) => {
    // console.log('home props', props)
    return(
        <div className="container p-3 mb-2 bg-white text-dark bg-opacity-75">
            <DrawCard />
        </div>
    )
}

export default Home