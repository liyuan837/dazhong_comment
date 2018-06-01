import { combineReducers } from 'redux'

import userinfo from './userinfo'
//第一步：将所有计算规则进行汇总
const rootReducer = combineReducers({
    userinfo
})

export default rootReducer