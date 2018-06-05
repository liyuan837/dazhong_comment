import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";


/**
 * 当前城市组件
 */
class CurrentCity extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        return(
            <div className="current-city">
               <span>{this.props.cityName}</span>
            </div>
        )
    }
}

export default CurrentCity