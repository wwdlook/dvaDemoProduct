import { Button, NavBar, ActivityIndicator, List, WhiteSpace, Toast } from 'antd-mobile';
import {Component} from 'react';
import { connect,loading } from 'dva';

const Item = List.Item;
const Brief = Item.Brief;


function getQueryVariable(){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var params = {};
    if(vars.length>0){
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            params[pair[0]] = pair[1];
        }
    }
    return(params);
}

function HandleContent(props){
    const {data,title}  = props;
    return(
        <div 
        className="am-list-item am-list-line-multiple"
        style={{padding: "0px 15px"}}
        >
        <div className="am-list-content"
        style={{ padding: "7px 0px",fontSize:17,width:"30%",color:"#888888"}}
        >
        {title}
        </div>
        <div
        style={{padding: "7px 0px", fontSize:15, width:"70%", textAlign:'end'}}
        >
        {(data)?data:"信息缺失"}
        </div></div>        
    )            
}

class BasicInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
        };
        console.log('start')
        this.showToast();
        this.queryData();
        
    }

    queryData = () => {
        const urlparams = getQueryVariable();
        console.log('start dispatch')
        const { dispatch } = this.props;
        dispatch({
        type: 'ehrbasic/queryData',
        payload: urlparams
        });
    }

    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }

    showToast = () => {
        this.setState({ animating: false });
        this.closeTimer = setTimeout(() => {
            this.setState({ animating: !this.state.animating });
        }, 100);
    }

    loadedToast(){
        let { loadingAll, loadingList, ehrBasic} = this.props;
        let { data,status } = ehrBasic
        if(status >= 200 && status < 300){
            if(!(loadingAll|loadingList)){
                Toast.success('加载完毕 !!!', 0.5)
            }
        }else{
            Toast.fail('请求失败 !!!', 0.5)
        }
    }

    handleButton(talentcode){
        let buttonEle = '';
        if(talentcode===1){
            let timestamp = (new Date()).valueOf();
        
            buttonEle = (<Button 
                            type="primary" 
                            inline 
                            style={{ marginLeft: '14px', marginRight: '4px',height:"40px",lineHeight:"40px",fontSize:14 }}
                            href={"/EmployeeProfile/tags.html?time="+timestamp}
                        >人才画像</Button>)
        }
        return buttonEle;
    }
    
    loadedContent() {
        let { loadingAll, loadingList, ehrBasic} = this.props;
        let { data,status } = ehrBasic
        
        return(
            <div>
                <List renderHeader={() => <div style={{fontWeight: 'bold', color: '#000' }}>基本信息</div>} className="my-list">
                    <HandleContent data={data.CNName} title={'姓名'}/>
                    <HandleContent data={data.empcode} title={'工号'}/>
                    <HandleContent data={data.mobile} title={'手机号'}/>
                    <HandleContent data={data.Email} title={'邮箱'}/>
                    <HandleContent data={data.phone} title={'座机'}/>
                    <HandleContent data={data.level} title={'职级'}/>
                    <HandleContent data={data.birthday} title={'生日'}/>
                    <HandleContent data={data.joindate} title={'入职时间'}/>
                </List>
                <WhiteSpace />
                <List renderHeader={() => <div style={{fontWeight: 'bold', color: '#000' }}>组织信息</div>} className="my-list">
                    <HandleContent data={data.orgName} title={'所属团队'}/>
                    <HandleContent data={data.reportTo} title={'直接主管'}/>
                    <HandleContent data={data.hr} title={'HRBP'}/>
                </List>
                <WhiteSpace />
                {this.handleButton(data.talentcode)}
                <ActivityIndicator
                    toast
                    text="Loading..."
                    animating={(loadingAll|loadingList)&this.state.animating&&(status >= 200 && status < 300)}
                />
                
                {this.loadedToast()}
                
            </div>
        )
    };

    loadingContent(){

    }

    render(){
        
        return(
            
            <div >
                <div style={{position:"fixed",width:"100%",top:"0",left:"0",height:"45px",zIndex:"99"}}>
                <NavBar mode="dark">
                    个人基本信息
                </NavBar>
                </div>
                <WhiteSpace />
                <div style={{position:"fixed",width:"100%",top:"45px",left:"0",height:"45px",zIndex:"0"}}>
                {this.loadedContent()}
                </div>
                <WhiteSpace style={{marginBottom:100}}/>
            </div>
        )
    }
}


BasicInfo.propTypes = {
};

export default connect(({loading,ehrbasic})=>({
    loadingAll:loading.models.ehrbasic,
    //当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
    loadingList:loading.effects['ehrbasic/queryData'],
    //当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
    ehrBasic:ehrbasic,
}))(BasicInfo);