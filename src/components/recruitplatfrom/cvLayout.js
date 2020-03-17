import { List , Tabs, Modal, WhiteSpace, Button, Toast } from 'antd-mobile';
import {Component} from 'react';
import { connect } from 'dva';
import CvEasyC from "./cvEasy"
import CvAppRecordsC from "./cvAppointmentLogs"
import CvCmtLogC from "./cvCommentary"
import CvSuggestionC from "./cvSuggestion"
require("./cvEasy.css")

const prompt = Modal.prompt;

class CvLayountC extends Component{
    constructor(props) {
        super(props);
        //this.queryData();
        const {dataindex} = this.props.recruitDetails.data;
        this.state = {
            tabkey:"CV",
            dataindex: (dataindex===0)?0:1,
            suggestionParams: {}
        }
      }
    
    queryDetail(params){
        console.log('start dispatch')
        const { dispatch } = this.props;
        dispatch({
                    type: 'recruitDetails/queryData', 
                    payload:  {
                    "index" : params.dataindex,
                    "vacancyid" : params.vacancyId,
                    "candidateid" : params.candidateId,
                    "jobname" : params.Position,
                    "status" : params.Status,
                    "curstate" : params.CurState,
                    "empname" : params.BasicData.empName,
                    "empid" : params.EmpId
                },
                }
        );
        console.log('end dispatch')
    }

    queryRecords(params){
        console.log('start dispatch')
        console.log(params);
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

    queryCmts(params){
        console.log('start dispatch')
        console.log(params);
        const { dispatch } = this.props;
        dispatch({
                    type: 'recruitCmtRecords/queryData', 
                    payload:  {
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

    handleButtons(dataindex,postFun){
        
        let cmtButton = <Button type="primary" disabled inline style={{ marginRight: '4px',height:"40px",lineHeight:"40px",fontSize:14 }}>已评价</Button>
        if(dataindex===0){
            if(this.state.tabkey === "Suggestion"){
                cmtButton = ("")
            }else{
                cmtButton = (
                            <Button 
                                type="primary" 
                                inline 
                                style={{ marginRight: '4px',height:"40px",lineHeight:"40px",fontSize:14 }}
                                onClick={() => {
                                    this.setState({
                                        tabkey:"Suggestion"
                                    });  
                                }}
                            >评价意见</Button>
                        )
            }
        }
        return(
            <div style={{textAlign:"center"}}>
            <WhiteSpace/>
            {cmtButton}
            <WhiteSpace/>
            </div>
        )
        
    }

    handleContent(){
        const {tabkey} = this.state;
        if(tabkey === 'CV'){
            return(<CvEasyC/>)
        }else{
            if(tabkey === 'Appointment'){
                return(<CvAppRecordsC/>)
            }
            if(tabkey === 'Comments'){
                return(<CvCmtLogC/>)
            }
            if(tabkey === 'Suggestion'){
                return(<CvSuggestionC history={this.props.history}/>)
            }
        }
    }    

    render(){
        console.log(this.props);
        
        const {loadingList,loadingAll} = this.props;
        const {data,status} = this.props.recruitDetails;

        const tabs = [
            { title: "详细信息",
              key: 'CV',
              method: ()=>this.queryDetail(data)
            },
            { title: "预约记录",
              key: 'Appointment',
              method: ()=>this.queryRecords(data)},
            { title: "历史意见",
              key: 'Comments',
              method: ()=>this.queryCmts(data)}
        ]
        
        if((status >= 200 && status < 300)){
            if(loadingAll|loadingList){
                return(
                    <div  style={{marginTop:"45px",left:"0",zIndex:"99"}}>
                        {'Loading...'}
                    </div>
                )
            }else{
                const {dataindex} = data;
                return(
                    <div>
                    <div style={{position:"fixed",width:"100%",top:"45px",left:"0",zIndex:"99"}}>
                    <Tabs 
                    tabs={tabs}
                    initialPage={0}
                    onChange={(tab) => { 
                        this.setState({
                            tabkey:tab.key
                        });   
                    }}
                    onTabClick={(tab) => {
                        tab.method();
                        this.setState({
                            tabkey:tab.key
                        });   
                    }}
                    >
                    </Tabs>
                    </div>
                    <div style={{zIndex:2,top:"87px",width:"100%",position:"fixed",textAlign:"center",backgroundColor:"#ffffff"}}>{this.handleButtons(dataindex)}</div>
                    
                    {this.handleContent()}
                    
                    </div>
                )
            }
        }else{
            return(
                <div  style={{marginTop:"45px",left:"0",zIndex:"99"}}>
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
}))(CvLayountC);

