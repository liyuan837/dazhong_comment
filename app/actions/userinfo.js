import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type:actionTypes.USERINFO_UPDATE,
        data
    }
}

//用户信息相关的action，包括登录
export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}
