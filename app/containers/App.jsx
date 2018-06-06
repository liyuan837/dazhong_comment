import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo'

class App extends React.Component{
    constructor(props,context){
        super(props,context)
        //react性能优化
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            initDone:false
        }
    }

    componentDidMount(){
        //从localStorage中获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null){
            cityName = '深圳';
        }
        //将城市信息存储到 Redux 中
        this.props.userinfoActions.update({
            cityName:cityName
        })

        this.setState({
            initDone:true
        })

    }

    render(){
        return (
            <div>
                {
                    this.state.initDone
                    ?<div>{this.props.children}</div>
                        :<div className="loading">加载中...</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
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
)(App)