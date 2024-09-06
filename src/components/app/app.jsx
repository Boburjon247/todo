import './app.css'
import {AppInfo, AppFilter, SearchPanel} from '../index'
const App = () => {
  return (
    <div className='app'>
        <div className='contener'>
            <AppInfo/>
            <AppFilter/>
            <SearchPanel/>
        </div>        
    </div>
  )
}

export default App
