import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";

import './style.less'

import {Link} from 'react-router'

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
            <li className='clear-fix shop-item'>
                <Link to={"/detail/" + item.id}>
                    <div className="float-left shop-header-box">
                        <img src={item.img} alt={item.title}/>
                    </div>
                    <div className='float-right shop-desc-box'>
                        <div className='line-1'>
                            <span className='title'>{item.title}</span>
                            <span className='distance'>{item.distance}</span>
                        </div>
                        <p className='line-2'>{item.subTitle}</p>
                        <div className='line-3'>
                            <span className='price'>￥{item.price}</span>
                            <span className='mumber'>已售{item.mumber}</span>
                        </div>
                    </div>
                </Link>
            </li>
        )
    }
}

export default Item