import * as ehrBasicService from '../services/ehrBasic';
export default{
    namespace: 'ehrbasic',
    state: {
        data:{
                "CNName":'',
                "joindate":'',
                "empcode":'',
                "Email":'',
                "mobile":'',
                "phone":'',
                "level":'',
                "orgName":'',
                "birthday":'',
                "reportTo":'',
                "hr":'' ,
                talentcode:0
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
            
                const { status, data} = yield call(ehrBasicService.queryData, payload);
                
                yield put({  
                    type: 'save',
                    payload: {
                        data:{
                            "CNName":(data.CNName)?data.CNName:'信息缺失',
                            "joindate":(data.joindate)?data.joindate:'信息缺失',
                            "empcode":(data.empcode)?data.empcode:'信息缺失',
                            "Email":(data.Email)?data.Email:'信息缺失',
                            "mobile":(data.mobile)?data.mobile:'信息缺失',
                            "phone":(data.phone)?data.phone:'信息缺失',
                            "level":(data.level)?data.level:'信息缺失',
                            "orgName":(data.orgName)?data.orgName:'信息缺失',
                            "birthday":(data.birthday)?data.birthday:'信息缺失',
                            "reportTo":(data.reportTo)?data.reportTo:'信息缺失',
                            "hr":(data.hr)?data.hr:'信息缺失',
                            "talentcode": (data.talentcode)?data.talentcode:0,
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