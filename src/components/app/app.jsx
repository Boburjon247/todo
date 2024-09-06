import './app.css'
import {AppInfo, AppFilter, SearchPanel, MovieList} from '../index'
const App = () => {
  return (
    <div className='app'>
        <div className='contener'>
            <AppInfo/>
            <AppFilter/>
            <SearchPanel/>
            <MovieList />
        </div>        
    </div>
  )
}

export default App
