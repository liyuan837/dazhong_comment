import * as actionTypes from '../constants/userinfo'

const initialState = {}

//第一步：定义redux计算规则
export default function userinfo (state = initialState, action) {
    switch (action.type) {
        //获取城市信息
        case actionTypes.USERINFO_UPDATE:
            return action.data
        //登录
        case actionTypes.USERINFO_LOGIN:
            return action.data
        //修改城市
        case actionTypes.UPDATE_CITYNAME:
            return action.data
        default:
            return state
    }
}