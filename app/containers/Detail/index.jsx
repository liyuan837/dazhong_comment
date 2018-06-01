import React from 'react'
import Header from '../../components/Header'
import {Link} from 'react-router'

class Detail extends React.Component{
    render(){
        return (
            <div>
                <Header titleName="详情"></Header>
                detail {this.props.params.id} {this.props.params.type}
                <div>
                    <Link to='/setting'>登录</Link>
                </div>
            </div>
        )
    }
}

export default Detail