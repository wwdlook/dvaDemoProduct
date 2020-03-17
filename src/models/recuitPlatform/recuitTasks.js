import * as recruitTasksService from '../../services/recuitPlatform/recruitTasks';
export default{
    namespace: 'recruitTasks',
    state: {
        data:{
                waiting:[[]],
                finished:[[]],
                todoCount: 0,
                EmpId: ''
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
            
                const { status, data} = yield call(recruitTasksService.queryTasks);
                
                yield put({
                    type: 'show_data',
                    payload: {
                        data:{
                            waiting:(data.data0)?data.data0:[[]],
                            finished:(data.data1)?data.data1:[[]],
                            todoCount: (data.todoCount)?data.todoCount:0,
                            EmpId: (data.EmpId)?data.EmpId:''
                        },
                        status: status             
                    },
                });
            
        }
    },
    
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
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