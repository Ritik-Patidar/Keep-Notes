import React from "react";
import Note from "./Note";

const Notescontainer = (props) =>{

    const onDelete = (id) =>{
        props.deleteNote(id);
    };

    const update = (Changes,id) =>{
        props.makeChanges(Changes,id);
    }

    return(
        <div className="container-fluid mt-5 notes-container">
            {props.allNotes.map((val,index)=>{
                return( <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                    updateData={update}
                />
                );
            })}
        </div>
    );
};

export default Notescontainer