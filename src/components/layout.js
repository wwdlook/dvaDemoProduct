import React, { Component } from 'react'
import {connect} from 'dva';
import Ehr from '../components/ehrheader'
import EhrFooter from '../components/ehrfooter'

class Layout extends Component{
    render(){
        console.log(this.props);
        const {children} = this.props;
        return(
            <div>
                <EhrFooter />
                <div style={{background: '#fff', padding: 24}}>
                    {children}
                </div>
            </div>
        )
    }
}

export default Layout;