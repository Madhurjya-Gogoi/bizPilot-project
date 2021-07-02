import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Logo from '../images/logo.jpg'
import "./Sidebar_bottom.css"

function Sidebar_bottom() {
    return (
        <div className="sidebar_bottom">
            <div>
                <h6>Drag and Drop</h6>
            </div>

            <div className="User">
                <img src={Logo} />
                <button>Barkha Khandelwel <  ArrowForwardIosIcon /></button>
                <small style={{color:"red"}}>Actions Required (2)</small>
            </div>

        </div>
    )
}

export default Sidebar_bottom
