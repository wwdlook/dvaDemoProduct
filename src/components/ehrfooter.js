import { TabBar,WhiteSpace } from 'antd-mobile';
import { Router, Route, Switch, routerRedux } from 'dva/router'
import { Component } from 'react'
require("./ehrfooter.css")



export default class EhrFooter extends Component {
  constructor(props) {
    super(props);
    const {pathname} = props.history.location;
    let rootname = '/';
    if(pathname.split('/').length>1){
      rootname = rootname+pathname.split('/')[1];
    }
    
    console.log(rootname)
    console.log(rootname=== '/')
    this.state = {
      selectedTab: rootname,
      hidden: false,
    };
  }

  render() {
    
      let {history} = this.props;
      
    return (
      
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          
        >
          <TabBar.Item
            title="基本信息"
            key="home"
            icon={
              <svg width='22px' height='22px' className="icon" aria-hidden="true"><use xlinkHref="#icon-home"></use></svg>
            }
            selectedIcon={<svg width='22px' height='22px' class="icon" aria-hidden="true"><use xlinkHref="#icon-home-on"></use></svg>}
            selected={this.state.selectedTab === '/'}
            onPress={() => {
                history.push('/');
              this.setState({
                selectedTab: '/',
              });
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          
          <TabBar.Item
            icon={<svg width='22px' height='22px' className="icon" aria-hidden="true"><use xlinkHref="#icon-zhaopinguanli"></use></svg>}
            selectedIcon={<svg width='22px' height='22px' className="icon" aria-hidden="true"><use xlinkHref="#icon-zhaopinguanli-on"></use></svg>}
            title="招聘工作台"
            key="recruit"
            selected={this.state.selectedTab === '/recruit'}
            onPress={() => {
                history.push('/recruit');
              this.setState({
                selectedTab: '/recruit',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
        
      
    );
  }
}

