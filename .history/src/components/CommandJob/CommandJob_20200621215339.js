import React from 'react';
import { Component } from 'react'
import { Button } from 'antd';
import { withCookies, Cookies } from 'react-cookie';
import { withRouter } from "react-router-dom";
export
   class CommandJob extends Component {
   constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.sayHello = this.sayHello.bind(this);
      const { cookies } = props;
      this.state = {
         loginState: cookies.get('loginState')
      };
      //if (this.state.loginState == "" || this.state.loginState== null)
      console.log(this.state.loginState);
      console.log(this.props.params.name);
   }
   handleClick() {
      this.props.onHeaderClick(this.props.value);
   }

   //   handleClick(e) {
   //    console.log(this.props.value);

   //    e.preventDefault();

   //    console.log('The link was clicked.');
   //  }
   sayHello(name) {
      // alert(`hello, ${name}`);
      console.log(this.state.loginState);
      if (this.state.loginState == "" || this.state.loginState == undefined) {
         alert("login first!");
         this.props.history.push('/');
      }else
      console.log({ name });
   }
   render() {

      let objLists = []
      // [{id:'a',list:'打文章'},{id:'b',list:'寫程式'},{id:'c',list:'耍廢'}]
      for (let i = 0; i < 1; i++) {
         objLists.push({ id: 0, list: "finsh!"})
      }

      let lists = objLists.map((list) => <Button key={list.id} id={list.id} onClick={() => this.sayHello(list.list)} >{list.list}</Button>)

      return (
         <ul>
            {lists}
         </ul>
      );
   }
}
export default withRouter(withCookies(CommandJob));