import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CommentListComponent from '../../../../components/CommentList'
import LoadMore from '../../../../components/LoadMore'

import './style.less'
import {get} from '../../../../fetch/get'

class CommentList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            hasMore:false,
            isLoadingMore:false,
            page:0,
            data:[]
        }
    }

    render() {
        return (
            <div className='comment-box'>
               <h1>用户评价</h1>
                {
                    this.state.data.length > 0
                    ? <CommentListComponent data={this.state.data}></CommentListComponent>
                        :<div className='loading'>加载中...</div>
                }

                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}></LoadMore>
                        :''
                }
            </div>
        )
    }

    componentDidMount(){
        this.loadFirstPageData()
    }

    loadFirstPageData(){
        const id = this.props.id;
        const result = get('/api/detail/comment/0/'+id)
        setTimeout(()=>{
            this.resultData(result)
        },3000)
    }

    loadMoreData(){
        const id = this.props.id
        const result = get('/api/detail/comment/'+this.state.page + "/"+id)
        setTimeout(()=>{
            this.resultData(result)
        },3000)
    }

    resultData(result){
        result.then( (res)=>{
            return res.json()
        }).then((json)=>{
            const hasMore = json.hasMore;
            const data = json.data
            if(data.length > 0){
                this.setState({
                    hasMore:hasMore,
                    data:this.state.data.concat(data),
                    page:this.state.page + 1
                })
            }
        }).catch(ex => {
            // 发生错误
            if (__DEV__) {
                console.error('用户评价模块获取数据报错, ', ex.message)
            }
        })
    }
}

export default CommentList