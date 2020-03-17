import { Badge, ActivityIndicator, List, WhiteSpace, Toast } from 'antd-mobile';
import {Component} from 'react';
import { connect,loading } from 'dva';
require("./waitingEasy.css")

class WaitingEasyC extends Component{
    constructor(props) {
        super(props);
        //this.queryData();
        
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

    // componentDidMount(){
    //     this.queryData();
    // }

    handleSectionHeader(headerName){
        return(
            <div
                style={{
                        lineHeight: '50px',
                        color: '#FF6E27',
                        fontSize: 18
                        }}
          >
          {headerName}
          </div>
        )
    }

    handleRow(rowData,sectionName,EmpId){
        let result = [];
        for(let index=0;index<rowData.length;index++){
            const {status,duration,candidateName,exp,companyName,schoolname,education,specialty,department,position} = rowData[index]
            let rowEle=(
                
                <List.Item 
                    multipleLine 
                    
                    onClick={() => {
                        this.queryDetail(rowData[index],sectionName,EmpId);
                        this.props.history.push("/recruit/CV")
                    }}
                    style={{marginBottom:2}}
                    >
                    {<div style={{ marginBottom: '8px',fontWeight: 'bold' }}>{candidateName}</div>}
                    <List.Item.Brief>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="工作年限"
                            style={{
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{exp+"年"}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="当前状态"
                            style={{
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{status}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="已经等待"
                            style={{
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{duration+"天"}
                    </div>
                    
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="学校"
                            style={{
                            marginLeft: 6,
                            marginRight: 32,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{schoolname}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="专业|学位"
                            style={{
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{specialty+"|"+education}
                    </div>
                    
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="公司"
                            style={{
                            marginLeft: 6,
                            marginRight: 32,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{companyName}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="部门|职位"
                            style={{
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{department+"|"+position}
                    </div>
                    
                    
                    </List.Item.Brief>
                </List.Item>
                
            )
            result.push(rowEle);
        }
        return result;
    }
    handleSection(data,EmpId){
        let result = [];
        for(let index=0;index<data.length;index++){
            const sectionName = data[index].name;
            const tmpData = data[index].data;
            let sectionEle=(
                
                <List 
                    renderHeader={this.handleSectionHeader(sectionName)} 
                    className="my-list"
                   
                    >
                {this.handleRow(tmpData,sectionName,EmpId)}
                </List>
                
                
            )
            result.push(sectionEle)
        }
        return result;
    }
    render(){
        
        const {loadingList,loadingAll} = this.props;
        const {status} = this.props.recruitTasks;

        if((status >= 200 && status < 300)){
            if(loadingAll|loadingList){
                return(
                    <div  style={{marginTop:"89px",left:"0",zIndex:"0"}}>
                        {'Loading...'}
                    </div>
                )
            }else{
                const {data} = this.props.recruitTasks;
                const {waiting,EmpId} = data;
                return(
                    <div  style={{marginTop:"89px",left:"0",zIndex:"0"}}>
                        {this.handleSection(waiting,EmpId)}
                        <WhiteSpace style={{marginBottom:100}}/>
                    </div>
                )
            }
            

        }else{
            return(
                <div  style={{marginTop:"89px",left:"0",zIndex:"0"}}>
                    {'加载失败(FAILED)!'}
                </div>
            )
        }
       
        
    }
}

export default connect(({loading,recruitTasks})=>({
    loadingAll:loading.models.recruitTasks,
    //当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
    loadingList:loading.effects['recruitTasks/queryData'],
    //当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
    recruitTasks:recruitTasks
}))(WaitingEasyC);

