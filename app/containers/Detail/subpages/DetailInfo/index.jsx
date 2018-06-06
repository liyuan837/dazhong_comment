import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import './style.less'

import Star from '../../../../components/Star'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const data = this.props.data

        return (
            <div className='detail-info-box'>
                <div className='detail-info clear-fix'>
                    <div className='detail-img float-left'><img src={data.img} alt=""/></div>
                    <div className='detail-msg float-right'>
                        <div className='title'>{data.title}</div>
                        <div className='detail-star'>
                            <Star num={data.star}></Star>
                            <span className='price'>￥{data.price}</span>
                        </div>
                        <div className='subTitle'>{data.subTitle}</div>
                    </div>
                </div>
                <div className='detail-desc' dangerouslySetInnerHTML={{__html: data.desc}}>
                </div>
            </div>
        )
    }
}

export default DetailInfo