import { List, WhiteSpace, Radio,Button, Modal, Toast } from 'antd-mobile';
import { connect } from 'dva';
//import { createForm } from 'rc-form';
import {Component} from 'react';

const RadioItem = Radio.RadioItem;

class CvSuggestionC extends Component{
    constructor(props) {
        super(props);
        //this.queryData();
        this.state = {
            suggestionText:"",
            key:-1,
            value: "",
            label: ""
        }
        
    }

    queryData(){
        console.log('start dispatch')
        const { dispatch } = this.props;
        dispatch({
                    type: 'recruitTasks/queryData', 
                }
        );
    }

    postCmt(params){
        console.log('start dispatch')
        console.log(params);

        const { dispatch } = this.props;
        dispatch({
                    type: 'recruitDetails/postCmt', 
                    payload:  {
                        "vacancyid" : params.vacancyId,
                        "candidateid" : params.candidateId,
                        "nextstatetext" : this.state.label,
                        "nextstate" : this.state.value,
                        "curstate" : params.CurState,
                        "suggestion" : this.state.suggestionText,
                        "empid" : params.EmpId
                    },
                }
        );
    }    

    handleRadioData(){
        let result = [];
        const {NextStates} = this.props.recruitDetails.data;
        for(let i=0;i<NextStates.length;i++){
            const {nextstatus, nextstatus_cn} = NextStates[i];
            result.push(
                { key: i, value: nextstatus, label: nextstatus_cn }
            )
        }
        return result
    }

    handleCheck(){
        let result = [{ text: '再想想', onPress: () => {} }]
        if(this.state.key>=0){
            result.push({ text: '确认', onPress: () => {
                console.log(this.state);
                this.postCmt(this.props.recruitDetails.data);
                this.handleIsSuccess();
            }
            })
        }
        return result;
    }

    handleIsSuccess(){
        const {loadingAll,loadingList,history} = this.props;
        if(!(loadingAll|loadingList)){
            const {status} = this.props.recruitDetails
            if(status>=200&&status<300){
                this.queryData();
                Toast.success('提交成功！', 0.8);
                history.push('/recruit');
            }else{
                Toast.fail('提交失败！', 0.8);
            }
        }
    }

    render(){
        console.log(this.props);
        const radioData = this.handleRadioData();
        return(
            <div>
            <div style={{textAlign:"center",zIndex:2,top:"89px",width:"100%",position:"fixed",textAlign:"center",backgroundColor:"#ffffff"}}>
                <WhiteSpace/>
                    <Button
                        type="primary" 
                        inline 
                        style={{ marginRight: '4px',height:"40px",lineHeight:"40px",fontSize:14 }}
                        onClick={() =>
                            Modal.alert('确认提交', '是否确认提交评价意见?',this.handleCheck())
                        }
                    >
                    提交意见</Button>
                    {/* <Button 
                        type="primary" 
                        inline 
                        style={{ marginRight: '4px',height:"40px",lineHeight:"40px",fontSize:14 }}
                        onClick={() => {
                            console.log(this.state)
                        }}
                    >确认提交</Button> */}
                <WhiteSpace/>
            </div>
            <div  style={{marginTop:"140px",left:"0",zIndex:0,position:"fixed",width:"100%"}}>
                
                {<div class="form-group">
                    <label for="suggestionTextId">
                    <div 
                        style={{
                            padding: "15px 15px 9px 10px",
                            marginRight: "15px",
                            marginLeft: "0",
                            fontSize: "14px",
                            color: "#888",
                            width: "100%",
                            boxSizing: "border-box"}}
                    >综合意见</div>
                    </label>
                    <div
                        style={{
                            padding: "15px 15px 9px 15px",
                            backgroundColor: "#C0E3FD",
                        }}
                    >
                        <textarea
                            style={{
                                padding: "15px 15px 9px 15px",
                                width: "100%",
                                boxSizing: "border-box"
                            }} 
                            type="text" class="form-control" rows="6" id="suggestionTextId" placeholder="请在此输入评价"
                            value={this.state.suggestionText} 
                            onChange={e => {
                                this.setState({
                                    suggestionText:e.target.value
                                })
                            }}
                            
                        >
                        </textarea>
                    </div>
                </div>}
                <WhiteSpace/>
                <List renderHeader={() => '是否通过(请点击下方条目)'}>
                    {radioData.map(i => (
                    <RadioItem 
                        style={{marginBottom:2}}
                        key={i.key} 
                        checked={this.state.key === i.key} 
                        onChange={() => {
                            console.log(i.value)
                            console.log(this.state.value)
                            this.setState({
                                value:i.value,
                                key:i.key,
                                label: i.label
                            })
                        }}>
                        {i.label}
                    </RadioItem>
                    ))}
                </List>
            </div>
            </div>
        )
    }
}

export default connect(({loading,recruitDetails})=>({
    loadingAll:loading.models.recruitDetails,
    //当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
    loadingList:loading.effects['recruitDetails/postCmt'],
    //当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
    recruitDetails:recruitDetails
}))(CvSuggestionC);