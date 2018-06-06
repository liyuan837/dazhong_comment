import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";
import ReactSwipe from 'react-swipe';
import { Link, hashHistory } from 'react-router'

/**
 * 星级评价组件
 */
class Star extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

    }

    render(){
        return(
            <div className="star-box">
                {[1,2,3,4,5].map( (item,index) => {
                    const starClass = item > this.props.num ? 'icon-star' : 'icon-star light'
                    return <i key={index} className={starClass}></i>
                })}
                {/*<i className={this.props.num > 0 ? 'icon-star light' : 'icon-star'}></i>*/}
                {/*<i className={this.props.num > 1 ? 'icon-star light' : 'icon-star'}></i>*/}
                {/*<i className={this.props.num > 2 ? 'icon-star light' : 'icon-star'}></i>*/}
                {/*<i className={this.props.num > 3 ? 'icon-star light' : 'icon-star'}></i>*/}
                {/*<i className={this.props.num > 4 ? 'icon-star light' : 'icon-star'}></i>*/}
            </div>
        )
    }
}

export default Star