import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";


/**
 * 登录组件
 */
class LoginComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state={
            username:'',
            code:''
        }
    }

    changeHandle(e) {
        if(e.target.name=='username'){
            this.setState({
                username:e.target.value
            })
        }else
            if(e.target.name=='code'){
                this.setState({
                    code:e.target.value
                })
            }
    }



    render(){
        return(
            <div className="login-box">
                <div className='login-phone'>
                    <i className='icon-tablet'></i>
                    <input name='username' value={this.state.username} type="text" placeholder='输入手机号' onChange={this.changeHandle.bind(this)}/>
                </div>
                <div className='login-code'>
                    <i className='icon-key'></i>
                    <input name='code' value={this.state.code} type="text" placeholder='输入验证码' onChange={this.changeHandle.bind(this)}/>
                    <span className='float-right'>发送验证码</span>
                </div>
                <a href='javascript:void(0)' onClick={this.loginHandle.bind(this)}>登录</a>
            </div>
        )
    }

    loginHandle(){
        const loginHandle = this.props.loginHandle;
        loginHandle(this.state.username)
    }
}

export default LoginComponent