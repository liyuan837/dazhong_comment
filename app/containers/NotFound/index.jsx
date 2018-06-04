import React from 'react'
import './error.css'
class NotFound extends React.Component{
    render(){
        return (
            <div>
                <div className="bg-box">
                    <p>您要找的页面丢失了！</p>
                </div>
            </div>
        )
    }
}
export default NotFound