import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Alert from '@material-ui/lab/Alert';


const Note = (props) => {

    const [Changes, setChanges] = useState({
        title: props.title,
        content: props.content,
    });

    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        if (Changes.content !== "" || Changes.title !== "") {
            props.updateData(Changes, props.id);
        }
        else{
            props.deleteItem(props.id);
        }
    };


    const onChangesEvent = (event) => {
        const { name, value } = event.target;

        setChanges((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        });
    };

    // const saveChanges = () =>{
    //     props.updateData(Changes,props.id);
    //     handleClose();

    // }

    return (
        <>
            <div className="note p-3 m-3">
                <div onClick={handleOpen} >
                    <h4>{props.title}</h4>
                    <br />
                    <p className="note-paragraph">{props.content}</p>
                </div>
                <div className="delete-container">
                    <IconButton onClick={deleteNote} title="Delete" className="delete-btn" ><DeleteOutlineIcon className="delete-icon" /></IconButton>
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="note-modal"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className="note-modal-body">
                        <form action="" className="note-modal-form h-100" >
                            <input
                                type="text"
                                name="title"
                                value={Changes.title}
                                onChange={onChangesEvent}
                                placeholder="Title"
                                autoComplete="off"
                            />
                            <hr />
                            <textarea
                                cols=""
                                rows=""
                                name="content"
                                value={Changes.content}
                                onChange={onChangesEvent}
                                placeholder="Take a note..."
                                className="h-100"
                            ></textarea>
                            <div className="d-flex justify-content-around mt-auto">
                                <IconButton onClick={deleteNote} title="Delete" ><DeleteOutlineIcon className="delete-icon" /></IconButton>
                                <Button onClick={handleClose} style={{ color: 'green' }}>
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </Fade>
            </Modal>

        </>
    );
};

export default Note;
