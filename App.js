import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './contact.js';
class App extends Component {
	foo(){
  return <h2>Contacts</h2>
};
render() {
	const a = [
	{name:'Venera',surname:'Poghosyan', img:'https://i.pinimg.com/originals/27/a1/35/27a1357faef0665b5ec4059d46b674cc.jpg', mail:'poghosyanvenera@gmail.com', tel:'+3747752868'}
	
	];
  return (
    <div className="App">
	<div className="contacts">
	{a.map(i => <Contact img={i.img} name={i.name} surname={i.surname} mail={i.mail} tel={i.tel} key={i.name} />)}
	</div>
    </div>
	
  );
}
}

export default App;