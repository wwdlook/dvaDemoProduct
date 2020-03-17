
export default {

  namespace: 'example',

  state: {
    count: 0,
    test: 'just have a test'
  },

  // Subscriptions 是一种从 源 获取数据的方法，它来自于 elm。
  // 用于订阅一个数据源，然后根据条件 dispatch 需要的 action。
  subscriptions: {
    setup({ dispatch, history }) { // eslint-disable-line
      console.log('setup addEventListener')
    },
    
  },
  // Effect 被称为副作用，在我们的应用中，最常见的就是异步操作，Effects 的最终流向是通过 Reducers 改变 State。
  // 核心需要关注下 put, call, select。
  effects: {
    * fetch({ payload }, { call, put, select }) { // eslint-disable-line
      console.log('*fetch test')
      yield put({ type: 'save', payload }); // 用户触发action  不带namespace表明是本model中的方法

      /*
      const todos = yield select(state => state.todos); // 这边的 state 来源于全局的 state
          select 方法提供获取全局 state 的能力，
          也就是说，在这边如果你有需要其他 model 的数据，则完全可以通过 state.modelName 来获取

      yield call(addTodo, todo); // 用于调用异步逻辑，支持 promise 。

      yield put({ type: 'add', payload: todo }); // 用于触发 action 。
          这边需要注意的是，action 所调用的 reducer 或 effects 来源于本 model 那么在 type 中不需要声明命名空间，
          如果需要触发其他非本 model 的方法，则需要在 type 中声明命名空间，如 yield put({ type: 'namespace/fuc', payload: xxx });
       */
    },
  },

  reducers: {
    // action行为 返回新的数据对象   在其他组件中通过 props.dispatch('namespace/add', {}) 来进行调用
    save(state, action) {
      console.log('save: action: ', action.payload)
      // console.log( { ...state, ...action.payload })
      return Object.assign({}, state, {count: action.payload, test: action.testStr?action.testStr:'just have a async test'});
    },
    add(state, action) {
      console.log(action.type, '+1')
      return { count: state.count + 1, test: state.test }
    },
    minus(state, action) {
      console.log(action.type, '-' + action.payload)
      return { count: state.count - action.payload, test: state.test }
    },
  },

};