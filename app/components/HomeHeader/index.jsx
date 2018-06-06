import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link, hashHistory } from 'react-router'

import SearchInput from '../SearchInput'
/**
 * 首页搜索头部组件
 */
class HomeHeader extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

        this.state=({
            input:''
        })
    }

    render(){
        return(
            <div className="home-header clear-fix">
                <div className="home-header-left float-left">
                    <Link to='/city'>
                        {this.props.cityName}
                        <i className='icon-angle-down'></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to='/login'>
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <SearchInput value="" enterHandle={this.enterHandle.bind(this)}></SearchInput>
            </div>
        )
    }

    //键盘弹起监听
    enterHandle(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }

    //非约束性组件方式：DOM
    // handleChange(){
    //     const input = this.refs.input;
    //     console.log(input.value)
    // }
}

export default HomeHeader