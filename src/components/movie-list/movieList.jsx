import './movieList.css'
import { MovieListItem } from '../index'
const MovieList = ({dataArray}) => {

  return (
    <div className='movie-list'>
      <ul>
        {dataArray.map(item => (
          <MovieListItem key={item.id} name={item.name} numberValyu={item.value} favorites={item.favorites} />
        ))}
      </ul>
    </div>
  )
}
export default MovieList