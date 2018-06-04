import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'

import RouteMap from './router/routeMap'

//公共样式
import './static/css/common.less'
import './static/css/font.css'

import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

//性能测试
import Perf from 'react-addons-perf'
if(__DEV__){
    window.Perf = Perf
}


const store = configureStore()

render(
    //第三步：定义数据（即state）变化之后的派发规则
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)