import { NavBar,Icon, Flex, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import {Component} from 'react';


export default class EhrHeader extends Component{
    constructor(props) {
        super(props);
        this.state = {
          iconContent: '',
          headContent: 'BLOCK'
        };
      }
    

    render(){
        console.log(this.state);
        let {iconContent, headContent} = this.state;
        let {history} = this.props;
        return(
            <NavBar
                mode="dark"
                icon={iconContent}
                // onLeftClick={() => history.push('/basic')}
                >{headContent}
            </NavBar>
        )
    }
}