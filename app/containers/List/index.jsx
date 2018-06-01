import React from 'react'
import {hashHistory} from 'react-router'
import Header from '../../components/Header'
class List extends React.Component{
    render(){
        var list = [1,2,3];
        return (
            <div>
                <Header titleName="列表"></Header>
                <ul>
                    {list.map((item,index)=>{
                        return <li key={index} onClick={this.clickHandler.bind(this,item)}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }

    clickHandler(value) {
        hashHistory.push('/detail/'+value+"/liyuan")
    }
}

export default List