import React from 'react'

import Header from '../../components/Header'
import DetailInfo from './subpages/DetailInfo'
import CommentList from './subpages/CommentList'

import {get} from '../../fetch/get'
import PureRenderMixin from "react-addons-pure-render-mixin";

class Detail extends React.Component{

    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            initDone:false,
            data:{}
        }
    }

    componentDidMount(){
        const id = this.props.params.id

        const result = get('/api/detail/info/'+id)
        setTimeout(()=>{
            this.resultData(result)
        },3000)
    }

    resultData(result){
        result.then( (res) => {
            return res.json()
        }).then( (json)=> {
            this.setState({
                initDone:true,
                data:json
            })
        })
    }

    render(){
        return (
            <div>
                <Header title="商户详情"></Header>
                {
                    this.state.initDone
                    ?<DetailInfo data={this.state.data}></DetailInfo>
                        :<div className="loading">加载中...</div>
                }
                <CommentList id={this.props.params.id}></CommentList>
            </div>
        )
    }
}
export default Detail