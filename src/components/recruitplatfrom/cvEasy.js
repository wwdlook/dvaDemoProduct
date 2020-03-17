import { Badge, Tabs, List, WhiteSpace, Button } from 'antd-mobile';
import {Component} from 'react';
import { connect,loading } from 'dva';
require("./cvEasy.css")

class CvEasyC extends Component{
    constructor(props) {
        super(props);
        //this.queryData();
        
    }
    
    queryAppRecords(params,sectionName,EmpId){
        console.log('start dispatch')
        const { dispatch } = this.props;
        dispatch({
                    type: 'recruitAppRecords/queryData', 
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

    queryRecords(params){
        console.log('start dispatch')
        const { dispatch } = this.props;
        dispatch({
                    type: 'recruitAppRecords/queryData', 
                    payload:  {
                    "vacancyid" : params.vacancyId,
                    "candidateid" : params.candidateId,
                    "name" : params.BasicData.username,
                    "email" : params.BasicData.email,
                    "cell" : params.BasicData.mobilephone
                    },
                }
        );
    }
    // componentDidMount(){
    //     this.queryData();
    // }

    handleBasic(basicData,Position,Status,Emp){

        return(
            <div>
                <List renderHeader={() => <div style={{fontWeight: 'bold', color: '#000' }}>基本信息</div>} className="my-list">
                    <div 
                    className="am-list-item am-list-line-multiple"
                    style={{padding: "0px 15px"}}
                    >
                    <div className="am-list-content"
                    style={{ padding: "7px 0px",fontSize:17,width:"30%",color:"#888888"}}
                    >
                    姓名
                    </div>
                    <div
                    style={{padding: "7px 0px", fontSize:13, width:"70%", textAlign:'end'}}
                    >
                   {(basicData.username)?basicData.username:"信息缺失"}
                   </div></div>
                    <div 
                    className="am-list-item am-list-line-multiple"
                    style={{padding: "0px 15px"}}
                    >
                    <div className="am-list-content"
                    style={{ padding: "7px 0px",fontSize:17,width:"30%",color:"#888888"}}
                    >
                    电子邮箱
                    </div>
                    <div
                    style={{padding: "7px 0px", fontSize:13, width:"70%", textAlign:'end'}}
                    >
                   {(basicData.email)?basicData.email:"信息缺失"}
                    </div>
                    </div>
                    <div 
                    className="am-list-item am-list-line-multiple"
                    style={{padding: "0px 15px"}}
                    >
                    <div className="am-list-content"
                    style={{ padding: "7px 0px",fontSize:17,width:"30%",color:"#888888"}}
                    >
                    手机号
                    </div>
                    <div
                    style={{padding: "7px 0px", fontSize:13, width:"70%", textAlign:'end'}}
                    >
                   {(basicData.mobilephone)?basicData.mobilephone:"信息缺失"}
                    </div>
                    </div>
                </List>
                <WhiteSpace />
                <List renderHeader={() =>  <div style={{fontWeight: 'bold', color: '#000' }}>招聘信息</div>} className="my-list">
                    <div 
                    className="am-list-item am-list-line-multiple"
                    style={{padding: "0px 15px"}}
                    >
                    <div className="am-list-content"
                    style={{ padding: "7px 0px",fontSize:17,width:"30%",color:"#888888"}}
                    >
                    职位
                    </div>
                    <div
                    style={{padding: "7px 0px", fontSize:13, width:"70%", textAlign:'end'}}
                    >
                   {(Position)?Position:"信息缺失"}
                    </div>
                    </div>
                    <div 
                    className="am-list-item am-list-line-multiple"
                    style={{padding: "0px 15px"}}
                    >
                    <div className="am-list-content"
                    style={{ padding: "7px 0px",fontSize:17,width:"30%",color:"#888888"}}
                    >
                    状态
                    </div>
                    <div
                    style={{padding: "7px 0px", fontSize:13, width:"70%", textAlign:'end'}}
                    >
                   {(Status)?Status:"信息缺失"}
                    </div>
                    </div>
                    <div 
                    className="am-list-item am-list-line-multiple"
                    style={{padding: "0px 15px"}}
                    >
                    <div className="am-list-content"
                    style={{ padding: "7px 0px",fontSize:17,width:"30%",color:"#888888"}}
                    >
                    当前处理人
                    </div>
                    <div
                    style={{padding: "7px 0px", fontSize:13, width:"70%", textAlign:'end'}}
                    >
                   {(Emp)?Emp:"信息缺失"}
                    </div>
                    </div>
                </List>
                <WhiteSpace />
            </div>
        )
    }

    handleEduRow(rowEduData){
        let result = [];
        for(let index=0;index<rowEduData.length;index++){
            const {edustartdate,eduenddate,schoolname,education,specialty} = rowEduData[index]
            let rowEle=(             
                <List.Item 
                    multipleLine 
                    style={{marginBottom:2}}
                    >
                    {<div style={{ marginBottom: '8px',fontWeight: 'bold' }}>{"学校: "+schoolname}</div>}
                    <List.Item.Brief>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="专业"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 32,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{specialty}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="学位"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 32,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{education}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="开始时间"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{edustartdate}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="结束时间"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{eduenddate}
                    </div>
                    </List.Item.Brief>
                </List.Item>
                
            )
            result.push(rowEle);
        }
        return result;
    }

    handleExpRow(rowExpData){
        let result = [];
        for(let index=0;index<rowExpData.length;index++){
            const {expstartdate,expenddate,companyName,department,position,responsibility} = rowExpData[index]
            let rowEle=(
                
                <List.Item 
                    multipleLine 
                    style={{marginBottom:0,paddingBottom:"5px"}}
                    >
                    {<div style={{ marginBottom: '8px',fontWeight: 'bold' }}>{"公司: "+companyName}</div>}
                    <List.Item.Brief>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="部门"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 32,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{department}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="职位"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 32,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{position}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="开始时间"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{expstartdate}
                    </div>
                    <div style={{ marginBottom: '3px',color:'#000',fontSize:13 }}>
                        <Badge text="结束时间"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{expenddate}
                    </div>
                    <div style={{ marginBottom: '0px',color:'#000',fontSize:13 }}>
                        <Badge text="工作履历"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 6,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />
                    </div>
                    </List.Item.Brief>
                </List.Item>
                
            )
            result.push(rowEle);
            let rowEle1 = ( 
                <div 
                    className="am-list-item am-list-line-multiple"
                    style={{marginBottom:2,marginTop:0}}
                >
                <div style={{marginLeft:7,paddingRight:17,paddingBottom:15}}>{responsibility}</div>
                </div>
            )
            result.push(rowEle1);
        }
        return result;
    }

    handleButtons(dataindex){
        let cmtButton = <Button type="primary" disabled inline style={{ marginRight: '4px',height:"40px",lineHeight:"40px",fontSize:14 }}>已评价</Button>
        if(dataindex===0){
            cmtButton = <Button type="primary" inline style={{ marginRight: '4px',height:"40px",lineHeight:"40px",fontSize:14 }}>评价意见</Button>
        }
        return(
            <div style={{textAlign:"center"}}>
            <WhiteSpace/>
            {cmtButton}
            <WhiteSpace/>
            </div>
        )
        
    }

    handleSection(data){
        let result = [];
        const {EduData,ExpData,BasicData,Position,Status,Emp} = data;
        
        let BasicEle=this.handleBasic(BasicData,Position,Status,Emp);
        result.push(BasicEle);
        let EduEle=(
            <div>
            <List 
                    renderHeader={()=> <div style={{fontWeight: 'bold', color: '#000' }}>教育信息</div>} 
                    className="my-list"
                >
                {this.handleEduRow(EduData)}
            </List>
            </div>
            
        )
        let ExpEle=(
            <div>
                <List 
                    wrap
                    renderHeader={()=> <div style={{fontWeight: 'bold', color: '#000' }}>职业信息</div>} 
                    className="my-list"
                >
                {this.handleExpRow(ExpData)}
                </List>
            </div>
        )
        result.push(EduEle);
        result.push(<WhiteSpace />);
        result.push(ExpEle);

        return result;
    }

    render(){
        console.log(this.props);
        
        const {loadingList,loadingAll} = this.props;
        const {data,status} = this.props.recruitDetails;

        const tabs = [
            { title: "详细信息",
              key: '/recruit/CV'
            },
            { title: "预约记录",
              key: '/recruit/CV/Appointment'},
            { title: "历史意见",
              key: '/recruit/CV/Comments'}
        ]
        
        if((status >= 200 && status < 300)){
            if(loadingAll|loadingList){
                return(
                    <div  style={{marginTop:"140px",left:"0",zIndex:0}}>
                        {'Loading...'}
                    </div>
                )
            }else{
                
                return(
                    <div  style={{marginTop:"140px",left:"0",zIndex:0}}>
                        {this.handleSection(data)}
                        <WhiteSpace style={{marginBottom:100}}/>
                    </div>
                )
            }

        }else{
            return(
                <div  style={{marginTop:"140px",left:"0",zIndex:0}}>
                    {'加载失败(FAILED)!'}
                </div>
            )
        }
       
        
    }
}

export default connect(({loading,recruitDetails})=>({
    loadingAll:loading.models.recruitDetails,
    //当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
    loadingList:loading.effects['recruitDetails/queryData'],
    //当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
    recruitDetails:recruitDetails
}))(CvEasyC);

