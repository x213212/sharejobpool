import React from 'react';
import {Component} from 'react'
import { Button } from 'antd';
export default class CommandButton extends Component {
   constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
   e.preventDefault();
   console.log(e);
   console.log('The link was clicked.');
 }
   render() {
   
      let arrLists = ['打文章','寫程式','耍廢']

     let lists = arrLists.map((list) => <Button onClick={this.handleClick}>{arrLists[i]}</Button>)


      return (
         <ul>
         {lists}
         </ul>
      );
   }
}
