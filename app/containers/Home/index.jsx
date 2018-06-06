import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { connect } from 'react-redux'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpages/Ad'
import List from './subpages/List'

class Home extends React.Component{
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
                <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
                <Category></Category>
                <Ad></Ad>
                <List cityName={this.props.userinfo.cityName}></List>
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

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)