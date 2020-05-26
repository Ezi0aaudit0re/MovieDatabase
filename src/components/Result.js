import React from 'react'


export const Result = ({result, openPopup}) => {
    return(
        <div className="result" onClick={() => openPopup(result.imdbID)} >
            <img src={result.Poster} alt={result.Title} />
            <h3> {result.Title} </h3>
        
        </div>
    )

}