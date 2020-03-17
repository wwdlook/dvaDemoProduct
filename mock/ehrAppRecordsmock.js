const Mock = require('mockjs');
const qs = require('qs');

let tableListData = {};

let db = Mock.mock(
    {
        data: [      
                    {
                        status_cn: "status_cn0",
                        empname: "面试官0",
                        location: "location0",
                        createusername: "createusername0",
                        interviewstarttime: "interviewstarttime0",
                        interviewendtime: "interviewendtime0",
                        createdate:"createdate0"
                    },
                    {
                        status_cn: "status_cn1",
                        empname: "面试官1",
                        location: "location1",
                        createusername: "createusername1",
                        interviewstarttime: "interviewstarttime1",
                        interviewendtime: "interviewendtime1",
                        createdate:"createdate1"
                    }
        ],
        name:"nameMockApp",
        email:"emailMockApp",
        cell:"cellMockApp"
    }
);
tableListData = db;
global.tableListData = tableListData;
 
module.exports = {
    [`GET /api/RecruitPlatform/queryAppointment`](req, res) {
        
        const p = qs.parse(req.query);
        db.CNName = p.ssotoken?p.ssotoken:'lack ssotoken';
        res.status(200).json(db);
    },
    [`POST /api/RecruitPlatform/queryAppointment`](req, res) {
        
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