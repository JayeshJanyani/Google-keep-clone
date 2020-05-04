import React, { useState } from 'react'
import './NoteCreate.css'
import firebase from '../../../firebase'
import TextareaAutosize from 'react-autosize-textarea';

function NoteCreate() {
    const [isEditable, setisEditable] = useState(false)
    const [title, settitle] = useState('')
    const [notes, setnotes] = useState('')

    const handleSubmitClose = () => {
        console.log('submitClose')
        if (title !== '' || notes !== '') {
            firebase.database().ref('notes').push(createNotes())
                .then(() => {
                    console.log('notes added')
                    setisEditable(false)
                    setnotes('')
                    settitle('')
                })
                .catch(error => {
                    console.log(error)
                })
        }
        else {
            setisEditable(false)
        }
    }

    const createNotes = () => {
        const note = {
            timeStamp: firebase.database.ServerValue.TIMESTAMP,
            title,
            notes
        }
        return note
    }

    return (
        <>
            {isEditable ? (
                <div className="notesCreatefield">
                    <input className="title" name="title" type="text" value={title} placeholder="Title" onChange={e => settitle(e.target.value)}></input>
                    {/* <input className="noteArea" name="notes" value={notes} type="text" placeholder="Take a note" onChange={e=> setnotes(e.target.value)}></input> */}
                    <TextareaAutosize style={{ paddingTop: '11px', resize: 'none' }} 
                    className="noteArea" rows={1} placeholder="Take a note"
                    maxlength="19999" maxRows={10} onChange={e => setnotes(e.target.value)} />
                    <div>
                        <button className="close-btn" onClick={handleSubmitClose}>Close</button>
                    </div>
                </div >

            ) : (
                    <div className="notesShowfield">
                        <input className="noteArea" value='' type="text" placeholder="Take a note" onClick={() => setisEditable(true)}></input>
                    </div>
                )
            }
        </>
    )
}

export default NoteCreate
