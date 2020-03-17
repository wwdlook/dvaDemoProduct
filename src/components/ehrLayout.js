import React, { Component } from 'react'
import {connect} from 'dva';
import {NavBar} from 'antd-mobile'
import EhrFooter from '../components/ehrfooter'
import { Router, Route, Switch, routerRedux } from 'dva/router'


class EhrLayout extends Component{
    render(){

        const {children,history} = this.props;
        console.log(history.location.pathname)
        return(
            <div>
                
                <div style={{background: '#fff', padding:0}}>
                    {children}
                </div>
                <EhrFooter history={this.props.history}/>
                
            </div>
        )
    }
}

export default EhrLayout;