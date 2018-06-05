import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";
import ReactSwipe from 'react-swipe';

/**
 * 三方轮播组件
 *
 轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
 即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
 */
class Category extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()

        this.state = {
            index:0
        }
    }

    render(){
        var opt = {
            auto:2000,
            callback:(index) => {
                this.setState({
                    index:index
                })
            }
        }
        return(
            <div className="carousel-box">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                            <li><img src="http://www.dyjkglass.com/qiangu.png" alt=""/><div>千古</div></li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="page">
                    <ul>
                        <li className={this.state.index == 0 ? "selected" : ''}></li>
                        <li className={this.state.index == 1 ? "selected" : ''}></li>
                        <li className={this.state.index == 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category