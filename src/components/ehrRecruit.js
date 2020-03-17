import React, { Component } from 'react'
import RecruitPlatform from '../components/recruitplatfrom/platform'
import { Router, Route, Switch, routerRedux } from 'dva/router'

class EhrRecruit extends Component{
    render(){
        
        const {children} = this.props;
        console.log(children)
        return(
            <div>
                <RecruitPlatform history={this.props.history}/>    
                <div style={{background: '#fff', padding:0}}>
                    {children}
                </div>
            </div>
        )
    }
}

export default EhrRecruit;