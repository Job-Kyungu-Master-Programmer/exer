import React, { useEffect, useState } from "react";
import Note from './components/Note'
import Base from './Base'
import Noti from "./Noti";

const App = () => {
    const [notes , setNotes] = useState([])
    const [name, setName] = useState('')
    const [points, setPoints] = useState('')
    const [pass, setPass] = useState(true)
    const [notifi, setNotifi] = useState(null)

    useEffect(() => {
         Base.getAll()
         .then(infos => setNotes(infos))
    },[])
    

    const addNote = (e) => {
         e.preventDefault();
         if(points < 20) {
             setNotifi(`C'est point ${points}, n'est pas acceptable`)
             setTimeout(() => {
                 setNotifi(null)
             },2000)
             return null
         }else { 
            const Etudiant = {
                name : name,
                points: points,
                pass: Math.random() < 0.6,
                // id: notes.length + 1
            }
             
            Base.posh(Etudiant)
            .then(infos => setNotes(notes.concat(infos)))
                setName('')
                setPoints('')
          }
        }

     const updating = (id) => {
         const notesTab = notes.find(note => note.id === id)
         const changeTab = {...notesTab, pass : !notesTab.pass}
         Base.update(id,changeTab)
         .then(infos => {
            setNotes(notes.map(note => note.id !== id  ? note : infos))
         })
     }

     const onDelete = (id) => {
        const notesTab = notes.filter(note => note.id !== id)
        Base.delet(id, notesTab)
        .then(infos => {
            setNotes(notes.map(note => note.id !== id ? note : infos))
            setNotes(notes.filter(note => note.id !== id))
        })
     }


     return (
         <div>
              <h1>Notes Etudiants</h1>
              <form onSubmit={addNote}>
                 <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Etudiant .." />
                 <input value={points} onChange={(e) => setPoints(e.target.value)} placeholder="Entrez les points 40 $..." />
                 <button>ajouter un etudiant</button>
              </form>
              <ul style={{display:'flex', flexWrap:'wrap'}}>
                 {notes.map(item => 
                     <Note key={item.id} items={item}
                      update={() => updating(item.id)}
                      deleting={() => onDelete(item.id)}
                     />  
                  )}
              </ul>
            <Noti message={notifi} />
         </div>
     )
}

export default App