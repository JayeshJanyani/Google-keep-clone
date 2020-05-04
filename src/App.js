import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appbar from './components/AppBar/Appbar.js'
import Notesarea from './components/NotesArea/Notesarea';

function App() {
  return (
    <div className="App">
      <Appbar/>
      <Notesarea/>
    </div>
  );
}

export default App;
