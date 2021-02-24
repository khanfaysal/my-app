import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const PeopleArray = ['Barun', 'Rahim', 'Barim', 'Churim', 'Murim','juma'];
  const productList = [
    {name: 'Photoshop', price: '$59.99'},
    {name: 'Illustrator', price: '$45.99'},
    {name: 'Lightgroom', price: '$5.99'},
    {name: 'PDF Reader', price: '$3.99'},
    
  ];
//  const peopleNames = Array.from(PeopleArray);
//  console.log(peopleNames);
 
  // var person = {
  //   name: 'khan',
  //   profession: 'React Developer'
  // }
  // var person2 = {
  //   name: 'faysal',
  //   profession: 'web-developer'
  // }
  // var style ={
  //   color: 'red',
  //   backgroundColor: 'lightblue'
  // }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Boy</p>
        {/* <h1 style = {style} >My Name is {person.name +' '+ person.profession}</h1> */}
        {/* <h2 style = {{color: 'yellow' ,backgroundColor: 'gray'}} >My Alternative is {person2.name+' '+ person.profession}</h2> */}
        <p>My First React Code</p>
        <Counter></Counter>
        <ul>
          {
            PeopleArray.map(people =><li>{people}</li>)
          }
          {
            productList.map(productArra => <li>{productArra.name}</li>)
          }
          
        </ul>
        <ul>
          <li>{PeopleArray[0]}</li>
          <li>{PeopleArray[1]}</li>
          <li>{PeopleArray[2]}</li>
          <li>{PeopleArray[3]}</li>
        </ul>
        {/* dynamic for product work */}
        {
          productList.map(pd =><Products products = {pd}></Products>)
        }
        {/*  manually for product work */}
        {/* <Products products = {productList[0]}></Products>
        <Products products = {productList[1]}></Products>
        <Products products = {productList[2]}></Products>
        <Products products = {productList[3]}></Products> */}

        <Person name = {PeopleArray[0]} profession = 'Student' Mobile ='0147828273'></Person>
        <Person name = 'Lekhon' profession = 'Student' Mobile ='017474839'></Person>
        <Person name = 'Faysal' profession = 'React Developer' Mobile = '01748393'></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick = {() => setCount(count + 1)}>increase</button>
      <button onClick = {() =>setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Products(props){
  const ProductsStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name , price} = props.products ;
     console.log(name, price);
return (
  <div style={ProductsStyle}>
    <h2>{name}</h2>
    <h3>Price:{price}</h3>
    <button>Buy Now</button>
  </div>
)
}
function Person(props){
  const personStyle = {
    border: '2px solid red',
    padding: '20px',
    margin: '20px'
  }
  // console.log(props);
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
