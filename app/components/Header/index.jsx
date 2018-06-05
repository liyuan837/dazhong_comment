import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";


/**
 * 头部组件
 */
class Header extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        return(
            <div className="header">
                <i className="icon-chevron-left" onClick={this.back.bind(this)}></i>
                <span className='header-title'>{this.props.title}</span>
            </div>
        )
    }

    back(){
        window.history.go(-1)
    }
}

export default Header