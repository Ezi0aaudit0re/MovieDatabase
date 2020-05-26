import React, { Component } from 'react'
import axios from 'axios'

import { Search } from './search'
import { Results } from './Results'
import { Popup } from './Popup'
import { API_URL } from '../Config'

class Library extends Component {
    
    state = {s: "", results: [], selected: {}}


    // TODO update the API Key 
    apiURL = API_URL

    // get the input search of the user
    handleInputs = e => {
      let s = e.target.value;

      this.setState(prevState => {
          return {...prevState, s: s}
      })

    }

    search = (e) => {
        if ( e.key === "Enter"){
            axios(this.apiURL + "&s=" + this.state.s)
            .then(({data}) => {
                let results = data.Search
                console.log(results)
                // update State
                if(results){
                    this.setState(prevState => {

                        return {...prevState, results: results}

                    })
                }
                
            })

        }

    }


    openPopup = id => {
        axios(this.apiURL + "&i=" + id)
        .then(({data}) => {
            let result = data;

            this.setState(prevState => {
                return {...prevState, selected:result}
            })

        })
    }


    closePopup = () => {
        this.setState(prevState => {
            return {...prevState, selected: {}}
        })
    }


    // this method deals with rendering of data 
    render() {
        return (
            <div>
                <header>
                    <h1>Movie Database</h1>
                </header>
                <main>
                    <Search handleInputs={this.handleInputs} search={this.search}/> 
                    <Results results={this.state.results} openPopup={this.openPopup} />
                    {
                        (typeof this.state.selected.Title != "undefined") 
                        ? <Popup selected={this.state.selected} closePopup={this.closePopup} /> 
                        : false
                    
                    }
                </main>
            </div>
            
        )

    }


}


export default Library