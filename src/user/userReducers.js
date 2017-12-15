const initialUserState = {
  isAuthenticated: false,
};

const user = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        isAuthenticated: true,
        name: action.name,
        token: action.token,
        pic: action.pic,
      };
    case 'LOG_OUT':
      return {isAuthenticated: false};
    default:
      return state;
  }
};

export default user;
