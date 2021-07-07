import React, { useCallback, useState } from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Logo from '../images/logo.jpg'
import "./Sidebar_bottom.css"
import { useDropzone } from 'react-dropzone'

function Sidebar_bottom() {
    const [uploadFile, setUploadFile] = useState([])
    console.log(uploadFile)
    const onDrop = useCallback(acceptedFiles => {
        setUploadFile(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    return (
        <div className="sidebar_bottom">
            <div {...getRootProps()} className="drag_drop ">
                <input {...getInputProps()} />
                <p>Drag and Drop</p>
            </div>
            <div className="User">
                <img src={Logo} />
                <button>Barkha Khandelwel <  ArrowForwardIosIcon /></button>
                <small style={{ color: "red" }}>Actions Required (2)</small>
            </div>
        </div>
    )
}

export default Sidebar_bottom
