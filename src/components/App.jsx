import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Note from '../components/Note';
import notes from "../notes";

function App(){
    return (<div><Header></Header>
    {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
    <Footer></Footer> </div>);
}

export default App;