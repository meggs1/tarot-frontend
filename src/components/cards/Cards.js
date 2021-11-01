// import { Link } from "react-router-dom"
// import CardImage from './CardImage'

// const Cards = (props) => {
//     return (
//         <div class="container">
//             <div class="row justify-content-md-center">
//                 {props.cards.map( card => 
//                     <div class="col-md-auto">
//                         <Link to={{pathname: `/cards/${card.id}`}}>
//                             <CardImage card={card} className="cardImage" />
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// mapStateToProps = (state) => {
//     return {
//         cards: state.cards
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//       fetchCards: () => dispatch(fetchCards()),
//     //   editCard: (card) => dispatch(editCard(card))
//     }
//   }

// export default Cards