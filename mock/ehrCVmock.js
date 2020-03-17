const Mock = require('mockjs');
const qs = require('qs');

let tableListData = {};

let db = Mock.mock(
    {
        EduData: [
            
                    {
                        schoolname: "schoolname0",
                        vacancyId: "vacancyId0",
                        candidateId: "candidateId0",
                        EmpId: "EmpId0",
                        candidateName: "name0",
                        status:"state0",
                        exp:"exp0",
                        education: "education0",
                        specialty:  "specialty0",
                        duration:"duration0",
                        empName: "empName0",
                        edustartdate:"edustartdateCVmock0",
                        eduenddate:"eduenddateCVmock0"

                    },
                    {
                        schoolname: "schoolname1",
                        vacancyId: "vacancyId1",
                        candidateId: "candidateId1",
                        EmpId: "EmpId0",
                        candidateName: "name1",
                        status:"state0",
                        exp:"exp0",
                        education: "education1",
                        specialty:  "specialty1",
                        duration:"duration0",
                        empName: "empName0",
                        edustartdate:"edustartdateCVmock1",
                        eduenddate:"eduenddateCVmock1"
                    },
                    
                    {
                        schoolname: "schoolname2",
                        vacancyId: "vacancyId2",
                        candidateId: "candidateId2",
                        EmpId: "EmpId2",
                        candidateName: "name2",
                        status:"state0",
                        exp:"exp0",
                        education: "education2",
                        specialty:  "specialty2",
                        duration:"duration0",
                        empName: "empName0",
                        edustartdate:"edustartdateCVmock2",
                        eduenddate:"eduenddateCVmock2"
                    }
        ],
        ExpData: [
            
                    {
                        responsibility: '000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历000工作履历',
                        department: "Fdepartment0",
                        schoolname: "Fschoolname0",
                        vacancyId: "FvacancyId0",
                        candidateId: "FcandidateId0",
                        EmpId: "FEmpId0",
                        candidateName: "Fname0",
                        status:"Fstate0",
                        exp:"Fexp0",
                        education: "education0",
                        specialty:  "specialty0",
                        companyName: "companyName0",
                        position: "position0",
                        duration:"duration0",
                        empName: "empName0",
                        expstartdate:"expstartdateCVmock0",
                        expenddate:"expenddateCVmock0"
                    },
                    {
                        responsibility: '111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历111工作履历',
                        department: "Fdepartment1",
                        schoolname: "Fschoolname1",
                        vacancyId: "FvacancyId1",
                        candidateId: "FcandidateId1",
                        EmpId: "FEmpId1",
                        candidateName: "name1",
                        status:"state1",
                        exp:"exp1",
                        education: "education1",
                        specialty:  "specialty1",
                        companyName: "companyName1",
                        position: "position1",
                        duration:"duration1",
                        empName: "empName1",
                        expstartdate:"expstartdateCVmock0",
                        expenddate:"expenddateCVmock0"
                    }
        ],
        BasicData:{
            username:"usernameCVmock",
            email:"emailCVmock",
            mobilephone:"mobileCVmock"
        },
        NextStates:[
            {
                nextstatus:"nextstatusID1",
                nextstatus_cn:"第一个可选状态"
            },
            {
                nextstatus:"nextstatusID2",
                nextstatus_cn:"第二个可选状态"
            }
        ],
        dataindex:"0CVmock",
        CurState:"CurStateCVmock",
        Position:"PositionCVmock",
        Status:"StatusCVmock",
        Emp:"EmpCVmock",
        vacancyId:"vacancyIdMockCv",
        candidateId:"candidateIdMockCv",
        EmpId:"EmpIdMockCv"


    }
);
tableListData = db;
global.tableListData = tableListData;
 
module.exports = {
    [`GET /api/RecruitPlatform/queryDetail`](req, res) {
        
        const p = qs.parse(req.query);
        db.CNName = p.ssotoken?p.ssotoken:'lack ssotoken';
        res.status(200).json(db);
    },
    [`POST /api/RecruitPlatform/queryDetail`](req, res) {
        
        const p = qs.parse(req.body);
        if(p.index===0){
            db.dataindex=0;
        }else{
            db.dataindex=1
        }
        // db.dataindex =(p.index)?p.index:1;
        res.status(200).json(db);
    },
}