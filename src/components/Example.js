import { ListView, PullToRefresh,  Accordion, List } from "antd-mobile"
import { StickyContainer, Sticky } from 'react-sticky';
import { Component } from "react";
import { findDomNode } from 'react-dom';


const data = [
    {
        name:"Wjob0",
        data:[
            {
                vacancyid: "vacancyid0",
                candidateName: "name0",
                status:"state0",
                exp:"exp0",
                education: "education0",
                specialty:  "specialty0",
                companyName: "companyName0",
                position: "position0",
                duration:"duration0",
                empName: "empName0"
            },
            {
                vacancyid: "vacancyid1",
                candidateName: "name1",
                status:"state1",
                exp:"exp1",
                education: "education1",
                specialty:  "specialty1",
                companyName: "companyName1",
                position: "position1",
                duration:"duration1",
                empName: "empName1"
            }
        ]
    },
    {
        name:"Wjob1",
        data:[
            {
                vacancyid: "vacancyid0",
                candidateName: "name0",
                status:"state0",
                exp:"exp0",
                education: "education0",
                specialty:  "specialty0",
                companyName: "companyName0",
                position: "position0",
                duration:"duration0",
                empName: "empName0"
            },
            {
                vacancyid: "vacancyid1",
                candidateName: "name1",
                status:"state1",
                exp:"exp1",
                education: "education1",
                specialty:  "specialty1",
                companyName: "companyName1",
                position: "position1",
                duration:"duration1",
                empName: "empName1"
            },
            {
                vacancyid: "vacancyid2",
                candidateName: "name2",
                status:"state2",
                exp:"exp2",
                education: "education2",
                specialty:  "specialty2",
                companyName: "companyName2",
                position: "position2",
                duration:"duration2",
                empName: "empName2"
            }
        ]
    },
    {
        name:"Wjob2",
        data:[
            {
                vacancyid: "vacancyid0",
                candidateName: "name0",
                status:"state0",
                exp:"exp0",
                education: "education0",
                specialty:  "specialty0",
                companyName: "companyName0",
                position: "position0",
                duration:"duration0",
                empName: "empName0"
            },
            {
                vacancyid: "vacancyid1",
                candidateName: "name1",
                status:"state1",
                exp:"exp1",
                education: "education1",
                specialty:  "specialty1",
                companyName: "companyName1",
                position: "position1",
                duration:"duration1",
                empName: "empName1"
            },
            {
                vacancyid: "vacancyid2",
                candidateName: "name2",
                status:"state2",
                exp:"exp2",
                education: "education2",
                specialty:  "specialty2",
                companyName: "companyName2",
                position: "position2",
                duration:"duration2",
                empName: "empName2"
            }
        ]
    }
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
    sectionIDs= [];
    rowIDs = [];
    
  for (let i = 0; i < data.length; i++) {
    
    const sectionName = data[i].name;
    const tmpData = data[i].data;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = data[i].data;
    rowIDs[i] = [];
    

    for (let j = 0; j < tmpData.length; j++) {
        const {vacancyid,candidateName} = tmpData[j];
        const rowName = candidateName;
        rowIDs[i].push(candidateName);
        dataBlobs[sectionName][rowName] = tmpData[j];
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

export default class Demo extends Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => {
        console.log(dataBlob[sectionID]);
        return sectionID;};
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[sectionID][rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      height: document.documentElement.clientHeight-60,
      refreshing: true,
      isLoading: true
    };
  }

//   componentDidUpdate() {
//     if (this.state.useBodyScroll) {
//       document.body.style.overflow = 'auto';
//     } else {
//       document.body.style.overflow = 'hidden';
//     }
//   }


  componentDidMount() {
    
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);
    // const hei = document.documentElement.clientHeight - findDomNode(this.lv).parentNode.offsetTop;
    
    // simulate initial Ajax
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        refreshing: false,
        isLoading: false,
      });
      console.log(this.state.dataSource)
      console.log(rowIDs)
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
  //     });
  //   }
  // }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        refreshing: false,
        isLoading: false,
      });
      console.log("pull to refreshing")
    }, 600);
  };

  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 5,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    
    
    const row = (rowData, rowID) => {
      
      return (
        <List.Item key={rowID} style={{ padding: '0 15px' }}>
        
          <div
            style={{
              lineHeight: '50px',
              color: '#FF6E27',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{rowData.candidateName}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.education}</div>
              <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.specialty}</div>
              <div><span style={{ fontSize: '30px', color: '#FF6E27' }}>35</span>¥ {rowID}</div>
            </div>
          </div>
          </List.Item>
      );
    };

    const sectionIdRow=(sectionData)=>{
        return(
            <Sticky >
            {({
              style,
            }) => {
                return(
              <div
                className="sticky"
                style={{
                  ...style,
                  zIndex: 3,
                  backgroundColor:'#5890ff',
                  color: 'white',
                  padding: '0'
                }}
              >{sectionData}</div>
            )}}
          </Sticky>
        )

    }

    const SectionWrapper=sectionID => (
      <StickyContainer
        key={`s_${sectionID}_c`}
        className="sticky-container"
        style={{ zIndex: 4 }}
      />
    );

    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        className="am-list sticky-list"
        
        //useBodyScroll
        renderSectionWrapper={sectionID => (
          <StickyContainer
            key={`s_${sectionID}_c`}
            className="sticky-container"
            style={{ zIndex: 4 }}
          />
        )}
        renderSectionHeader={sectionIdRow}
        
        // renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
        //   {"已经到底了~"}
        // </div>)}
        // renderBodyComponent={() => <MyBody />}
        renderRow={row}
        renderSeparator={separator}
        pageSize={4}
        scrollEventThrottle={200}
        
        // pullToRefresh={<PullToRefresh
        //   refreshing={this.state.refreshing}
        //   onRefresh={this.onRefresh}
        // />}
        
      />
    );
  }
}
