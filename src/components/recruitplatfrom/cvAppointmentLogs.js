import { Badge, Tabs, List, WhiteSpace, Button } from 'antd-mobile';
import {Component} from 'react';
import { connect,loading } from 'dva';
require("./cvEasy.css")

class CvAppRecordsC extends Component{
    constructor(props) {
        super(props);
        //this.queryData();
        
      }

    // componentDidMount(){
    //     this.queryData();
    // }

    handleBasic(name,email,mobilephone){

        return(
            <div>
                <List renderHeader={() => <div style={{fontWeight: 'bold', color: '#000' }}>教育信息</div>} className="my-list">
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
                   {(name)?name:"信息缺失"}
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
                   {(email)?email:"信息缺失"}
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
                   {(mobilephone)?mobilephone:"信息缺失"}
                    </div>
                    </div>
                </List>
                <WhiteSpace />
            </div>
        )
    }

    handleRow(appData){
        let result = [];
        for(let index=0;index<appData.length;index++){
            const {status_cn,empname,location,createusername,interviewstarttime,interviewendtime,createdate} = appData[index]
            let rowEle=(             
                <List.Item 
                    multipleLine 
                    style={{marginBottom:2}}
                    >
                    {<div style={{ marginBottom: '8px',fontWeight: 'bold' }}>{status_cn}</div>}
                    <List.Item.Brief>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="面试官"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 18,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{empname}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="面试地点"
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
                        />{location}
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
                        />{interviewstarttime}
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
                        />{interviewendtime}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="安排人"
                            style={{
                                zIndex:0,
                            marginLeft: 6,
                            marginRight: 18,
                            padding: '0 3px',
                            backgroundColor: '#fff',
                            borderRadius: 2,
                            color: '#f19736',
                            border: '1px solid #f19736',
                            }}
                        />{createusername}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="创建时间"
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
                        />{createdate}
                    </div>
                    </List.Item.Brief>
                </List.Item>
                
            )
            result.push(rowEle);
        }
        return result;
    }

    handleSection(data){
        let result = [];
        const {name,email,cell} = data;
        const appData = data.data;
        
        let BasicEle=this.handleBasic(name,email,cell);
        result.push(BasicEle);
        let AppEle=(
            <div>
            <List 
                    renderHeader={()=> <div style={{fontWeight: 'bold', color: '#000' }}>预约记录</div>} 
                    className="my-list"
                >
                {this.handleRow(appData)}
            </List>
            </div>
            
        )
        
        result.push(AppEle);
        return result;
    }

    render(){
        console.log(this.props);
        // return( <div  style={{marginTop:"140px",left:"0",zIndex:0}}><h3>Appointment</h3></div>)
        const {loadingList,loadingAll} = this.props;
        const {data,status} = this.props.recruitAppRecords;
        
        if((status >= 200 && status < 300)){
            if(loadingAll|loadingList){
                return(
                    <div  style={{marginTop:"89px",left:"0",zIndex:"0"}}>
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
                <div  style={{marginTop:"89px",left:"0",zIndex:"0"}}>
                    {'加载失败(FAILED)!'}
                </div>
            )
        }
       
        
    }
}

export default connect(({loading,recruitAppRecords})=>({
    loadingAll:loading.models.recruitAppRecords,
    //当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
    loadingList:loading.effects['recruitAppRecords/queryData'],
    //当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
    recruitAppRecords:recruitAppRecords
}))(CvAppRecordsC);

