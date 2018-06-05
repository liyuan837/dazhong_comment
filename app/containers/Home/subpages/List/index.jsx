import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { connect } from 'react-redux'

import {get} from '../../../../fetch/get'

import ListComponent from '../../../../components/List'
import LoadMore from '../../../../components/LoadMore'

class List extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            hasMore:false,//是否还有数据可供加载
            data:[],//存储列表数据
            isLoadingMore:false,//记录当前状态下是否正在加载
            page:1//下一页的页码，从0开始
        }
    }

    componentWillMount(){
        this.mounted = true
    }

    componentWillUnmount(){
        this.mounted = false
    }

    componentDidMount(){
        //获取首页数据
       this.loadFirstPageData()
    }

    //获取首屏数据
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const result = get("/api/homelist/"+cityName+"/0")
        setTimeout( ()=>{
            this.resultHandle(result)
        },3000)
    }

    //加载更多数据
    loadMoreData(){
        //记录状态
        this.setState({
            isLoadingMore:true
        })
        const cityName = this.props.cityName;
        const page =this.state.page
        const result = get("/api/homelist/"+cityName+"/" + page)

        setTimeout( ()=>{
            this.resultHandle(result)
            this.setState({
                page:page + 1,
                isLoadingMore:false
            })
        },3000)

    }

    //数据处理函数
    resultHandle(result){
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            var hasMore = json.hasMore;
            var data = json.data

            if (data.length) {
                if(this.mounted){
                    this.setState({
                        hasMore:hasMore,
                        data: this.state.data.concat(data)
                    })
                }
            }

        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('猜你喜欢模块获取数据报错, ', ex.message)
            }
        })
    }

    render(){
        return (
            <div style={{'background':'#fff','marginTop':'10px'}}>
                <h2 className="home-title">猜你喜欢</h2>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}></ListComponent>
                        : <div className="loading">加载中...</div>
                }

                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}></LoadMore>
                        : ''
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
)(List)