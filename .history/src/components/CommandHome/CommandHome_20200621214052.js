import React from 'react';
import { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
// cookie.load('userId')
// cookie.save('userId', userId, { path: '/' });
// cookie.remove('userId', { path: '/' });

 const layout = {
   labelCol: { span: 8 },
   wrapperCol: { span: 16 },
 };
 const tailLayout = {
   wrapperCol: { offset: 8, span: 16 },
 };
export  class CommandHome extends Component {

   constructor(props) {
      super(props)
      this.state = {value: ''};
   
      this.onFinish = this.onFinish.bind(this);
      this.onFinishFailed = this.onFinishFailed.bind(this);
      const { cookies } = props;
      this.state = {
     //   name: cookies.get('name') || 'Ben'
      };
   }

// log({ name });
   
   onFinish(event) {
      const { cookies } = this.props;
      console.log('Success:', event);
      this.props.history.push('/jobpool');
      cookies.set('loginState', "login", { path: '/' });
      // let history = useHistory();
      // history.push('/');
      // const history = useHistory();
   
      // history.push("/home");
  
      // this.setState({value: event.target.value});
      //  const history = useHistory();

      //  history.push("/home");
    }
  
    onFinishFailed(event) {
      //alert('A name was submitted: ' + this.state.value);
      console.log('Failed:', event);
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
         <Form
           {...layout}
           name="basic"
           initialValues={{ remember: true }}
           onFinish={this.onFinish}
           onFinishFailed={this.onFinishFailed}
         >
           <Form.Item
             label="Username"
             name="username"
             rules={[{ required: true, message: 'Please input your username!' }]}
           >
             <Input />
           </Form.Item>
     
           <Form.Item
             label="Password"
             name="password"
             rules={[{ required: true, message: 'Please input your password!' }]}
           >
             <Input.Password />
           </Form.Item>
     
           <Form.Item {...tailLayout} name="remember" valuePropName="checked">
             <Checkbox>Remember me</Checkbox>
           </Form.Item>
     
           <Form.Item {...tailLayout}>
             <Button type="primary" htmlType="submit">
               Submit
             </Button>
           </Form.Item>
         </Form>
       );
   }
}
export default withRouter(withCookies(CommandHome));