import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";

/**
 * 首页搜索头部组件
 */
class HomeHeader extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        return(
            <div className="home-header clear-fix">
                <div className="home-header-left float-left">
                    {this.props.cityName}
                    <i className='icon-angle-down'></i>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <i className="icon-search"></i>
                    <input type="text" placeholder="请输入关键字"/>
                </div>
            </div>
        )
    }
}

export default HomeHeader