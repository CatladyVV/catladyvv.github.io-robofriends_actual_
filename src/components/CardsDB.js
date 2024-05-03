import React from 'react';
import CardsFMT from './CardsFMT.js';

// const CardsDB = ({robots}) => {
//     const cardComponent= robots.map((user,i) => {
//         // return <CardsFMT key= {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}
//         return (
//           <CardsFMT 
//             key= {i} 
//             id={user.id} 
//             name={user.name} 
//             email={user.email}
//           />
//         );
//     }) 
//     // key prop = something that doesnt change ix or id

//     return(
//         <div>
//             {/* <CardsFMT id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//             <CardsFMT id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//             <CardsFMT id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//             <CardsFMT id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
//             <CardsFMT id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
//             <CardsFMT id={robots[5].id} name={robots[5].name} email={robots[5].email}/>
//             <CardsFMT id={robots[6].id} name={robots[6].name} email={robots[6].email}/>
//             <CardsFMT id={robots[7].id} name={robots[7].name} email={robots[7].email}/>
//             <CardsFMT id={robots[8].id} name={robots[8].name} email={robots[8].email}/>
//             <CardsFMT id={robots[9].id} name={robots[9].name} email={robots[9].email}/> */}
//             {cardComponent}
//         </div>
//     )
// }

const CardsDB = ({robots}) => {
    if (true){
        throw new Error('NOOOOOOO!');
    }
    return(
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <CardsFMT 
                            key= {i} 
                            id={user.id} 
                            name={user.name} 
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardsDB;