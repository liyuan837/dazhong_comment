import React from "react";
import Header from '../../components/Header'
import Carouse from './subpage/Carouse'
import {Link} from 'react-router'
import C from './subpage/C'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as userinfoActions from '../../actions/userinfo'

class Hello extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            now:Date.now()
        }
    }

    handleClick(e){
        console.log("as")
        this.setState({
            now:Date.now()
        })
    }

    componentDidMount(){
        //模拟登陆
        /**
         * 1、这边调用action方法，传值；
         * 2、然后会到规则（rootReducer）中去找userinfo的login方法；
         * 3、再到本组件的mapStateToProps方法中，将login返回的值注册到组件的props属性中，进而触发页面更新
         */
        this.props.userinfoActions.login({
            userid:'liyuan',
            city:'北京'
        })
    }

    changeState(){
        this.props.userinfoActions.login({
            userid:'王昭君',
            city:'洛阳'
        })
    }

    render(){
        return (
            <div>
                <Header titleName="Hello"></Header>
                <Carouse></Carouse>
                <p>{this.state.now}</p>
                <a onClick={this.handleClick.bind(this)}>点我q</a>
                <br/>
                <Link to="/list">to list</Link>


                <p>{this.props.userinfo.userid}</p>
                <p>{this.props.userinfo.city}</p>
                <C actions={this.props.userinfoActions}></C>

                <button onClick={this.changeState.bind(this)}>我自己改</button>


            </div>
        )
    }
}

//这样的话，本函数返回的userinfo就会变成Hello组件的一个props属性
function mapStateToProps(state){
    //这里的state就是rootReducer中定义的state
    return{
        userinfo:state.userinfo
    }
}

//第四步：绑定，将触发数据变化方法(action)绑定到组件中，作为组件的一个props属性
function mapDispatchToProps(dispatch){
    return{
        userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)