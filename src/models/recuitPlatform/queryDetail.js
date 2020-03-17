import * as recruitTasksService from '../../services/recuitPlatform/recruitTasks';
export default{
    namespace: 'recruitDetails',
    state: {
        data:{
                EduData:[],
                ExpData:[],
                BasicData:{
                    username:"",
                    email:"",
                    mobilephone:""
                },
                NextStates:[],
                dataindex:"",
                CurState:"",
                Position:"",
                Status:"",
                Emp:"",
                vacancyId:"",
                candidateId:"",
                EmpId:""
        },
        status: 200
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
      },
    
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        *queryData({payload}, {call, put}){
            
                const { status, data} = yield call(recruitTasksService.queryDetails, payload);
                
                yield put({
                    type: 'show_data',
                    payload: {
                        data:{
                            EduData:data.EduData,
                            ExpData:data.ExpData,
                            BasicData:data.BasicData,
                            NextStates:data.NextStates,
                            dataindex: data.dataindex,
                            CurState: data.CurState,
                            Position:data.Position?data.Position:"信息缺失",
                            Status:data.Status?data.Status:"信息缺失",
                            Emp:data.Emp?data.Emp:"信息缺失",
                            vacancyId:data.vacancyId,
                            candidateId:data.candidateId,
                            EmpId:data.EmpId
                        },
                        status: status             
                    },
                });
            
        },
        *postCmt({payload}, {call, put}){
            const { status} = yield call(recruitTasksService.suggestion, payload);
            yield put({
                type: 'show_status',
                payload: {
                    status: status             
                },
            });
        }
    },
    
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        show_status(state, action) {
            return { ...state,
                status:action.payload.status
            };
        },
        show_data(state, action) {
            console.log(action.payload.status);
            return { ...state, 
                data:action.payload.data,
                status:action.payload.status
            };
        },
    },
    
}