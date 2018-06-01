import React from 'react'

import post from '../../fetch/post'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }

    handleChange(e){
        if(e.target.name === "username"){
            this.setState({
                username:e.target.value
            })
            return;
        }

        if(e.target.name === "password"){
            this.setState({
                password:e.target.value
            })
            return
        }
    }
    login(){
        var result = post("http://localhost:8081/jwt/login")
        result.then(res => {
            return res.text();
        }).then( token => {
            console.log(token)
        })
    }

    render(){
        return (
            <div style={{'textAlign':'center','marginTop':'100px'}}>
                用户登录<br/>
                <p><input name="username" type="text" placeholder="请输入用户名" value={this.state.username} onChange={this.handleChange.bind(this)}/></p>
                <p><input name="password" type="password" placeholder="请输入密码" value={this.state.password} onChange={this.handleChange.bind(this)}/></p>
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
}

export default Login