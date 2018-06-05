import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import './style.less'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'

class City extends React.Component{
    constructor(props,context){
        super(props,context)
        //react性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            initDone:false
        }
    }

    render(){
        return (
            <div>
                <Header title='选择城市'></Header>
                <CurrentCity cityName='this.props.userinfo.cityName'></CurrentCity>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions:bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)