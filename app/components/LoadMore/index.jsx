import React from 'react'
import ReactDom from 'react-dom'

import PureRenderMixin from "react-addons-pure-render-mixin";

import './style.less'

/**
 * 加载更多组件
 */
class LoadMore extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper
        // console.log(wrapper)
        let timeoutId
        function callback(){
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if(top && top < windowHeight){
                //当wrapper已经被滚动到被暴露在页面可视范围内的时候触发
                loadMoreFn()
            }
        }
        window.addEventListener('scroll',function(){
            //如果正在加载，则不作处理
            if(this.props.isLoadingMore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50)
        }.bind(this),false)
    }

    render(){
        return(
           <div className='load-more' ref='wrapper'>
               {
                   this.props.isLoadingMore
                   ?<span>加载中...</span>
                    :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
               }
           </div>
        )
    }

    loadMoreHandle(){
        //执行传递过来的loadMoreData函数
        this.props.loadMoreFn()
    }
}

export default LoadMore