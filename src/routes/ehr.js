import { Router, Route, Switch, routerRedux } from 'dva/router'
import { Component } from 'react'
import EhrLayout from '../components/ehrLayout';
import RecruitPlatform from '../components/recruitplatfrom/platform'
import BasicInfo from '../components/basicInfo/basic'


function EhrRoute({ history }) {
    return (
        <EhrLayout history={history}>
            <Switch>
                <Route exact path="/basic" component={BasicInfo} />
                    
                <Route path="/recruit">
                    <RecruitPlatform history={history}/>
                </Route>
            </Switch>
        </EhrLayout>
    );
  }
  
  export default EhrRoute;