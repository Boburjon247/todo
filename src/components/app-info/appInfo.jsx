import './appInfo.css'

const AppInfo = () => {
  return (
    <div className='app-info'>
      <div>
          <p className='app-info-top-title'>Todo List</p>
      </div>
      <div className='icon-block'>
        <div className='button-top-info'>
          <span>99</span>
          <i className="fa-solid fa-earth-europe"></i>
        </div>
        <div className='button-top-info'>
          <span>99</span>
          <i className="fa-solid fa-fire"></i>
        </div>
      </div>
    </div>
  )
}

export default AppInfo