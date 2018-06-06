import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link, hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

/**
 * 搜索页搜索头部组件
 */
class SearchHeader extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        return(
            <div className="search-header clear-fix">
                <div className="search-header-left float-left">
                    <i className='icon-chevron-left' onClick={this.back.bind(this)}></i>
                </div>
                <SearchInput value={this.props.defaultValue} enterHandle={this.enterHandle.bind(this)}></SearchInput>
            </div>
        )
    }


    //键盘弹起监听
    enterHandle(value){
        if(!this.props.type){
            hashHistory.push('/search/all/' + encodeURIComponent(value))
        }else{
            hashHistory.push('/search/'+this.props.type+'/' + encodeURIComponent(value))
        }

    }

    //返回事件监听
    back(){
        window.history.back()
    }
}

export default SearchHeader