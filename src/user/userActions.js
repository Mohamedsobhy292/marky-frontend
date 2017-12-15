export function logInAction(token, name, pic) {
  return {
    type: 'LOG_IN',
    token,
    name,
    pic,
  };
}

export function logOut(text) {
  return {
    type: 'LOG_OUT',
    text,
  };
}
