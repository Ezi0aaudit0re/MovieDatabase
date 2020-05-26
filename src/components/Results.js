import React from 'react'

import { Result } from './Result'


export const Results = ({results, openPopup}) => {

    return (
        <section className="results">

            {results.map(
                (result) => (
                    <Result result={result} key={result.imdbID} openPopup={openPopup} />
                )
            )}

        
        </section>

    )

}

