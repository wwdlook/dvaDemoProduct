import * as usersService from '../services/user';
export default{
    namespace: 'indexpage',
    state: {
        columns:[
            {
                title: 'namereal',
                dataIndex: 'name'
            },{
                title: 'genderreal',
                dataIndex: 'gender'
            }
        ],
        data: [{
            "key": "1",
            "name": "王大斌",
            "gender": "男"
          },{
            "key": "2",
            "name": "刘小洋",
            "gender": "男"
          }]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
      },
    
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        *addUser({payload}, {call, put}){
            const myuser = yield call(usersService.getUser, payload);
            console.log(myuser);
            yield put({  
                type: 'ADD_USER',
                payload: {
                      myuser:myuser.data
                },
              });
        }
    },
    
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        ADD_USER(state, action) {
            return { ...state, 
            data:state.data.concat(action.payload.myuser) };
        },
    },
    
}