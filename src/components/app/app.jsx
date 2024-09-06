import './app.css'
import { AppInfo, AppFilter, SearchPanel, MovieList, AddMovieItem } from '../index'


const App = () => {
  const dataArray = [
    {
      id: 0,
      name: 'Usmoniylar imperyasi',
      value: 995,
      favorites:true,
    },
    {
      id: 1,
      name: 'Kurtlar vodiysi',
      value: 95,
      favorites:false,
    },
    {
      id: 2,
      name: 'Chuqur',
      value: 454,
      favorites:false,
    }
  ]

  return (
    <div className='app'>
      <div className='centner'>
        <AppInfo />
        <AppFilter />
        <SearchPanel />
        <MovieList dataArray={dataArray} />
        <AddMovieItem />
      </div>
    </div>
  )
}

export default App
