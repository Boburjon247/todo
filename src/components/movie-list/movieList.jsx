import './movieList.css'
import { MovieListItem } from '../index'
const MovieList = () => {
  return (
    <div className='movie-list'>
      <ul>
        <MovieListItem />
      </ul>
    </div>
  )
}
export default MovieList