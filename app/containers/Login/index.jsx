import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'

import './style.less'

import Header from '../../components/Header'
import LoginComponent from '../../components/LoginComponent'

import * as userInfoActionsFormOtherFile from "@/actions/userinfo";

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking:true
        }
    }
    render() {
        return (
            <div>
                <Header title='登录'></Header>
                {
                    this.state.checking
                        ?<div className='loading'>等待中...</div>
                        :<LoginComponent loginHandle={this.loginHandle.bind(this)}></LoginComponent>

                }
            </div>
        )
    }

    componentDidMount(){
        this.doCheck();
    }

    doCheck(){
        const userinfo = this.props.userinfo
        if(userinfo.username){
            //已经登录
            this.goUserPage()
        }else{
            //尚未登录
            this.setState({
                checking:false
            })
        }
    }

    goUserPage(){
        hashHistory.push('/user')
    }

    //登陆成功之后的业务
    loginHandle(username){
        console.log(username)
        //保存用户名
        const actions = this.props.userinfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        //跳转链接
        const params = this.props.params
        const router = params.router
        if(router){
            //跳转到指定页面
            hashHistory.push(router)
        }else{
            //跳转至用户中心页面
            this.goUserPage()
        }
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions:bindActionCreators(userInfoActionsFormOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)