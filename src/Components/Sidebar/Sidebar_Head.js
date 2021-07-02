import React from 'react'
import Logo from '../images/logo.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import "./Sidebar_Head.css"

function Sidebar_Head() {
    return (
        <div className="head_body">
            <div className="logo">
                <img src={Logo} />
                <button>Purple Box, Delhi < ExpandMoreIcon /></button>
                <small>Professional plan</small>
            </div>
            <div className="User">
                <img src={Logo} />
                <button>Neha Choudhary <  ArrowForwardIosIcon /></button>
                <small>Operations Manager</small>
            </div>
            <div className="button">
               <button><AddIcon/> Add New</button>
            </div>

        </div>
    )
}

export default Sidebar_Head
