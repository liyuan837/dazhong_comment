import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import './style.less'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'

import {hashHistory} from 'react-router'

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
            <div className="city">
                <Header title='选择城市'></Header>
                <CurrentCity cityName={this.props.userinfo.cityName}></CurrentCity>
                <CityList defaultCity={this.props.userinfo.cityName} changeCityFn={this.changeCity.bind(this)}></CityList>
            </div>
        )
    }

    changeCity(newCity){
        if(newCity == null){
            return
        }
        //修改 redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userinfoActions.update(userinfo)

        //修改 localstorage
        LocalStore.setItem(CITYNAME,newCity)

        //跳转至首页
        hashHistory.push('/')
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