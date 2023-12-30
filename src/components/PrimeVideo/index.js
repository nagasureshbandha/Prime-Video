import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const commedyMovie = 'COMEDY'
const horrorMovie = 'HORROR'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === commedyMovie,
  )

  const horrorMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === horrorMovie,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="image"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
        <h1 className="heading">Horror Movies</h1>
        <MoviesSlider moviesList={horrorMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
