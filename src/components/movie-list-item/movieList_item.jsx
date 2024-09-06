import { Component } from 'react'
import './movieList_item.css'

class MovieListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorites: false,
            like:false
        }
    }
    
    cookieClick = () => {
        this.setState(prevState => ({
            favorites: !prevState.favorites
        }))
    }
    titleClick = () =>{
        this.setState(({like}) => ({
            like:!like
        }))
    }

    render() {
        const { name, numberValyu } = this.props
        const { favorites,like } = this.state

        return (
            <li className={` listItem ${favorites && 'favorites'} ${like && 'like'}`}>
                <div className='listItemTitle'>
                    <i className="fa-regular fa-heart"></i>
                    <p onClick={this.titleClick}>{name}</p>
                </div>
                <input className='input_valyu' type='text' value={numberValyu} readOnly />
                <div className='cooke_icon'>
                    <i onClick={this.cookieClick} className="fa-solid fa-cookie"></i>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </li>
        )
    }
}
export default MovieListItem