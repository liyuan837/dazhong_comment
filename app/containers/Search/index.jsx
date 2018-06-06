import React from 'react'
import PureRenderMixin from "react-addons-pure-render-mixin";

import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpages/List'

class Search extends React.Component{

    constructor(props,context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate()
    }

    componentDidMount(){
    }

    render(){
        const params = this.props.params;
        console.log(params.type)
        return (
            <div>
                <SearchHeader defaultValue={params.keyword} type={params.type}></SearchHeader>
                <SearchList keyword={params.keyword} type={params.type}></SearchList>
            </div>
        )
    }
}
export default Search