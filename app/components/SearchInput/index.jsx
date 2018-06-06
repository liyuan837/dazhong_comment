import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link, hashHistory } from 'react-router'


/**
 * 搜索输入组件
 */
class SearchInput extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

        this.state=({
            input:''
        })
    }

    componentDidMount() {
        // 默认值
        this.setState({
            input: this.props.value || ''
        })
    }

    render(){
        return(
                <div className="search-header-middle">
                    <i className="icon-search"></i>
                    <input type="search" placeholder="请输入关键字" ref='input'
                           value={this.state.input}
                           onChange={this.handleChange.bind(this)}
                           onKeyUp={this.keyUpHandle.bind(this)}
                    />
                </div>
        )
    }

    //约束性组件方式
    handleChange(e){
        const input = e.target.value
        this.setState({
            input : input
        })
    }

    //键盘弹起监听
    keyUpHandle(e){
        const enterHandle = this.props.enterHandle
        if(e.keyCode !== 13){
            return
        }
        enterHandle(e.target.value);
    }
}

export default SearchInput