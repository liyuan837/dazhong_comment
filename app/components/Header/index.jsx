import React from'react'

import './Header.less'

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                {this.props.titleName}
            </div>
        )
    }
}

export default Header