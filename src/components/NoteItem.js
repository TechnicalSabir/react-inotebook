import React, { useContext } from 'react';
import Notecontext from '../context/notes/NoteContext';


const NoteItem = (props) => {
    const context = useContext(Notecontext)
    const { deleteNote } = context;
    const { note, updateNote, alert } = props;

    return (
        <div className="col-sm-6 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-trash-alt mx-2" onClick={() => {deleteNote(note._id); alert('Note deleted successfully', 'success')}}></i>
                    <i className="fas fa-edit mx-2" onClick={() => {updateNote(note);}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;