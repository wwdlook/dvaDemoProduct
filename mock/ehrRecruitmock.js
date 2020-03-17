const Mock = require('mockjs');
const qs = require('qs');

let tableListData = {};

let db = Mock.mock(
    {
        data0: [
            {
                name:"Wjob0",
                data:[
                    {
                        department: "department0",
                        schoolname: "schoolname0",
                        vacancyId: "vacancyId0",
                        candidateId: "candidateId0",
                        EmpId: "EmpId0",
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
                        department: "department1",
                        schoolname: "schoolname1",
                        vacancyId: "vacancyId1",
                        candidateId: "candidateId1",
                        EmpId: "EmpId1",
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
                        department: "department0",
                        schoolname: "schoolname0",
                        vacancyId: "vacancyId0",
                        candidateId: "candidateId0",
                        EmpId: "EmpId0",
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
                        department: "department1",
                        schoolname: "schoolname1",
                        vacancyId: "vacancyId1",
                        candidateId: "candidateId1",
                        EmpId: "EmpId1",
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
                        department: "department2",
                        schoolname: "schoolname2",
                        vacancyId: "vacancyId2",
                        candidateId: "candidateId2",
                        EmpId: "EmpId2",
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
        ],
        data1: [
            {
                name:"Fjob0",
                data:[
                    {
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
                        empName: "empName0"
                    },
                    {
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
                        empName: "empName1"
                    }
                ]
            },
            {
                name:"Fjob1",
                data:[
                    {
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
                        empName: "empName0"
                    },
                    {
                        department: "Fdepartment1",
                        schoolname: "Fschoolname1",
                        vacancyId: "FvacancyId1",
                        candidateId: "FcandidateId1",
                        EmpId: "FEmpId1",
                        candidateName: "Fname1",
                        status:"Fstate1",
                        exp:"Fexp1",
                        education: "education1",
                        specialty:  "specialty1",
                        companyName: "companyName1",
                        position: "position1",
                        duration:"duration1",
                        empName: "empName1"
                    },
                    {
                        department: "Fdepartment2",
                        schoolname: "Fschoolname2",
                        vacancyId: "FvacancyId2",
                        candidateId: "FcandidateId2",
                        EmpId: "FEmpId2",
                        candidateName: "Fname2",
                        status:"Fstate2",
                        exp:"Fexp2",
                        education: "education2",
                        specialty:  "specialty2",
                        companyName: "companyName2",
                        position: "position2",
                        duration:"duration2",
                        empName: "empName2"
                    }
                ]
            }
        ],
        todoCount:'10',
        EmpId:'EmpIdMock'
    }
);
tableListData = db;
global.tableListData = tableListData;
 
module.exports = {
    [`GET /api/RecruitPlatform/Platform`](req, res) {
        
        const p = qs.parse(req.query);
        db.CNName = p.ssotoken?p.ssotoken:'lack ssotoken';
        res.status(200).json(db);
    },
    [`POST /api/RecruitPlatform/Platform`](req, res) {
        const p = qs.parse(req.body);
        db.CNName = p.ssotoken?p.ssotoken:'lack ssotoken';
        res.status(200).json(db);
    },
}