import React from 'react';
// import { Component } from 'react';
// class Card extends Component{ 
//     render(){
//         return (
//             <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
//                 <h1>RoboFriends</h1>
//                 <img alt = 'robots' src={`https://robohash.org/${props.id}`}  width={200} height={200} /> 
//                 {/* ?200x200 doesnt work */} 
//                 <div>
//                     {/* <h2>John Doe</h2>
//                     <p>john.doe@gmail.com</p> */}
//                     <h2>{this.props.name}</h2>
//                     <p>{this.props.email}</p>
//                 </div>
//             </div>
//         )
//     }
// }
//States

// const Card = (props) => {
//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
//             <h1>RoboFriends</h1>
//             <img alt = 'robots' src={`https://robohash.org/${props.id}`}  width={200} height={200} /> 
//             {/* ?200x200 doesnt work */} 
//             <div>
//                 {/* <h2>John Doe</h2>
//                 <p>john.doe@gmail.com</p> */}
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

// const Card = (props) => {
//     const {name, email, id} = props;
//     return (
//         <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
//             <h1>RoboFriends</h1>
//             <img alt = 'robots' src={`https://robohash.org/${id}`}  width={200} height={200} /> 
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

//destructuring

const CardsFMT = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5'>
            <img alt = 'robots' src={`https://robohash.org/${id}`}  width={200} height={200} /> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div> 
        </div>
    )
}
// further simplifying

export default CardsFMT;
