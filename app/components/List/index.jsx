import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";

import './style.less'

import Item from './Item'

/**
 * 列表显示组件
 */
class List extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        const data = this.props.data;
        return(
            <div className="shop-box">
                <ul>
                    {data.map( (item,index)=> {
                        return(
                            <Item item={item} key={index}></Item>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List