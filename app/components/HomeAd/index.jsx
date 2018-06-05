import React from 'react'
import './style.less'
import PureRenderMixin from "react-addons-pure-render-mixin";

/**
 * 首页超级特惠组件
 */
class HomeAd extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    render(){
        return(
           <div className="home-ad">
               <ul>
                   {this.props.data.map( (item,index)=> {
                       return (<li key={index}>
                           <p>{item.title}</p>
                           <img src="http://www.dyjkglass.com/qiangu.png" alt={item.title}/>
                       </li>)
                   })}
               </ul>
           </div>
        )
    }
}

export default HomeAd