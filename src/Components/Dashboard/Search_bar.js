import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "./Search_bar.css"
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Menu, MenuItem } from "@material-ui/core"

function Search_bar() {
    const [searchItem, setSearchItem] = useState("")
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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
                <button type="button" onClick={handleClick}>
                    <NotificationsIcon className="icon" />
                    <span className="notifyCount">12</span>
                </button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                   
                >
                    <MenuItem onClick={handleClose}>Notifications</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Search_bar
