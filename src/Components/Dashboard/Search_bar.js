import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Search_bar.css"
import NotificationsIcon from '@material-ui/icons/Notifications';

function Search_bar() {
    const [searchItem, setSearchItem] = useState("")
    return (
        <div className="search_bar">
            <SearchIcon className="icon" />
            <form>
                <input
                    value={searchItem}
                    placeholder="Search..."
                    onChange={(e) => setSearchItem(e.target.value)}
                />
            </form>
            <div className="notification">
                <button type="button">
                    <NotificationsIcon className="icon"/>
                    <span className="notifyCount">12</span>
                </button>
            </div>
        </div>
    )
}

export default Search_bar
