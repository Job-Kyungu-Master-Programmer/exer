
const Note = ( { items, update, deleting } ) => {
    const changeUpdate = items.pass ? <button style={{backgroundColor:'green',color:'white'}}>Passe de classe</button> 
    : <button  style={{backgroundColor:'orange',color:'white',}}>A echouer </button>
  return (
     <li
        style={{border: '1px solid #ccc' , width:'fit-content',padding: '5px 10px', margin: 20}}
      >
           <h3>{ items.name }</h3>
           <p>Pourcentage : <span> { items.points }  %</span></p>
           <span
           style={{position:'relative'}}
           onClick={update}> { changeUpdate } </span>
           <button onClick={deleting}>Supprimer</button>
     </li>
  )
}

export default Note