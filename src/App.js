import React from 'react';
import ReactDOM from'react-dom';

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <h1></h1>


     
    </div>
  );
}*/

class ContactCard extends React.Component{
  render(){
     return<h1>Hello,{this.props.name}</h1>;
  }
}

const element =<ContactCard name ="May" />;



ReactDOM.render(
  element,
  document.getElementById('root')
);



 
//export default App;


