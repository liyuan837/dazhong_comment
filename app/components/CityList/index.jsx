import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";


/**
 * 城市列表组件
 */
class CityList extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    clickHandle(cityName){
        const changeCityFn = this.props.changeCityFn
        changeCityFn(cityName)
    }

    render(){
        return(
            <div className="city-list">
                <p>热门城市</p>
                    <ul>
                        <li className={this.props.defaultCity == '南京'? "selected":''} onClick={this.clickHandle.bind(this,'南京')}>南京</li>
                        <li className={this.props.defaultCity == '深圳'? "selected":''} onClick={this.clickHandle.bind(this,'深圳')}>深圳</li>
                        <li className={this.props.defaultCity == '北京'? "selected":''} onClick={this.clickHandle.bind(this,'北京')}>北京</li>
                        <li className={this.props.defaultCity == '天津'? "selected":''} onClick={this.clickHandle.bind(this,'天津')}>天津</li>
                        <li className={this.props.defaultCity == '上海'? "selected":''} onClick={this.clickHandle.bind(this,'上海')}>上海</li>
                        <li className={this.props.defaultCity == '重庆'? "selected":''} onClick={this.clickHandle.bind(this,'重庆')}>重庆</li>
                        <li className={this.props.defaultCity == '南通'? "selected":''} onClick={this.clickHandle.bind(this,'南通')}>南通</li>
                        <li className={this.props.defaultCity == '广州'? "selected":''} onClick={this.clickHandle.bind(this,'广州')}>广州</li>
                        <li className={this.props.defaultCity == '西安'? "selected":''} onClick={this.clickHandle.bind(this,'西安')}>西安</li>
                    </ul>
            </div>
        )
    }
}

export default CityList