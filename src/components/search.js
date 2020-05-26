
import React from 'react'


export const Search = ({ handleInputs, search }) => {
    return (
        <section className="searchbox-wrap"> 
            <input 
                type="text" 
                placeholder="Search for a movie ..."
                className="searchBox" 
                onChange={handleInputs}
                onKeyPress={search}
            />
        </section>
    )

}