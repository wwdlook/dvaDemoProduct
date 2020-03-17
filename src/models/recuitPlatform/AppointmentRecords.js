import * as recruitTasksService from '../../services/recuitPlatform/recruitTasks';
export default{
    namespace: 'recruitAppRecords',
    state: {
        data:{
                data:[],
                name: '',
                email: '',
                cell: ''
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
            
                const { status, data} = yield call(recruitTasksService.queryRecord, payload);
                
                yield put({
                    type: 'show_data',
                    payload: {
                        data:{
                            data:data.data,
                            name: (data.name)?data.name:"信息缺失",
                            email: (data.email)?data.email:"信息缺失",
                            cell: (data.cell)?data.cell:"信息缺失"
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
            console.log(action.payload.data);
            return { ...state, 
                data:action.payload.data,
                status:action.payload.status
            };
        },
    },
    
}