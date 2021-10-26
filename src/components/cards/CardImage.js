// import React from 'react'

// function CardImage(props) {
    
//     function getRandomInt(max) {
//         return Math.floor(Math.random() * max)
//     }

//     function imgFlip() {
//         const num = getRandomInt(2)
//         const card = props.card

//         console.log(num)
//         console.log(card)
//         if (num >= 1 ){
//             return (
//                 <img src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" />
//             )
//         } else {
//             return (
//                 <img className="image_reversed" src={card.image_url ? card.image_url.url : null} alt={card.name} width="120" height="198" />
//             )
//         }
//     }

//     return (
//         <div>
//             {imgFlip()}
//         </div>
//     )

// }

// export default CardImage