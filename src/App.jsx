import React, { useState } from "react";
import './App.css' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header' ; 
import Footer from './Footer' ; 
import CreateNote from "./CreateNote";
import Notescontainer from "./Notescontainer";


const App = () => {
  const [addItem,setAddItem] = useState([]);

  const addNote = (note) =>{
    setAddItem((prev) =>{
      return [...prev,note] ;
    });

  };

  const onDelete = (id) =>{
    setAddItem((prevData)=>
      prevData.filter((currdata,index)=>{
        return index !== id ;
      })
    );
  };

  const makeChange = (Changes,id) =>{
    console.log(Changes);
    addItem[id] = Changes ;

    setAddItem((prev) =>{
      return [...prev] ;
    });
      
  };

  return<>
      <Header />
      <CreateNote passNote={addNote} />
      <Notescontainer allNotes={addItem}  deleteNote={onDelete} makeChanges={makeChange}/>
      {/* <Footer /> */}
    </>
};

export default App ;