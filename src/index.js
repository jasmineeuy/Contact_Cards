import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';


class ContactCard extends React.Component{
    render(){
       return(
       <div>
        <p class ="nametxt">{this.props.name} </p>
        <p><strong>Home Number:</strong> {this.props.num} </p>
        <p><strong>Work Number:</strong> {this.props.numb} </p>
        <p><strong>Email: </strong>{this.props.email} </p>
       </div>
       )
  }
}  

  
  
function App(){
    return(
        <div class = "main">
        <div class ="contact1">
            <ContactCard class="c1" name="May Sam" numb="(917)969-4564" num="1-888-980-9384" email="May.Sam@gmail.com"/>
        </div>
        <div class ="contact2">
            <ContactCard class ="c2"name="Juan Perez" numb="(914)858-5904" num="1-800-1234-1234" email="j.perez@gmail.com"/>
        </div>
        <div class="contact3">
            <ContactCard class="c3"name="Alessia Alex" numb="(914)324-4310" num ="1-878-9485-9384" email="A.Alex@gmail.com"/>
        </div>
        
      
    </div>
    )
};


  




   ReactDOM.render(
    <App/>,
     document.getElementById('root')
   );