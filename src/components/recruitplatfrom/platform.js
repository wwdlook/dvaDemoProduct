import { NavBar,Icon, Flex, Tabs, WhiteSpace, Badge, ListView  } from 'antd-mobile';
import {Component} from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';


class RecruitPlatform extends Component{
    constructor(props) {
        super(props);
        this.queryData();
        
      }
    
    queryData(){
        console.log('start dispatch')
        const { dispatch } = this.props;
        dispatch({
                    type: 'recruitTasks/queryData', 
                }
        );
    }

    queryDetail(params,sectionName,EmpId){
        console.log('start dispatch')
        const { dispatch } = this.props;
        dispatch({
                    type: 'recruitDetails/queryData', 
                    payload:  {
                    "index" : 0,
                    "vacancyid" : params.vacancyId,
                    "candidateid" : params.candidateId,
                    "jobname" : sectionName,
                    "status" : params.status,
                    "curstate" : params.statusId,
                    "empname" : params.empName,
                    "empid" : EmpId
                },
                }
        );
        console.log('end dispatch')
    }

    // queryRecords(params){
    //     console.log('start dispatch')
    //     console.log(params);
    //     const { dispatch } = this.props;
    //     dispatch({
    //                 type: 'recruitAppRecords/queryData', 
    //                 payload:  {
    //                 "VacancyId" : params.vacancyId,
    //                 "CandidateId" : params.candidateId,
    //                 "name" : params.BasicData.username,
    //                 "email" : params.BasicData.email,
    //                 "cell" : params.BasicData.mobilephone
    //                 },
    //             }
    //     );
    // }

    componentDidMount(){
        this.queryData();
    }

    handleNavbar(todoCount){
        const {pathname} = this.props.history.location;
        const pathnameArr = pathname.split('/');
        const len = pathnameArr.length;
        const lastSplit = pathnameArr[len-1];
        let result = [];
        let NavEle=(
                    <div style={{position:"fixed",width:"100%",top:"0",left:"0",height:"45px",zIndex:"99"}}>
                    <NavBar
                        mode="dark"                    
                        >招聘工作台
                    </NavBar>
                    </div>
        );
        let tabs = [
            { title: <Badge text={todoCount?todoCount:''}>待办事项</Badge>,
              key: '/recruit'
            },
            { title: <Badge text={''}>已办事项</Badge>,
              key: '/recruit/finished'},
        ]
        const TabsEle=(
            <div style={{position:"fixed",width:"100%",top:"45px",left:"0",zIndex:"99"}}>
            <Tabs 
            tabs={tabs}
            initialPage={0}
            onChange={(tab) => { this.props.history.push(tab.key); }}
            onTabClick={(tab) => { this.props.history.push(tab.key);}}
            >
            </Tabs>
            </div>
        )
        if((lastSplit === 'recruit')||(lastSplit === 'finished')){
            result.push(NavEle);
            result.push(TabsEle);
        }else{
            NavEle = (
                <div style={{position:"fixed",width:"100%",top:"0",left:"0",height:"45px",zIndex:"99"}}>
                <NavBar
                    mode="dark"                    
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.push("/recruit")}
                    >候选人详细信息
                </NavBar>
                </div>
            );
            result.push(NavEle);
            
        }
        

        return result;
    }

    handleError(){
        const {status} = this.props.RecruitPlatform;

    }

    render(){
        console.log(this.props);
        let todoCountInit="";
        try{
            const {todoCount} = this.props.recruitTasks.data;
            todoCountInit = todoCount
        }catch(error){
            todoCountInit = "";
        }


        return(
            
            <div>
                {this.handleNavbar(todoCountInit)}
                {this.props.children} 
            </div>
        )
    }
}

RecruitPlatform.propTypes = {
};

export default withRouter(connect(({loading,recruitTasks})=>({
    loadingAll:loading.models.recruitTasks,
    //当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
    loadingList:loading.effects['recruitTasks/queryData'],
    //当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
    recruitTasks:recruitTasks,
}))(RecruitPlatform));