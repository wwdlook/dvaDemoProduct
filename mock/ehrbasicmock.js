const Mock = require('mockjs');
const qs = require('qs');

let tableListData = {};

let db = Mock.mock(
    {
        CNName:'CNNameMock',
        joindate:'joindateMock',
        empcode:'empcodeMock',
        Email:'EmailMock',
        mobile:'mobileMock',
        phone:'phoneMock',
        level:'levelMock',
        orgName:'orgNameMock',
        birthday:'birthdayMock',
        reportTo:'reportToMock',
        hr:'hrMock',
        talentcode: 1
    }
);
tableListData = db;
global.tableListData = tableListData;
 
module.exports = {
    [`GET /api/ehrHome/ehrHome`](req, res) {
        
        const p = qs.parse(req.query);
        db.CNName = p.ssotoken?p.ssotoken:'lack ssotoken';
        res.status(200).json(db);
    },
    [`POST /api/ehrHome/ehrHome`](req, res) {
        
        const p = qs.parse(req.body);
        db.CNName = p.ssotoken?p.ssotoken:'lack ssotoken';
        res.status(200).json(db);
    },
}