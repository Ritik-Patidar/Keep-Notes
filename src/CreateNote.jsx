import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const CreateNote = (props) => {
    const btnStyle = {
        color: "green",
        margin: "0.3rem 1rem",
    };

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) =>{
        
        const {name,value} = event.target ;

        setNote((prevData) =>{
            return{
                ...prevData,
                [name] : value,
            }
        })
    }

    const addEvent = () =>{
        if(note.content !== "" || note.title !== ""){
            props.passNote(note);
            setNote({
                title: "",
                content: "",
            });
        }
    };

    return (
        <div className="conatiner-lg d-flex justify-content-center mt-5">
            <form action="" className="create-note-input">
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    onChange={InputEvent}
                    placeholder="Title"
                    autoComplete="off"
                />
                <textarea
                    cols=""
                    rows=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    placeholder="Take a note..."
                ></textarea>
                <div className="d-flex justify-content-end">
                    <Button onClick={addEvent}  style={btnStyle} color="primary">
                        Done
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateNote;
