import React from 'react'
class Setting extends React.Component{
    render(){
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Setting