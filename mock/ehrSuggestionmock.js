const Mock = require('mockjs');
const qs = require('qs');

let tableListData = {};

let db = Mock.mock(
    {
        code:"0",
        msg:"msg"
    }
);
tableListData = db;
global.tableListData = tableListData;
 
module.exports = {
    [`GET /api/RecruitPlatform/suggestion`](req, res) {
        
        const p = qs.parse(req.query);
        db.CNName = p.ssotoken?p.ssotoken:'lack ssotoken';
        res.status(200).json(db);
    },
    [`POST /api/RecruitPlatform/suggestion`](req, res) {
        
        const p = qs.parse(req.body);
        console.log(p)
        // if(p.index===0){
        //     db.dataindex=0;
        // }else{
        //     db.dataindex=1
        // }
        // db.dataindex =(p.index)?p.index:1;
        res.status(200).json(db);
    },
}