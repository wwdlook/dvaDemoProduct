import React, { Component} from 'react';

import { connect,loading } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd-mobile';
import { Table } from 'antd';


class IndexPage extends Component{
  changeData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'indexpage/addUser',
      payload: {
        'a':1,
        'b':2
      },
    });
  };
  

  render(){
    console.log(this.props);
    const { columns, data } = this.props.indexpage;
    const { loadingAll, loadingList} = this.props;
    let data1 = "finished";
    if(loadingAll|loadingList){
      data1 = "loading";
    }else{
      data1 = "";
    }
    return (
      <div style={{marginTop:64}}>
          <Button type="primary" onClick={this.changeData}>修改数据</Button>
          <div><a>{data1}</a></div>
          <div>
              <Table columns={columns} dataSource={data}/>
          </div>
      </div>
    );
  }
  
}

const mapStateToProps = ({loading,indexpage}) => {

  return {
    loadingAll:loading.models.indexpage,
    //当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
    loadingList:loading.effects['indexpage/addUser'],
    //当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
    indexpage:indexpage,
  }
}

IndexPage.propTypes = {
};
export default connect(({loading,indexpage})=>({
  loadingAll:loading.models.indexpage,
//当mySpace这个models有数据请求行为的时候，loading为true，没有请求的时候为false
  loadingList:loading.effects['indexpage/addUser'],
//当mySpace的effects中的myEffects有异步请求行为时为true，没有请求行为时为false
indexpage:indexpage,
}))(IndexPage);
