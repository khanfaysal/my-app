import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: 'khan',
    profession: 'React Developer'
  }
  var person2 = {
    name: 'faysal',
    profession: 'web-developer'
  }
  var style ={
    color: 'red',
    backgroundColor: 'lightblue'
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Boy</p>
        <h1 style = {style} >My Name is {person.name +' '+ person.profession}</h1>
        <h2 style = {{color: 'yellow' ,backgroundColor: 'gray'}} >My Alternative is {person2.name+' '+ person.profession}</h2>
        <p>My First React Code</p>
        <Person name = 'Karim' profession = 'Student' Mobile ='0147828273'></Person>
        <Person name = 'Lekhon' profession = 'Student' Mobile ='017474839'></Person>
        <Person name = 'Faysal' profession = 'React Developer' Mobile = '01748393'></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle = {
    border: '2px solid red',
    padding: '20px',
    margin: '20px'
  }
  console.log(props);
 return (
 <div style = {personStyle}>
   <h1>Name: {props.name}</h1>
   <h3>profession: {props.profession} </h3>
   <h3>Mobile: {props.Mobile} </h3>
 </div>
//   //  is one kind of apply styles in react
//  <div style={{border: '2px solid red',margin:'10px', padding: '20px'}}>
//    <h1>Name: sakib Khan</h1>
//    <h3>Name: Faysal Khan</h3>
//  </div>
 )      
}

export default App;
