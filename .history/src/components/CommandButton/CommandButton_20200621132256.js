import React from 'react';
import {Component} from 'react'
export default class CommandButton extends Component {

   constructor( props){
      super (props)
      this.state  = {
         test : [
            {username : 'test' ,  content : '廢物'},
            {username : 'test2' ,  content : '廢物'}
         ]
      }

   }
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}
