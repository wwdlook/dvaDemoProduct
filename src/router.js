import React from 'react';
import { Router, Route, Switch, Navi } from 'dva/router';
import EhrLayout from './components/ehrLayout';
import RecruitPlatform from './components/recruitplatfrom/platform'
import BasicInfo from './components/basicInfo/basic'
import CvLayoutC from './components/recruitplatfrom/cvLayout'
import WaitingEasyC from "./components/recruitplatfrom/waitingEasy"
import FinishedEasyC from "./components/recruitplatfrom/finishedEasy"


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <EhrLayout history={history}>
            <Switch>
                <Route exact strict path="/" component={BasicInfo} />
                <Route path="/recruit" >
                  <RecruitPlatform history={history}>
                    <Switch>
                      <Route exact path="/recruit" component={WaitingEasyC}/>

                      <Route path="/recruit/finished" component={FinishedEasyC}/>

                      <Route path="/recruit/CV" component={CvLayoutC}/>
                      
                    </Switch>
                  </RecruitPlatform>
                </Route>
            </Switch>
      </EhrLayout>
    </Router>
  );
}

export default RouterConfig;

