import React from 'react';

function Headlines (props) {
    return (
        <div className = "wrapper">
            <img id = "image" src = {props.image} alt = {props.alt} />
            <div id = "article">
                <h2 id = "headline">{props.headline}</h2>
                <h3 id = "subcategory">{props.subcategory}</h3>
            </div>
        </div>
   
    )
}




export default Headlines;