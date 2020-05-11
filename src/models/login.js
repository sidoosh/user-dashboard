import { routerRedux } from 'dva/router';
import { validateUser } from '../services/login';

export default {

  namespace: 'login',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    * redirectPage(_, { call, put, select }) {

      const { accountId, pswd } = yield select(_ => _.login);
      const { data } = yield call(validateUser, { data: { accountId, pswd } });

      if (data.message && data.token) {
        localStorage.setItem('token', data.token);
        yield put(routerRedux.replace({ pathname: '/users' }))
      } else {
        yield put(routerRedux.replace({ pathname: '/error', state: 'fromLogin' }))
      }
    },
    * catchErr(_, { put }) {
      yield put(routerRedux.replace({ pathname: '/error', state: { data: 'fromUsers' } }))
    }
  },

  reducers: {
    updateInputField(state, { payload }) {
      const { name, value } = payload;
      return ({
        ...state,
        [name]: value
      });
    },
  },

};
