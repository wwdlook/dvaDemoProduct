import React, {Component} from 'react'
import {connect} from 'dva'

class BBB extends Component{
    render(){
        return (
            <div style={{marginTop:64}}>
               Clicked bbb tab， show bbb information
            </div>
        )
    }
}

BBB.propsType = {}
export default connect()(BBB)