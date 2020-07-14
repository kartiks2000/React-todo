import React,{ useState } from 'react';
import './App.css';
import Input from './Input/Input';
import Note from './note/note';

function App() {

const [state,setstate] = useState([]);
const [btn,setbtn] = useState(false);

const add = (text) => {
  if(text < 1){
    alert("Please add a note...")
  }
  else{
    var z = [...state];
  z.push(text);
  setstate(z);
  setbtn(!btn);
  } 
}

const addanote = () => {
  setbtn(!btn);
}


// NOTE -: it could create problem when deletimg because i am using index as key which changes everytime and creates problems 

const deleteit = (id) => {
  var ixx ;
  var z = [...state];
   // eslint-disable-next-line
  z.map((i,index) => {
     // eslint-disable-next-line
    if(index == id)
    {
      ixx = index;
    }
  });
   // eslint-disable-next-line
  if(ixx==0)
  {
    z.shift();
    setstate(z);
  }
  else{
    z.splice(1,ixx);
    setstate(z);
  }
}

  return (
    <div className="App">
      <h1 className="heading">NOTES</h1>
      {!btn? <button onClick={addanote}>Add a Note...</button> : null}
      {btn? <Input addnote={(text) => add(text)}></Input> : null}
      {state.map((i,index) => {
        return <Note text={i} key={index} myid={index} deletenote={(id) => deleteit(id)}></Note>
      })}
    </div>
  );
}

export default App;
