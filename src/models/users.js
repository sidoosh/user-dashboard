import { queryUsers } from '../services/users';

export default {

  namespace: 'users',

  state: {
    applyFilter: true
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },

  effects: {
    * fetch(_, { call, put }) {
      const { data } = yield call(queryUsers);

      if (data.length > 0) {
        yield put({ type: 'updateState', payload: data });
      }
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return ({
        ...state,
        users: payload,
        filteredUsers: payload
      })
    },
    toggleFilter(state) {
      const { applyFilter, users } = state;
      if (applyFilter) {
        const filteredUsers = users.filter(({ age, firstName, lastName }) => age >= 20 && age < 30 && `${firstName} ${lastName}`.length >= 10)
        return ({
          ...state,
          applyFilter: !applyFilter,
          filteredUsers
        })
      }

      return ({
        ...state,
        applyFilter: !applyFilter,
        filteredUsers: users
      })
    }
  },

};
