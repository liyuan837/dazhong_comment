import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { connect } from 'react-redux'

import {get} from '../../../../fetch/get'

import HomeAd from '../../../../components/HomeAd'
import './style.less'

class Ad extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            initDone:false,
            data:[]
        }
    }

    componentWillMount(){
        this.mounted = true
    }

    componentWillUnmount(){
        this.mounted = false
    }

    componentDidMount(){
        // 获取广告数据
        const result = get("/api/homead")
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json

            setTimeout( ()=>{
                if (data.length) {
                   if(this.mounted){
                       this.setState({
                           data: data
                       })
                   }
                }
            },3000)

        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
        })
    }



    render(){
        return (
            <div style={{'background':'#fff','marginTop':'10px'}}>
                <h2 className="home-title">超值特惠</h2>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data}></HomeAd>
                        : <div className="loading">加载中...</div>
                }
            </div>
        )
    }

}
function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ad)