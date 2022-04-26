import {Component} from 'react'
import NavBar from '../NavBar'

import MovieContext from '../../context/MovieContext'
import Footer from '../Footer'

import SearchElement from '../SearchElement'
import './index.css'

class SearchRoute extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <div className="search-main-container" testid="searchRoute">
              <NavBar />
              <div className="search-container">
                <SearchElement />
              </div>
              <Footer />
            </div>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default SearchRoute
