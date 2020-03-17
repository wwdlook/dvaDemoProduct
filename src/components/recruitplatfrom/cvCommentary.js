import { Badge, Tabs, List, WhiteSpace, Button } from 'antd-mobile';
import {Component} from 'react';
import { connect,loading } from 'dva';
require("./cvCmt.css")

class CvCmtLogC extends Component{
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
                {/* <div 
                    style={{
                        padding: "15px 15px 9px 15px",
                        fontSize: "14px",
                        color: "#888",
                        width: "100%",
                        boxSizing: "border-box"}}
                >历史评价意见</div> */}
                <div style={{padding: "15px 15px 9px 15px",fontSize: "14px",width: "100%",boxSizing: "border-box",fontWeight: 'bold', color: '#000' }}>历史评价意见</div>
                <WhiteSpace />
            </div>
        )
    }

    handleRow(CmtData){
        let result = [];
        for(let index=0;index<CmtData.length;index++){
            const {status_Cn,cnname,updatetime,cn_zhpj} = CmtData[index]
            let rowEle0=(             
                <List.Item 
                    wrap 
                    style={{marginBottom:0}}
                    >
                    {<div style={{ marginBottom: '8px',fontWeight: 'bold',fontSize:15 }}>{status_Cn}</div>}
                    <List.Item.Brief wrap>
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
                        />{cnname}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="面试时间"
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
                        />{updatetime}
                    </div>
                    <div style={{ marginBottom: '2px',color:'#000',fontSize:13 }}>
                        <Badge text="综合评价"
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
            );
            result.push(rowEle0);
            let rowEle1 = ( 
                <div 
                    className="am-list-item am-list-line-multiple"
                    style={{marginBottom:2}}
                >
                <span style={{ display: 'none' }}>you can custom body wrap element</span>
                <div style={{marginLeft:7,paddingRight:17,paddingBottom:15}}>{cn_zhpj}</div>
                </div>
            )
            result.push(rowEle1);
        }
        return result;
    }

    handleSection(data){
        let result = [];
        const {CmtData,name,email,cell} = data;
        
        let BasicEle=this.handleBasic(name,email,cell);
        result.push(BasicEle);
        for(let index=0;index<CmtData.length;index++){
            const jobname = CmtData[index].name;
            const tmpdata = CmtData[index].data;
            let CmtEle=(
                <div>
                <List 
                        renderHeader={()=> <div style={{ marginBottom: '8px',color:'#000000',fontWeight: 'bold',fontSize:15 }}>{jobname}</div>} 
                        className="my-list"
                        style={{whiteSpace: "normal"}}
                        
                    >
                    {this.handleRow(tmpdata)}
                </List>
                </div>
            )
            result.push(CmtEle);
        }
        
        
        return result;
    }

    render(){
        console.log(this.props);
        // return( <div  style={{marginTop:"140px",left:"0",zIndex:0}}><h3>Appointment</h3></div>)
        const {loadingList,loadingAll} = this.props;
        const {data,status} = this.props.recruitCmtRecords;
        
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

export default connect(({loading,recruitCmtRecords})=>({
    loadingAll:loading.models.recruitCmtRecords,
    //当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
    loadingList:loading.effects['recruitCmtRecords/queryData'],
    //当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
    recruitCmtRecords:recruitCmtRecords
}))(CvCmtLogC);

