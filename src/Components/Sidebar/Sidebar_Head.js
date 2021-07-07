import React from 'react'
import Logo from '../images/logo.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import "./Sidebar_Head.css"
import { Dialog, DialogContent, DialogTitle, TextField, Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    textField: {
        marginBottom: theme.spacing(2)
    },
    button: {
        position: 'relative',
        right: theme.spacing(-5),
        top: theme.spacing(1.3)
    }
}))

function Sidebar_Head() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
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
                <button onClick={handleClickOpen}><AddIcon /> Add New</button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Add New
                    </DialogTitle>
                    <DialogContent dividers>
                        <TextField className={classes.textField} color="secondary" variant="outlined" label="Your Name" placeholder="Write your name" />
                        <TextField type="file" variant="outlined" color="secondary" />
                        <Button
                            className={classes.button}
                            type="submit"
                            variant="contained"
                            color="secondary"
                            onClick={handleClose}
                        >Add More</Button>
                    </DialogContent>

                </Dialog>
            </div>

        </div>
    )
}

export default Sidebar_Head
