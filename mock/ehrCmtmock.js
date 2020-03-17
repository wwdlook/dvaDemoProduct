const Mock = require('mockjs');
const qs = require('qs');

let tableListData = {};

let db = Mock.mock(
    {
        data: [      
                {
                    name:"job0",
                    data:[
                        {
                            status_Cn: "status_cn0",
                            cnname: "面试官0",
                            cn_zhpj: "000综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价综合评价",
                            updatetime:"updatetime0"
                        },
                        {
                            status_Cn: "status_cn1",
                            cnname: "面试官1",
                            cn_zhpj: "cn_zhpj1",
                            updatetime:"updatetime1"
                        }
                    ]
                },
                {
                    name:"job1",
                    data:[
                        {
                            status_Cn: "status_cn10",
                            cnname: "面试官10",
                            cn_zhpj: "cn_zhp10",
                            updatetime:"updatetime10"
                        },
                        {
                            status_Cn: "status_cn11",
                            cnname: "面试官11",
                            cn_zhpj: "cn_zhpj11",
                            updatetime:"updatetime11"
                        }
                    ]
                },
        ],
        name:"nameMockApp",
        email:"emailMockApp",
        cell:"cellMockApp"
    }
);
tableListData = db;
global.tableListData = tableListData;
 
module.exports = {
    [`GET /api/RecruitPlatform/queryCommentary`](req, res) {
        
        const p = qs.parse(req.query);
        db.CNName = p.ssotoken?p.ssotoken:'lack ssotoken';
        res.status(200).json(db);
    },
    [`POST /api/RecruitPlatform/queryCommentary`](req, res) {
        
        const p = qs.parse(req.body);
        // if(p.index===0){
        //     db.dataindex=0;
        // }else{
        //     db.dataindex=1
        // }
        // db.dataindex =(p.index)?p.index:1;
        res.status(200).json(db);
    },
}