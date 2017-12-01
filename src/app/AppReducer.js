const initialUserState = {
  user: {
    isAuthenticated: false,
  },
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, isAuthenticated: true, name: 'ww'};
    case 'LOG_OUT':
      return {isAuthenticated: false};
    default:
      return state;
  }
};

export default user;
