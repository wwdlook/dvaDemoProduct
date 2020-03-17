import React, { Component} from 'react';

import { connect,loading } from 'dva';
import styles from './IndexPage.css';
// import { Button } from 'antd-mobile';
import { Button, Table } from 'antd';

class RecruitPage extends Component{
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
    
    const { columns, data } = this.props.indexpage;
    
    return (
      <div style={{marginTop:64}}>
          
          <div>
              <Table columns={columns} dataSource={data}/>
          </div>
      </div>
    );
  }
  
}
RecruitPage.propTypes = {
};
export default connect(
  ({ indexpage }) => ({
    indexpage
  })
)(RecruitPage);