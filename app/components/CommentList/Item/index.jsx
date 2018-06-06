import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";

import './style.less'

import Star from '../../Star'

/**
 * 列表项显示组件
 */
class Item extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        const item = this.props.item;
        return(
            <li className='clear-fix comment-item'>
                <div className='comment-user'>
                    <i className='icon-user'></i>
                    <span className='phone'>{item.username}</span>
                </div>
                <Star num={item.star}></Star>
                <div className='comment'>
                    {item.comment}
                </div>
            </li>
        )
    }
}

export default Item