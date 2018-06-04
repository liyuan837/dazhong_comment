import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";
import { connect } from 'react-redux'

import {get} from '../../../../fetch/get'

class Ad extends React.Component{
    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
        this.state = {
            initDone:false
        }
    }

    componentDidMount(){
        const result = get('/api/homead',)
        result.then((res) => {
            return res.json()
        }).then((json) => {
            console.log(json)
        })
    }

    render(){
        return (
            <div>
               ad
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
)(Ad)