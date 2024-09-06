import { Component } from 'react'
import './addMovieItem.css'
import { icon } from '@fortawesome/fontawesome-svg-core'

class AddMovieItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            button: false,
            icon:false
        }
    }

    clickButtonAdd = () => {
        this.setState(({ button,icon }) => ({
            button: !button,
            icon:!icon
        }))
    }

    render() {
        const {button,icon} = this.state
        return (
            <div className='addItem' >

                <button onClick={this.clickButtonAdd} className='addButton'>
                    <i className={`fa-solid ${icon ? "fa-xmark" : "fa-plus"}`}></i>
                </button>
                <div className={`addItemList ${button && 'active'}`}>
                    <input type='text' placeholder='Nomi..' />
                    <input type='text' placeholder='Soni...' />
                    <input type='submit' value={'Saqlash'} />
                </div>
            </div >
        )
    }
}


export default AddMovieItem