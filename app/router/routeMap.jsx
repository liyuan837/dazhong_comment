import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

import Login from '../containers/Login'

class RouteMap extends React.Component{
    updateHandle(){
        console.log("路由改变")
    }

    render(){
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="/city" component={City}></Route>
                    <Route path="/user" component={User}></Route>
                    <Route path="/search/:type(/:keyword)" component={Search}></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route path="/login(/:router)" component={Login}></Route>

                    <Route path="*" component={NotFound}></Route>
                </Route>
            </Router>
        )
    }
}
export default RouteMap