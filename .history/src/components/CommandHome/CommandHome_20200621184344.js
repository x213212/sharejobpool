import React from 'react';
import { Component } from 'react'
import { Button } from 'antd';
export default class CommandHome extends Component {
   constructor(props) {
      super(props)
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

// log({ name });
   
   handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
   render() {

      // let objLists = []
      // [{id:'a',list:'打文章'},{id:'b',list:'寫程式'},{id:'c',list:'耍廢'}]
      // for (let i = 0; i < 10; i++) {
      //    objLists.push({ id: i, list: i + "test" })
      // }

      // let lists = objLists.map((list) => <Button key={list.id} id={list.id} onClick={() => this.sayHello(list.list)} >{list.list}</Button>)

      return (
         // <ul>
         // {lists}
         // </ul>
         <div>
            <form onSubmit={this.handleSubmit}>
               <label>
                  Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
               </label>
               <input type="submit" value="Submit" />
            </form>
         </div>
      );
   }
}
