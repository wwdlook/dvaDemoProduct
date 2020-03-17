const Mock = require('mockjs');
const qs = require('qs');

let tableListData = {};

let db = Mock.mock(
    {
        'data':[{
                "key": "1",
                "name": "王大斌",
                "gender": "男"
                },{
                    "key": "2",
                    "name": "刘小洋",
                    "gender": "男"
                }
            ],
    }
);
tableListData = db;
global.tableListData = tableListData;
 
module.exports = {
    [`GET /api/users`](req, res) {
        
        const p = qs.parse(req.query);
        db.data[0].name = p;
        res.status(200).json(db);
    },
    [`POST /api/users`](req, res) {
        
        const p = qs.parse(req.body);
        db.data[0].name = p.uid;
        res.status(200).json(db);
    },
}