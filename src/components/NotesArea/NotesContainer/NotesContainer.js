import React, { Component } from 'react'
import  './NotesContainer.css' 
import firebase from '../../../firebase'

class NotesContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             notesList:[]
        }
    }
    
    componentDidMount(){
        this.addNotesListener()
    }
    addNotesListener=()=>{
        firebase.database().ref('notes').on('child_added',snap=>{
           console.log(snap.val())
           this.setState({
               notesList: this.state.notesList.concat(snap.val())
           })
        })
    }

    render() {
        return (
            <div className="notesContainer">
                {this.state.notesList.map((item)=>(
                <div key={item.timestamp} style={{padding:'10px', breakInside:'avoid'}}>
                <div className="notesItemContainer">
                <div className="notesTitle"> {item.title}</div>
                {/* <span className="separator"></span> */}
                <div className="notesText" >{item.notes} </div>
                </div>
                </div>
                ))}
                
            </div>
        )
    }
}

export default NotesContainer
