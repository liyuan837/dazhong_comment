import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import App from '../containers/App'
import List from '../containers/List'
import Detail from '../containers/Detail'
import Hello from '../containers/Hello'
import NotFound from '../containers/NotFound'
import  Setting from '../containers/Setting'
import  Login from '../containers/Login'

class RouteMap extends React.Component{
    updateHandle(){
        console.log("每次router变化之后触发")
    }

    render(){
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                {/*Route可以嵌套,这里将/映射到App组件上，然后App组件路由下有包含多个子路由，这里的App组件相当于一个路由容器*/}
                <Route path='/' component={App}>
                    <IndexRoute component={Hello}></IndexRoute>
                    <Route path="list" component={List}></Route>
                    <Route path="detail/:id/:type" component={Detail}></Route>

                    <Route path="setting" component={Setting}>
                        <IndexRoute component={Login}></IndexRoute>
                    </Route>
                    <Route path="*" component={NotFound}></Route>
                </Route>
            </Router>
        )
    }
}
export default RouteMap