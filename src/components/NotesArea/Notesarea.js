import React, { Component } from 'react'
import './Notesarea.css'
import NoteCreate from './NoteCreate/NoteCreate'
import NotesContainer from './NotesContainer/NotesContainer'

class Notesarea extends Component {
    render() {
        return (
            <div>
                <div className="notesarea">
                    <NoteCreate />
                </div>
                <NotesContainer />
            </div>
        )
    }
}

export default Notesarea
