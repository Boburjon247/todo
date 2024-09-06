import './movieList_item.css'
const MovieListItem = () => {
    return (
        <li className='listItem'>
            <div className='listItemTitle'>
                <i class="fa-regular fa-heart"></i>
                <p>Omar</p>
            </div>
            <input type='text' value={995} readOnly />
            <div className='cooke_icon'>
                <i class="fa-solid fa-cookie"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </li>
    )
}

export default MovieListItem