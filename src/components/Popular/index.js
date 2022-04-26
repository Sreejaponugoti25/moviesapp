import {Component} from 'react'
import NavBar from '../NavBar'

import MovieContext from '../../context/MovieContext'
import Footer from '../Footer'
// import LoadingElement from '../LoaderElement'
import PopularItem from '../PopularItem'

class Popular extends Component {
  //   state = {searchInput: ''}

  render() {
    return (
      <MovieContext.Consumer>
        {value => {
          const {username} = value
          console.log('username from Home', {username})

          return (
            <>
              <div className="home-container" testid="popular">
                <NavBar />
                <PopularItem />
                <Footer />
              </div>
            </>
          )
        }}
      </MovieContext.Consumer>
    )
  }
}
export default Popular
