import React, { useState } from 'react'
import { Button, Menu, MenuItem } from "@material-ui/core"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./Dashboard_header.css"
import SearchIcon from '@material-ui/icons/Search';

function Dashboard_header() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [open, setOpen] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(5);
    const openMenu = (e) => {
        setOpen(e.currentTarget)
    };
    const closeMenu = () => {
        setOpen(false)
    };
    const setMonthIndex = (index) => {
        setSelectedIndex(index)
        closeMenu()
    }
    return (
        <div className="header">
            <h2>Dashboard</h2>
            <Button color="inherit"
                onClick={openMenu}
                endIcon={<ArrowDropDownIcon />}
                variant="outlined"
            >
                {months[selectedIndex]}
            </Button>
            <Menu open={Boolean(open)} onClick={closeMenu} anchorEl={open}>
                {months.map((lang, index) => (
                    <MenuItem onClick={() => setMonthIndex(index)}>{lang}</MenuItem>
                ))}
            </Menu>
            <div className="search_bar">
                <SearchIcon />
                <form>
                    <input />
                </form>
            </div>
        </div>
    )
}

export default Dashboard_header
