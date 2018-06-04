import React from 'react'

class Detail extends React.Component{
    render(){
        return (
            <div>
                Detail{this.props.params.id}
            </div>
        )
    }
}
export default Detail