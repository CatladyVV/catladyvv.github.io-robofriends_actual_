import React from 'react';

// Scroll can utilize children as one of methods to render
// Every props got children

const Scroll = (props) => {
    // return <h1>Hi</h1>
    return ( // css: overflow_y jsx: overflowY
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;
